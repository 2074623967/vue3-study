import { App } from 'vue'
import { registerElement } from './register-element'
import {registerProperties} from './register-properties'

export function globalRegisterApp(app: App) {
  // registerElement(app)
  app.use(registerElement)
}
