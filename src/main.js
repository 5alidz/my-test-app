import { render, router } from 'nano_spa'

import Home from './pages/home.js'
import About from './pages/about.js'
import {NotFound, DefaultHead} from './pages/default.js'

router({
  root: document.getElementById('root'),
  routes: {
    '/': () => render`<${Home} />`,
    '/about': () => render`<${About} />`,
    '*': () => render`<${NotFound} />`
  },
  head: {
    '/': () => render`<title>my-spa | Home</title>`,
    '/about': () => render`<title>my-spa | About</title>`,
    '*': DefaultHead
  }
})
