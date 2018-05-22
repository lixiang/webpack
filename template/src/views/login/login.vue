<template>
  <div>
    <van-button type="danger" @click="goBack">危险按钮</van-button>
  </div>
</template>

<script>
import { Button } from 'vant'

export default {
  name: 'login',
  components: {
    [Button.name]: Button,
  },
  data() {
    return {}
  },
  mounted() {},
  computed: {},
  methods: {
    goBack() {
    },
  },
}
</script>
<style lang="scss">

</style>
