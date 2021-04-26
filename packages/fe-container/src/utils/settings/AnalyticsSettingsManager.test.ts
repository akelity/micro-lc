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
import {AnalyticsSettings, retrieveAnalyticsSettings, saveSettings} from './AnalyticsSettingsManager'

import {ANALYTICS_STORAGE_KEY} from '@constants'

describe('Analytics Settings Manager tests', () => {
  const settings:AnalyticsSettings = {
    hasUserAccepted: true,
    hasUserResponded: true
  }
  afterEach(() => window.localStorage.clear())
  it('Settings saved in local storage', () => {
    saveSettings(settings)
    const storageContent = retrieveAnalyticsSettings()
    expect(window.localStorage.getItem(ANALYTICS_STORAGE_KEY)).toBe('true')
    expect(storageContent.hasUserAccepted).toBe(true)
  })
})
