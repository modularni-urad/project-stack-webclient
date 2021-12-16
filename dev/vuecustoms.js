import positionInput from './node_modules/modularni-urad-admin-components/input/gps_shapes.js'
Vue.component('positionInput', positionInput)

Vue.filter('date', function (value) {
  if (value) {
    value = _.isString(value) ? moment(value) : value
    return value.format('DD.MM.YYYY')
  }
})

Vue.filter('datetime', function (value) {
  if (value) {
    value = _.isString(value) ? moment(value) : value
    return value.format('DD.MM.YYYY HH:mm')
  }
})

Vue.component('NameSpan', {
  props: ['uid', 'cfg'],
  template: `
    <span>User: {{ uid }}</span>
  `
})


