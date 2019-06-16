import { render } from 'nano_spa'

import layout from '../components/layout.js'

export default function Home() {
  return render`
    <${layout}>
      <div>
        <h1>Home</h1>
      </div>
    <//>
  `
}
