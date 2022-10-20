import React from 'react'
import {FlexContent, Hero,Sales, Stroies,Navbar} from './components'
import Footer from './components/Footer'
import { heroapi,popularsales,sneaker,toprateslaes, highlight, story, footerAPI} from './data/data.js'
const App = () => {
  return (

<>

<main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stroies story={story}/>
</main>
<Footer footerAPI = {footerAPI}/>
</>
  )
}

export default App