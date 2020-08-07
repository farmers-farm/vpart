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
    <img alt="Vue logo" src="../assets/logo.jpg" />
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
