<template>
  <h2>
    <slot />
  </h2>
</template>

<script>
export default {
  name: 'Title'
}
</script>

<style lang="scss">
  h2 {
    font-family: Raleway, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 130%;
    letter-spacing: 0.123077px;
    color: #000000;

  }
</style>
