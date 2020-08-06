<!--
 * @Autor: wupup
 * @Description: 
 * @Date: 2020-08-06 17:51:47
 * @LastEditors: wupup
 * @LastEditTime: 2020-08-06 20:29:05
 * @FilePath: \vpart\src\components\vp-loading\vp-loading.vue
-->
<template>
  <div class="loading" ref="loading">
    <div class="loading-pic">
      <div class="sun">
        <div class="eyes"></div>
        <div class="light-wrapper">
          <div
            class="light"
            v-for="i in 8"
            :key="i"
            :style="`--r:${(i - 1) * 45}deg`"
          ></div>
        </div>
      </div>
    </div>
    <div class="loading-text" :style="{ color: textColor }">Loading...</div>
  </div>
</template>

<script>
export default {
  components: {
    name: "Loading"
  },

  props: {
    color: {
      type: String,
      defaullt: "#7d5400"
    },
    textColor: {
      type: String,
      default: "#333"
    }
  },

  data() {
    return {};
  },

  mounted() {
    const loadingEle = this.$refs.loading;
    loadingEle.style.setProperty("--color", "#7d5400");
  },

  methods: {}
};
</script>

<style lang="scss" scoped>
$sunColor: #7d5400;

.loading {
  padding: 30px;
  background-color: #f4c042;
}

.loading-pic {
  width: 200px;
  height: 200px;
  margin: 10px auto;
  border-bottom: 3px solid var(--color);
  overflow: hidden;
  position: relative;

  .sun {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    position: absolute;
    bottom: -10%;
    left: 0;
    right: 0;
    border: 3px solid var(--color);
    border-radius: 100%;
    animation: sun 3s linear infinite;

    .eyes {
      height: 6px;
      position: absolute;
      top: 40%;
      left: 30%;
      transform: translateX(-50%);
      animation: eyes 3s linear infinite;

      &::before,
      &::after {
        content: "";
        display: inline-block;
        width: 8px;
        height: 100%;
        background-color: var(--color);
        border-radius: 100%;
      }

      &::before {
        margin-right: 8px;
      }
    }

    .light-wrapper {
      width: 2px;
      height: 1px;
      margin: auto;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: transparent;
      animation: light 3s linear infinite;

      .light {
        width: 75px;
        height: 3px;
        margin: auto;
        position: absolute;
        right: 0;
        top: 0;
        right: 1px;
        transform-origin: right center;
        transform: rotate(var(--r));

        &::before {
          content: "";
          display: block;
          height: 100%;
          width: 13px;
          border-radius: 5px;
          background-color: var(--color);
        }
      }
    }
  }
}

.loading-text {
  text-align: center;
  font-size: 16px;
  animation: text 3s linear infinite;
}

@keyframes sun {
  0% {
    bottom: -10%;
  }
  35% {
    bottom: -10%;
  }
  65% {
    bottom: -40%;
  }
  95% {
    bottom: -10%;
  }
  100% {
    bottom: -10%;
  }
}

@keyframes eyes {
  0% {
    left: 30%;
  }
  5% {
    left: 30%;
    transform: translateX(-50%) scale(1, 1);
  }
  10% {
    left: 30%;
    transform: translateX(-50%) scale(1, 0.1);
  }
  15% {
    left: 30%;
    transform: translateX(-50%) scale(1, 1);
  }
  20% {
    left: 30%;
  }
  30% {
    left: 70%;
  }
  60% {
    left: 70%;
  }
  61% {
    left: 30%;
  }
  100% {
    left: 30%;
  }
}

@keyframes light {
  0% {
    transform: rotate(0);
  }
  5% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(45deg);
  }
}

@keyframes text {
  0% {
    opacity: 1;
  }
  10% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
</style>
