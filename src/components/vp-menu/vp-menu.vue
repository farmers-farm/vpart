<!--
 * @Autor: wupup
 * @Description: 
 * @Date: 2020-07-19 19:28:58
 * @LastEditors: wupup
 * @LastEditTime: 2020-07-19 19:59:38
 * @FilePath: \vpart\src\components\vp-menu\vp-menu.vue
-->
<template>
  <div class="vp-menu" :style="wrapperStyle">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "VpMenu",

  props: {
    position: {
      type: String,
      default: "left"
    }
  },

  computed: {
    wrapperStyle() {
      switch (this.position) {
        case "left":
          return {
            width: 180 + "px",
            left: 0,
            top: 0,
            bottom: 0
          };
        case "top":
          return {
            height: 60 + "px",
            left: 0,
            right: 0,
            top: 0
          };
        default:
          return {
            width: 180 + "px",
            left: 0,
            top: 0,
            bottom: 0
          };
      }
    }
  },

  data() {
    return {};
  },

  created() {
    console.log("route", router);
  },

  methods: {}
};
</script>

<style lang="scss" scoped>
.vp-menu {
  position: fixed;
  background-color: #000;
  color: #fff;
}
</style>
