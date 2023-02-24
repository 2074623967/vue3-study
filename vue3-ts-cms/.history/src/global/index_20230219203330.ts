export  function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
