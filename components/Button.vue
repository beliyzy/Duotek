<template>
  <button>
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    bgColor: {
      type: String,
      required: false
      // default: '#030953'
    }
  }
}
</script>

<style lang="scss">
  button {
    min-width: 80px;
    padding: 10px 18px;
    background: #030953;
    font-family: Rubik, sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 140%;
    color: #fff;
    border: none;
  }
</style>
