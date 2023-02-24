import { App } from 'vue'
import { registerElement } from './register-element'
export function registerApp(app: App) {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}
