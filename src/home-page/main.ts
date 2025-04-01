import './home.scss'
import compleme from './compleme.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="home-page">
    <a href="/" target="_blank">
      <img src="${compleme}" class="home-page_logo" alt="Compleme logo" />
    </a>
    <h1 class="home-page_title">Compleme</h1>
    <h2 class="home-page_subtitle">A complementary set of utils for web app &amp; ui development</h2>
    <div class="home-page_counter-container u-flex-center">
      <button id="counter" class="home-page_counter" type="button">Count is 0</button>
    </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
