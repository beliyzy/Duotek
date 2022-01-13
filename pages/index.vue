<template>
  <div>
    <Header />
    <div class="container">
      <Title class="title">
        Каталог компаний
      </Title>
      <div class="wrapper">
        <Search />
        <FilterField />
      </div>
      <CompaniesList :companies="companies"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async asyncData ({ store }) {
    if (!store.state.companies.companies.length) {
      await store.dispatch('companies/getCompanies')
    }
  },
  computed: {
    ...mapState('companies', ['companies'])
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;500;600;700&display=swap');

$main-font: 'Rubik', sans-serif;
$footer-font: 'IBM Plex Sans', sans-serif;

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: $main-font;
}

.container {
  width: 85%;
  margin: 0 auto;
}

.wrapper {
  position: relative;
}
.title {
  margin-top: 75px;
}
</style>
