'use client'
import React from 'react'
import Header from '../components/header'
import Topcard from '../components/topcard'
import Card from '../components/card'
import Card1 from '../components/card1'
import Card2 from '../components/card2'
import Card3 from '../components/card3'
import Footer from '../components/footer'
function page() {
  return (
    <>
    <div className='main main overflow-auto'>
        <div className='container'>
            <Header></Header>
            <Topcard></Topcard>
            <Card></Card>
            <div className='pb-24'>
            <Card1></Card1>
            <Card2></Card2>
            <Card3></Card3>
            </div>
            <Footer></Footer>
        </div>
    </div>
    </>
  )
}

export default page