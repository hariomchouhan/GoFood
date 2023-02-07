import React from 'react'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

export default function Home() {
    return (
        <>
            <div>
                <Navigation></Navigation>
            </div>
            <div>
                <Carousel></Carousel>
            </div>
            <div className='m-3'>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </>
    )
}
