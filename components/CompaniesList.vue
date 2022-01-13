<template>
  <div class="companies-list">
    <Company
      v-for="company in companies"
      :key=company.id
      :title=company.title
      :description=company.description_full
      :img=company.picture
      :industries=company.industries
    />
  </div>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  name: 'CompaniesList',
  // async asyncData ({ store }) {
  //   if (!store.state.companies.companies.length) {
  //     await store.dispatch('companies/getCompanies')
  //   }
  // },
  // computed: {
  //   ...mapState('companies', ['companies'])
  // }
  props: ['companies']
}
</script>

<style lang="scss">
.companies-list {
  margin-top: 75px;
  width: 57vw;
}
</style>
