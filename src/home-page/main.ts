import './style.css'
import compleme from './compleme.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="/" target="_blank">
      <img src="${compleme}" class="compleme logo" alt="Compleme logo" />
    </a>
    <h1>Compleme</h1>
    <h2>A complementary set of utils for web app &amp; ui development</h2>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
