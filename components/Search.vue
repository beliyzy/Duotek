<template>
  <div class="search">
    <div class="input">
      <input type="text" class="input-field" placeholder="Поиск продукта или отрасли">
      <img src="@/assets/SearchIcon.svg" alt="" class="input-icon">
    </div>
    <Button class="search-button">Найти</Button>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="scss">
.search {
  display: flex;
  flex-direction: row;
}

.input {
  display: inline-flex;
  border: 1px solid #E5E5E5;
  border-radius: 4px 0 0 4px;
  padding: 10px;
  color: #808080;
}

.input-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  order: -1;
}

.input-field {
  width: 50vw;
  border: 0;
  font-family: Raleway, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
}

.input-field:focus {
  outline: none;
}

.search-button {
  background: #030953;
  border-radius: 0 4px 4px 0;
}
</style>
