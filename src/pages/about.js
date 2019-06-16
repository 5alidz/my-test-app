import { render } from 'nano_spa'
import layout from '../components/layout.js'

export default function About() {
  return render`
    <${layout}>
      <div>
        <h1>About</h1>
      </div>
    <//>
  `
}
