<template>
  <div>
    <van-button type="default" @click="goLogin">默认按钮</van-button>
  </div>
</template>

<script>
import { Button } from 'vant'

export default {
  name: 'home',
  components: {
    [Button.name]: Button,
  },
  data() {
    return {}
  },
  mounted() {},
  computed: {},
  methods: {
    goLogin() {
      this.$router.push({ path: '/login' })
    },
  },
}
</script>
<style lang="scss">

</style>
