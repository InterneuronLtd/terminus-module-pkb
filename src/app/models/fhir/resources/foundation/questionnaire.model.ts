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
import { CodeableConcept } from "../../data-types/complex-types/codeable-concept.model";
import { Coding } from "../../data-types/complex-types/coding.model";
import { Identifier } from "../../data-types/complex-types/identifier.model";
import { Period } from "../../data-types/complex-types/period.model";
import { ContactDetail } from "../../data-types/metadata-types/contact-detail.model";
import { UsageContext } from "../../data-types/metadata-types/usage-context.model";
import { code } from "../../data-types/primitive-types";
import { codeType } from "../../data-types/primitive-types/code.model";
import { dateType } from "../../data-types/primitive-types/date.model";
import { dateTimeType } from "../../data-types/primitive-types/dateTime.model";
import { markdownType } from "../../data-types/primitive-types/markdown.model";
import { uriType } from "../../data-types/primitive-types/uri.model";
import { QuestionnaireItem } from "./questionnaire-item.model";

export class Questionnaire extends DomainResource
{
    url: uriType;
    identifier: Identifier[];
    version: string;
    name: string;
    title: string;
    status: codeType;
    experimental: boolean;
    date: dateTimeType;
    publisher: string;
    description: markdownType;
    purpose: markdownType;
    approvalDate: dateType;
    lastReviewDate: dateType;
    effectivePeriod: Period;
    useContext: UsageContext[];
    jurisdiction: CodeableConcept[];
    contact: ContactDetail[];
    copyright: markdownType;
    code: Coding[];
    subjectType: codeType[];
    item: QuestionnaireItem[];
}