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
import { DomainResource } from "../../base/domain-resource.model";
import { Identifier } from "../../data-types/complex-types/identifier.model";
import { codeType } from "../../data-types/primitive-types/code.model";
import { dateTimeType } from "../../data-types/primitive-types/dateTime.model";
import { Reference } from "../../data-types/special-purpose-data-types/reference.model";
import { QuestionnaireResponseItem } from "./questionnaire-response-item.model";
import { Questionnaire } from "./questionnaire.model";

export class QuestionnaireResponse extends DomainResource {
    identifier?: Identifier;
    basedOn?: Reference[];//ReferralRequest[] | CarePlan[] | ProcedureRequest[];
    parent?: Reference[];//Observation[] | Procedure[];
    questionnaire?: Questionnaire;
    status: codeType;
    subject?: Reference;
    context?: Reference;//Encounter | EpisodeOfCare;
    authored?: dateTimeType;
    author?: Reference;//Device | Practitioner | Patient | RelatedPerson;
    source?: Reference; //Patient | Practitioner | RelatedPerson;
    item?: QuestionnaireResponseItem[];
}