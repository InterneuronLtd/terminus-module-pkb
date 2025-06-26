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
import { BackboneElement } from "../../base/backbone-element.model";
import { Attachment } from "../../data-types/complex-types/attachment.model";
import { Coding } from "../../data-types/complex-types/coding.model";
import { Quantity } from "../../data-types/complex-types/quantity.model";
import { dateType } from "../../data-types/primitive-types/date.model";
import { dateTimeType } from "../../data-types/primitive-types/dateTime.model";
import { decimalType } from "../../data-types/primitive-types/decimal.model";
import { integerType } from "../../data-types/primitive-types/integer.model";
import { timeType } from "../../data-types/primitive-types/time.model";
import { uriType } from "../../data-types/primitive-types/uri.model";
import { Reference } from "../../data-types/special-purpose-data-types/reference.model";

export class QuestionnaireItemEnableWhen extends BackboneElement {
    question: string;
    hasAnswer?: boolean;
    answerBoolean?: boolean;
    answerDecimal?: decimalType;	
    answerInteger?: integerType;	
    answerDate?: dateType;	
    answerDateTime?: dateTimeType;	
    answerTime?: timeType;	
    answerString?: string;	
    answerUri?: uriType;	
    answerAttachment?: Attachment;	
    answerCoding?: Coding;	
    answerQuantity?: Quantity;	
    answerReference?: Reference;
}