//BEGIN LICENSE BLOCK 
//Interneuron Terminus

//Copyright(C) 2025  Interneuron Limited

//This program is free software: you can redistribute it and/or modify
//it under the terms of the GNU General Public License as published by
//the Free Software Foundation, either version 3 of the License, or
//(at your option) any later version.

//This program is distributed in the hope that it will be useful,
//but WITHOUT ANY WARRANTY; without even the implied warranty of
//MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

//See the
//GNU General Public License for more details.

//You should have received a copy of the GNU General Public License
//along with this program.If not, see<http://www.gnu.org/licenses/>.
//END LICENSE BLOCK 
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Endpoint } from './models/config/endpoints.model';
import { QuestionnaireResponseItem } from './models/fhir/resources/foundation/questionnaire-response-item.model';
import { QuestionnaireResponse } from './models/fhir/resources/foundation/questionnaire-response.model';
import { DataContract } from './models/synapse-dynamic-api/filter.model';
import { ApirequestService } from './services/apirequest.service';
import { AppService } from './services/app.service';
import { SubjectsService } from './services/subjects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy  {
  title = 'terminus-module-pkb';
  isLoading: boolean = true;
  showQuestionnaireResponse: boolean = false;
  questionnareResponses: any = [];
  selectedQuestionnaireResponse: any = null;
  endpoints: Endpoint;
  
  constructor(private subjects: SubjectsService, 
    public appService: AppService, 
    private apiRequest: ApirequestService) {

  }

  ngOnInit() {
    // this.appService.personId = "be5bb2b6-420a-411f-b790-408174d1de23";
    // this.initConfigAndGetMeta(this.appService.apiService);
  }

  @Input() set datacontract(value: DataContract) {
    this.appService.personId = value.personId;
    this.appService.apiService = value.apiService;
    this.subjects.unload = value.unload;
    this.initConfigAndGetMeta(this.appService.apiService);
  }

  @Output() frameworkAction = new EventEmitter<string>();

  subscriptions: Subscription = new Subscription();
  loadDrugChart: number = 0;


  ngOnDestroy() {
    this.appService.logToConsole("app component being unloaded");    
    
    this.appService.personId = null;
    this.appService.reset();
    this.subscriptions.unsubscribe();

    this.subjects.unload.next("module-pkb");
  }

  initConfigAndGetMeta(value: any) {
    this.appService.apiService = value;
    this.subscriptions.add(this.apiRequest.getRequest("./assets/config/pkb-module.config.json?V" + Math.random()).subscribe(
      (response) => {
        this.appService.appConfig = response;
        this.appService.baseURI = this.appService.appConfig.appSettings.endpoints.baseURI;
        this.appService.enableLogging = this.appService.appConfig.appSettings.enableLogging;
        this.endpoints = this.appService.appConfig.appSettings.endpoints;
        this.loadQuestionnaireResponse();
      }));
  }

  loadQuestionnaireResponse() {
    this.isLoading = true;
    this.subscriptions.add(this.apiRequest.getRequest(this.endpoints.getQuestionnaireResponse + this.appService.personId).subscribe(
      (response) => {
        this.questionnareResponses = JSON.parse(response);
        this.questionnareResponses.map(resp => {
          resp.response = JSON.parse(resp.response);
        });
        console.log(this.questionnareResponses);
        this.isLoading = false;
      }
    ));
  }

  // Events
  onViewQuestionnaireResponse(questionnaireResponse) {
    this.selectedQuestionnaireResponse = questionnaireResponse;
    this.showQuestionnaireResponse = true;
    console.log(this.selectedQuestionnaireResponse);
  }

  onBackClicked() {
    this.selectedQuestionnaireResponse = null;
    this.loadQuestionnaireResponse();
    this.showQuestionnaireResponse = false;
  }
}
