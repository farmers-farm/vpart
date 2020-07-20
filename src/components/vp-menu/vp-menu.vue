<!--
 * @Autor: wupup
 * @Description: 
 * @Date: 2020-07-19 19:28:58
 * @LastEditors: wupup
 * @LastEditTime: 2020-07-20 18:41:29
 * @FilePath: \vpart\src\components\vp-menu\vp-menu.vue
-->
<template>
  <div class="vp-menu" :style="wrapperStyle">
    <ul>
      <li class="route-item" v-for="route in routes" :key="route.path">
        <router-link class="route-link" :to="route.path">{{
          route.name
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { routes } from "@/router";

export default {
  name: "VpMenu",

  props: {
    position: {
      type: String,
      default: "left"
    }
  },

  data() {
    return {
      routes
    };
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

  created() {
    console.log("route", routes);
  },

  methods: {}
};
</script>

<style lang="scss" scoped>
.vp-menu {
  position: fixed;
  background-color: #000;
  color: #fff;

  .route-item {
    margin-bottom: 1px;
    background-color: royalblue;
  }

  .route-link {
    display: block;
    height: 100%;
    width: 100%;
    padding: 16px 20px;
  }
}
</style>
