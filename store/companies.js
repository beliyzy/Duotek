export default {
  state: () => ({
    companies: []
  }),
  actions: {
    async getCompanies ({ commit }) {
      const res = await this.$axios.$get('http://api-test.duotek.ru/companies')
      const companies = res.data
      commit('setCompanies', companies)
    }
  },
  mutations: {
    setCompanies (s, companies) {
      s.companies = companies
    }
  }
}
