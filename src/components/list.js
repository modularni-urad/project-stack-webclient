/* global axios, API, _ */
import ItemForm from './form.js'
import template from './list.html.js'
import { STADIUM_LABELS, ZANR_LABELS } from './consts.js'

export default {
  data: () => {
    return {
      fields: [
        { key: 'id', label: 'ID', sortable: true },
        { key: 'nazev', label: 'Název', sortable: true },
        { key: 'popis', label: 'Popis' },
        { key: 'manager', label: 'Manažer' },
        { key: 'cena', label: 'Cena', sortable: true },
        { key: 'stadium', label: 'Stadium', sortable: true },
        { key: 'zanr', label: 'Žánr', sortable: true },
        { key: 'actions', label: '' }
      ],
      items: [],
      isBusy: false,
      currentPage: 1,
      totalRows: 0,
      perPage: 10,
      curr: null,
      currDetail: null,
      item: {}
    }
  },
  filters: {
    stadium: (value) => STADIUM_LABELS[value],
    zanr: (value) => ZANR_LABELS[value]
  },
  methods: {
    myProvider (ctx) {
      const params = {
        currentPage: this.currentPage,
        perPage: this.perPage,
        sort: ctx.sortBy ? `${ctx.sortBy}:${ctx.sortDesc ? 'desc' : 'asc'}` : 'id:asc'
      }
      let data = null
      return axios.get(`${API}/projectstack/projekty`, { params })
        .then(res => {
        this.totalRows = res.data.pagination.total
          ? res.data.pagination.total : this.totalRows
        data = res.data.data
        const uids = _.uniq(
          _.union(_.map(data, i => i.solver), _.map(data, i => i.owner))
        )
        return this.$store.dispatch('loadusers', uids)
      }).then(res => {
        return data
      }).catch(err => {
        const message = err.response.data
        this.$store.dispatch('toast', { message, type: 'error' })
        return []
      })
    },
    setPageSize: function (newSize) {
      this.perPage = newSize
    },
    add: function () {
      this.$data.curr = null
      this.$bvModal.show('modal-add')
    },
    edit: function (item) {
      this.$data.curr = item
      this.$bvModal.show('modal-add')
    },
    onItemSubmit: function (item) {
      this.curr
        ? Object.assign(this.curr, item)
        : this.$refs.table.refresh()
      this.$bvModal.hide('modal-add')
    }
  },
  components: {
    'item-form': ItemForm
  },
  template
}
