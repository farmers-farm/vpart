<!--
 * @Autor: wupup
 * @Description: 
 * @Date: 2020-06-24 12:07:00
 * @LastEditors: wupup
 * @LastEditTime: 2020-07-19 19:49:40
 * @FilePath: \vpart\src\App.vue
-->
<template>
  <div id="app">
    <vp-menu />

    <div class="container-main">
      <router-view />
    </div>
  </div>
</template>

<script>
import VpMenu from "@/components/vp-menu/vp-menu.vue";

export default {
  components: { VpMenu }
};
</script>

<style lang="scss">
.container-main {
  margin-left: 190px;
}
</style>
