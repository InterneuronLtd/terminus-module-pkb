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
import { Type, success, failure, identity } from 'io-ts';

/**
 * A time during the day, with no date specified
 */
export class timeType extends Type<string> {
	private static regexExp = /^([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?$/;

	// readonly _tag: 'timeType' = 'timeType';

	constructor() {
		super(
			/** a unique name for this codec */

			'timeType',
			/** a custom type guard */

			(m): m is string =>
				typeof m === 'string' && timeType.regexExp.test(m.toString()),
			/** succeeds if a value of type I can be decoded to a value of type A */

			(m, c) => (this.is(m) ? success(m) : failure(m, c)),
			/** converts a value of type A to a value of type O */
			identity
		);
	}
}

export const time = new timeType();