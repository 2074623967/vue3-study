import { App } from 'vue'
import from 
export function registerApp(app: App) {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}
