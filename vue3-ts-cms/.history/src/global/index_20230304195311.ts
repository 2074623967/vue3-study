import { App } from 'vue'
import { registerElement } from './register-element'
import {registerProperties} from './re'

export function globalRegisterApp(app: App) {
  // registerElement(app)
  app.use(registerElement)
}
