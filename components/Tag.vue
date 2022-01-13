<template>
  <span
    class="tag"
    :class="{active: hover}"
  >
    <slot />
  </span>
</template>
<script>
export default {
  name: 'Tag',
  props: ['hover']
}
</script>

<style lang="scss">
.tag {
  display: inline-block;
  text-align: center;
  background: #F7F7F7;
  border-radius: 50px;
  padding: 7px 15px;
  min-width: 0.08vw;
  font-family: Rubik, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  transition: all 0.2s;
}

.active {
  background: #FFFFFF;
}
</style>
