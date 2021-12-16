import ListComponent from './src/components/list.js'
import { ROUTE_NAMES as NAMES, VIEWNAME } from './src/consts.js'
import formconfig from './src/formconfig.js'

export function createMenu (user) {
  return user.groups.indexOf('project_inserters') >= 0
    ? { label: VIEWNAME, to: { name: NAMES.list } }
    : null
}

export async function setupRoutes (routes, path, cfg, initConfig) {
  Object.assign(cfg, { 
    conf: formconfig
  })
  await initConfig(cfg)
  routes.push({ 
    path, 
    name: NAMES.list, 
    component: ListComponent, 
    props: route => {
      return { query: route.query, cfg }
    }
  })
}

export const List = ListComponent
// export const Detail = DetailComponent
export const ROUTE_NAMES = NAMES