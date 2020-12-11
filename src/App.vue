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
      <div class="custom-shape-divider-bottom-1607649554">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
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
