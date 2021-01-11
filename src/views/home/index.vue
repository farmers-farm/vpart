<!--
 * @Autor: wupup
 * @Description: 
 * @Date: 2020-06-24 12:07:00
 * @LastEditors: wupup
 * @LastEditTime: 2020-08-07 11:42:56
 * @FilePath: \vpart\src\views\Home.vue
-->
<template>
  <div class="home">
    <div class="img-wrapper">
      <img alt="Vue logo" src="../../assets/logo.jpg" />
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
    </div>
    <vp-icon />
  </div>
</template>

<script>
import VpIcon from "@/components/vp-icon/vp-icon.vue";

export default {
  name: "Home",
  components: {
    VpIcon
  }
};
</script>

<style lang="scss">
.img-wrapper {
  position: relative;
}
</style>
