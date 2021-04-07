import React from 'react'
import '../../App.css'
import MainSection from '../MainSection.js'
import Cards from '../Cards.js'
import Footer from '../Footer.js'

function Home () {
    return (
        <React.Fragment>
            <MainSection />
            <Cards />
            <Footer />
        </React.Fragment>
    )
}

export default Home;