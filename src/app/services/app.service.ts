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
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { action } from '../models/synapse-dynamic-api/filter.model';
import { SubjectsService } from './subjects.service';
import { Subject } from 'rxjs';
import { PKBConfig } from '../models/config/pkb-config.model';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  personAgeInDays: number;
  prescriptionMedicationSupply = new Subject<{}>();
  PresMedSupply;

  isAppDataReady: boolean;
  showdrugChart: boolean;
  showDischargeSummaryNotes: boolean = true;

  constructor(private subject: SubjectsService) { }
  public modulename = "module-pkb";
  public enableLogging = true;
  public appConfig: PKBConfig;
  public apiService: any;
  public baseURI: string;
  public personId: string;
  
  public roleActions: action[] = [];
  public loggedInUserName: string = null;
  public loggedInUserRoles: Array<string> = [];
  
  reset(): void {
    this.personId = null;
    this.apiService = null;
    this.baseURI = null;
    this.loggedInUserName = null;
    this.enableLogging = true;
    this.roleActions = [];
    
    this.roleActions = [];
    this.loggedInUserName = null;
    
    this.isAppDataReady = false;
    this.loggedInUserRoles = [];
  }

  decodeAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    }
    catch (Error) {
      this.logToConsole(`Error: ${Error}`);
      return null;
    }
  }


  public AuthoriseAction(action: string): boolean {
    if (this.appConfig && this.appConfig.appSettings.enableRBAC)
      return this.roleActions.filter(x => x.actionname.toLowerCase().trim() == action.toLowerCase()).length > 0;
    else
      return true;

  }

  logToConsole(msg: any) {
    if (this.enableLogging) {
      console.log(msg);
    }
  }
}