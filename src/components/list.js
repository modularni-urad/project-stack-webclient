// import Actions from './actions.js'
// import { stadium, zanr } from './filters.js'

export default {
  props: ['query', 'cfg'],
  // filters: { priority, state },
  methods: {
    rowClass: function (row) {
      return prioClasses[row.prio] || ''
    },
    dueClass: function (row) {
      return row.due ? getDueClass(row) : null
    }
  },
  // components: { Actions },
  template: `
  <ACListView :query="query" :cfg="cfg">
  </ACListView>
  `
//   <template v-slot:tbody="{ items, fields }">

//   <tr v-for="row,rowidx in items" :key="rowidx">
//     <td>{{ row.id }}</td>
//     <td>{{ row.nazev }}</td>
//     <td>{{ row.zanr | zanr }}</td>
//     <td>{{ row.stadium | stadium }}</td>
//     <td><Actions key="actions" :query="query" :row="row" :cfg="cfg" /></td>
//   </tr>

// </template>
}
