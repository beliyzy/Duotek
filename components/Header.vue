<template>
  <div class="border-header">
    <header class="container">
      <img src="@/assets/DarkLogo.svg" alt="Logo">
      <nav>
        <ul>
          <li>
            <a href="#">Тендеры</a>
          </li>
          <li>
            <a href="#" class="active-page">Компании</a>
          </li>
          <li>
            <a href="#">Продукты</a>
          </li>
          <li>
            <a href="#">Кейсы</a>
          </li>
          <li>
            <a href="#">Блог</a>
          </li>
        </ul>
      </nav>
      <div>Вход и регистрация</div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    bgDark: {
      type: Boolean,
      default: false,
      required: false
    }
  }
}
</script>

<style lang="scss">
header {
  padding: 22px 36px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #030953;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 100%;

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 40vw;

    a {
      text-decoration: none;
      color: #030953;
      transition: all 0.3s;
      &:hover {
        color: #1414e8;
      }
      &:active {
        color: #3f3fee;
      }
      &.active-page {
        opacity: 0.3;
      }
    }
  }
}
.border-header {
  border: 1px solid #F2F2F2;
}
</style>
