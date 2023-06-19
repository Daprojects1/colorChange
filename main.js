import './style.css'
import { handleClick } from './event'


document.querySelector('#app').innerHTML = `
  <div class=body>
  <h1>Color Flipper</h1>
  <div class=bgchange>
    <div>Background Color: <span class=color> #FFFFFF</span></div>
    <button class=btn>Press me</button>
  </div>
  </div>
`
handleClick(document.querySelector('.btn'))
