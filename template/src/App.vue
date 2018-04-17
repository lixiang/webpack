<template>
  <div id="app">
    <transition :name="animate">
      <keep-alive>
        <router-view id="view"/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      animate: '',
    }
  },
  components: {},
  watch: {
    $route(to) {
      /*
      0: 不做动画
      1: 左切换
      2: 右切换
      3: 上切换
      4: 下切换
       */
      const animate = this.$router.animate || to.meta.slide
      console.log(animate)
      if (!animate) {
        this.animate = ''
      } else {
        /* eslint-disable */
        this.animate =
          animate === 1
            ? 'slide-left'
            : animate === 2
              ? 'slide-right'
              : animate === 3
                ? 'slide-top'
                : animate === 4 ? 'slide-bottom' : ''
      }
      this.$router.animate = 0
    },
  },
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
#view {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(100%, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-100%, 0);
}
.slide-top-enter,
.slide-bottom-leave-active {
  opacity: 0;
  transform: translate(0, 100%);
}
.slide-top-leave-active,
.slide-bottom-enter {
  opacity: 0;
  transform: translate(0, -100%);
}
</style>
