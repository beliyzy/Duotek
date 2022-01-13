<template>
  <div
    class="company"
    @mouseenter="toggle"
    @mouseleave="toggle"
  >
    <img
      v-if="img"
      :src=img
      :alt=title
    >
    <div class="company__info">
      <div
        :class="{'active-title': isHover}"
        class="company__info_title"
      >
        {{ title }}
      </div>
      <div class="company__info_description">
        {{ description }}
      </div>
      <div
        class="company__info_industries">
        <Tag
          v-for="industry in industries"
          :key="industry.id"
          :hover="isHover"
          :class="{'active-description': isHover}">
          {{ industry.title }}
        </Tag>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Company',
  data () {
    return {
      isHover: false
    }
  },
  methods: {
    toggle () {
      this.isHover = !this.isHover
    }
  },
  props: {
    img: {
      required: false
    },
    title: {
      required: true
    },
    description: {
      required: true
    },
    industries: {
      type: Array,
      required: false
    }
  }
}
</script>

<style lang="scss">
.company {
  padding: 32px;
  cursor: pointer;
  display: grid;
  grid-template-columns: 200px 1fr;
  transition: all 0.2s;
  &:hover {
    background: rgba(3, 9, 83, 0.03);
    border-radius: 8px;
  }
  img {
    max-width: 140px;
  }
  .company__info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 200px;

    &_title {
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 100%;
      color: #030953;
      transition: all 0.2s;
      &.active-title {
        color: #EF3E4A;
      }
    }

    &_description {
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 150%;
      color: #333;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      &.active-description {
        background: #FFFFFF;
      }
    }
  }
}
</style>
