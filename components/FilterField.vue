<template>
  <div class="filter-field">
    <label>Отрасль</label>
    <select>
      <option selected>Все отрасли</option>
    </select>
    <label>Специализация</label>
    <select>
      <option selected>Все специализации</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'FilterField'
}
</script>

<style lang="scss">
.filter-field {
  width: 20vw;
  height: 200px;
  padding: 18px 20px;
  background: #F7F7F7;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  right: 0.3%;
  top: 0;
  select {
    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 10px 16px;
  }
}
</style>
