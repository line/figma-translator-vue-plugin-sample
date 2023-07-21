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
  <select v-model="selectedLanguage" :selected="selectedLanguage!==''">
    <option value="">{{ label }}</option>
    <option v-for="language in languages" v-bind:key="language.key" :value="language.key">
      {{ language.text }}
    </option>
  </select>
</template>

<script>

import {mapState} from "vuex";

export default {
  name: "lmt-selector",
  props: ["label"],
  data() {
    return {
      fromTo: this.$props.label.toLowerCase(),
    }
  },
  computed: {
    selectedLanguage: {
      get() {
        return this.$store.state[this.fromTo]
      },
      set(value) {
        this.$store.commit(`update${this.$props.label}`, value)
      }
    },
    ...mapState({languages: 'languages'})
  }
}
</script>

<style scoped>
select {
  box-sizing: border-box;

  color: #8A8A8A;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 14px 12px;
  gap: 8px;

  width: 308px;
  height: 48px;

  border: 2px solid #8A8A8A;
  border-radius: 8px;

  background-color: #2C2C2C;
}

select:not([multiple]) {
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.18498 5.14811C2.8986 4.86172 2.43428 4.86172 2.14789 5.14811C1.86151 5.43449 1.86151 5.89881 2.14789 6.1852L7.48123 11.5185C7.61875 11.6561 7.80528 11.7333 7.99977 11.7333C8.19426 11.7333 8.38079 11.6561 8.51832 11.5185L13.8516 6.1852C14.138 5.89881 14.138 5.43449 13.8516 5.14811C13.5653 4.86172 13.1009 4.86172 12.8146 5.14811L7.99977 9.9629L3.18498 5.14811Z' fill='white'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-position: 96% 50%;

  appearance: none;
  padding-right: 20px;
}

select:focus {
  border: 2px solid #FFFFFF;
  outline: none;
}

select[selected=true] {
  color: #FFFFFF;
}

</style>
