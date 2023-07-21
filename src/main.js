/**
 Copyright 2023 LINE Corporation

 LINE Corporation licenses this file to you under the Apache License,
 version 2.0 (the "License"); you may not use this file except in compliance
 with the License. You may obtain a copy of the License at:

 https://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 License for the specific language governing permissions and limitations
 under the License.
 **/

import {createApp} from 'vue'
import App from './App.vue'
import store from "./store/store";

const app = createApp(App)
app.use(store)
app.mount('#app')

function isEmptyValue(value) {
    if (!value) return true
    return value.constructor === Object && Object.keys(value).length === 0
}

onmessage = (event) => {
    if (!event.data.pluginMessage || isEmptyValue(event.data.pluginMessage.value)) return

    if (event.data.pluginMessage.type === 'fromLanguage') {
        store.commit('updateFrom', event.data.pluginMessage.value)
    }

    if (event.data.pluginMessage.type === 'toLanguage') {
        store.commit('updateTo', event.data.pluginMessage.value)
    }
}
