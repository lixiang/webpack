<template>
  <div>
    <van-button type="default">默认按钮</van-button>
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
  methods: {},
}
</script>
<style lang="scss">

</style>
