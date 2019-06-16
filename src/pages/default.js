import { render } from 'nano_spa'
import layout from '../components/layout.js'

export function NotFound() {
  return render`
    <${layout}>
      <div>
        <h1>404</h1>
      </div>
    <//>
  `
}

export function DefaultHead() {
  return render`
    <meta name=author content=5alidz/>
    <link rel="icon" href="/static/favicon.ico" />
  `
}
