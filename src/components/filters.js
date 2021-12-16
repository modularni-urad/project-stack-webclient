import { PRIORITY_LABELS, STATE_LABELS } from '../consts.js'

export function stadium (value) {
  return PRIORITY_LABELS[value]
}

export function zanr (value) {
  return STATE_LABELS[value]
}
