import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../Components/Banner'
import Hero from '../Components/Hero'
import Services from '../Components/Services'

const Home = () => {
    return (
        <>
            <Hero hero="defaultHero">
                <Banner title = "کلاردشت، نگاهی نو" subtitle="شروع تورها از 700 هزار تومان">
                    <Link to="/rooms" className="btn-primary">مشاهده</Link>
                </Banner>
            </Hero>
            <Services />
        </>
    )
}
export default Home;
