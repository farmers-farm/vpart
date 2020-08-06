<!--
 * @Autor: wupup
 * @Description: 
 * @Date: 2020-06-24 12:07:00
 * @LastEditors: wupup
 * @LastEditTime: 2020-08-06 18:13:15
 * @FilePath: \vpart\src\views\Home.vue
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.jpg" />
    <vp-icon />
    <vp-loading />
  </div>
</template>

<script>
import VpIcon from "@/components/vp-icon/vp-icon.vue";
import VpLoading from "@/components/vp-loading/vp-loading.vue";

export default {
  name: "Home",
  components: {
    VpIcon,
    VpLoading
  }
};
</script>
