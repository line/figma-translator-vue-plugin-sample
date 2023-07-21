<!--
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
-->

<template>
  <button @click="translate" :disabled="disabled">Translate</button>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "lmt-button",
  methods: {
    translate() {
      parent.postMessage({pluginMessage: {type: 'translate', source: this.from, target: this.to}}, '*')
    }
  },
  computed: {
    disabled() {
      return this.from === '' || this.to === '' || this.from === this.to
    },
    ...mapState({
      from: state => state.from,
      to: state => state.to
    })
  }
}
</script>

<style scoped>
button {
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;

  width: 308px;
  height: 48px;

  background: #3760C0;
  border: 0;
  border-radius: 8px;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;

  user-select: none;
}

button:not([disabled]):hover {
  cursor: pointer;
}

button:active {
  background: #8A8A8A;
}

button[disabled] {
  background: #8A8A8A;
}

</style>
