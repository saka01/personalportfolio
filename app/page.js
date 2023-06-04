import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <section>
    
      <div class="container d-flex h-100 align-items-center">
        <div class="mx-auto text-center">
            <h3 class="mx-auto my-0 text-uppercase greetfont" id="greeting-container"></h3>
            <h1 class="mx-auto my-0 text-uppercase">Moshood Saka</h1>
            <h2 class="text-white-50 mx-auto mt-2 mb-5"> Check my <a href="#" target="_blank">Resume.</a> :))</h2>
        </div>            
    </div>

      <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
          >
            With ❤️ By 1000K
          </a>
        </div>
    </section>
  )
}
