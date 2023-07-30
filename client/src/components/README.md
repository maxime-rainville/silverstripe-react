## `<LeftAndMain />`

Simple component to render a LeftAndMain section in the CMS
### Handlers

* `{function} onDismiss` callback for when the toast is dismissed.

### Properties

* `{Object[]} actions` list of actions to attach to the toast. Action beyond the first two are ignored.
* `{boolean} dismissed` whether the toast has been dismissed. Setting this to `true` triggers a fade out.
* `{string} text` message to display in the toast. Does NOT accept HTML string.
* `{string} type` style to apply to the toast.
