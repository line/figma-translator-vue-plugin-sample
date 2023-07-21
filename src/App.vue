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
  <div class="container">
    <Banner></Banner>
    <Selector label="From"></Selector>
    <Switcher></Switcher>
    <Selector label="To"></Selector>
    <Button></Button>
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
import Selector from "./components/Selector.vue";
import Switcher from "./components/Switcher.vue";
import Button from "./components/Button.vue";

export default {
  name: 'App',
  components: {
    Banner,
    Selector,
    Switcher,
    Button,
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
}
</style>
