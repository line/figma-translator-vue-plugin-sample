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
  <div @click="swap()"></div>
</template>

<script>

import {mapMutations} from 'vuex'

export default {
  name: "lmt-switcher",
  methods: {
    ...mapMutations(['swap'])
  }
}
</script>

<style scoped>
div {
  width: 24px;
  height: 24px;
  margin-top: 8px;
  margin-bottom: 8px;
  background-image: url("data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 7.5L7.5 3M7.5 3L12 7.5M7.5 3V16.5' stroke='%237E7E7E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M21 16.5L16.5 21M16.5 21L12 16.5M16.5 21L16.5 7.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
}

div:hover {
  cursor: pointer;
}
</style>
