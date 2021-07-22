/*
 * Copyright 2021 Mia srl
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {from, of} from 'rxjs'
import {catchError, switchMap} from 'rxjs/operators'
import {User} from '@mia-platform/core'

import axiosInstance, {extractDataFromGet} from '@services/microlc/axios'

export const retrieveUser = (authenticationUrl: string | undefined) => {
  return authenticationUrl ? extractDataFromGet<User>(authenticationUrl) : of({})
}

export let logOutUser = () => of(false)

export const logOutUserBuilder = (logoutUserUrl: string = '') => {
  logOutUser = () => from(axiosInstance.get(logoutUserUrl)).pipe(
    switchMap(() => of(true)),
    catchError(() => of(false))
  )
}
