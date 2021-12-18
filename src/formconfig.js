import { STADIUM_LABELS, ZANR_LABELS } from './consts.js'
export default (cfg) => ([{
  name: 'id',
  fieldcomponent: true, sortable: true
}, {
  name: 'nazev',
  component: "dyn-input",
  label: "název",
  rules: "required",
  fieldcomponent: true, sortable: true
}, {
  name: 'popis',
  component: "dyn-textarea",
  label: "popis",
  rules: "required"
}, {
  name: 'poznamka',
  component: "dyn-textarea",
  label: "poznámka"
}, {
  name: 'poloha',
  component: "positionInput",
  label: "poloha",
  rules: "required"
}, {
  name: "orgid",
  component: "dyn-select",
  options: cfg.investori_options || [{ value: 'm.urad', text: 'městský úřad' }],
  label: "nositel",
  rules: "required",
  fieldcomponent: true, sortable: true
}, {
  name: "cena",
  fieldcomponent: true, sortable: true
}, {
  name: "stadium",
  component: "dyn-select",
  options: _.map(STADIUM_LABELS, (v, k) => ({ value: k, text: v })),
  label: "stádium",
  rules: "required",
  fieldcomponent: true, sortable: true
}, {
  name: "zanr",
  component: "dyn-select",
  options: _.map(ZANR_LABELS, (v, k) => ({ value: k, text: v })),
  label: "žánr",
  rules: "required",
  fieldcomponent: true
}])