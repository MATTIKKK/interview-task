import "./app.css"
import Page1 from './pages/page1/Page1'
import Page2 from './pages/page2/Page2'
import Page3 from './pages/page3/Page3'
import Page4 from './pages/page4/Page4'
import Page5 from './pages/page5/Page5'
import Page6 from './pages/page6/Page6'
import Page7 from './pages/page7/Page7'

const App = () => {
  return (
    <div className='container'>
        <section>
            <Page1 />
        </section>
        <section>
            <Page2 />
        </section>
        <section>
            <Page3 />
        </section>
        <section>
            <Page4 />
        </section>
        <section>
            <Page5 />
        </section>
        <section>
            <Page6 />
        </section>
        <section>
            <Page7 />
        </section>
    </div>
  )
}

export default App