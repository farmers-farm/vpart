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

.custom-shape-divider-bottom-1607649554 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1607649554 svg {
  position: relative;
  display: block;
  width: calc(131% + 1.3px);
  height: 137px;
}

.custom-shape-divider-bottom-1607649554 .shape-fill {
  fill: #ffffff;
}

/** For tablet devices **/
@media (min-width: 768px) and (max-width: 1023px) {
  .custom-shape-divider-bottom-1607649554 svg {
    width: calc(148% + 1.3px);
    height: 98px;
  }
}
</style>
