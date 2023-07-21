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

import {createStore} from 'vuex'

const store = createStore({
    state() {
        return {
            from: "",
            to: "",
            languages: JSON.parse(import.meta.env.VITE_LANGUAGES)
        }
    },
    mutations: {
        updateFrom(state, value) {
            state.from = value
            parent.postMessage({pluginMessage: {type: 'updateFromLanguage', value}}, '*')
        },
        updateTo(state, value) {
            state.to = value
            parent.postMessage({pluginMessage: {type: 'updateToLanguage', value}}, '*')
        },
        swap(state) {
            const temp = state.to
            this.commit('updateTo', state.from)
            this.commit('updateFrom', temp)
        }
    }
})

export default store
