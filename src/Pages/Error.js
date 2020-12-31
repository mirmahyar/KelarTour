import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../Components/Banner'
import Hero from '../Components/Hero'

const Error = () => {
    return (
        <div>
            <Hero>
                <Banner title="404" subtitle="مسیر درخواستی شما یافت نشد">
                    <Link to="/" className='btn-primary'>
                        بازگشت به خانه
                    </Link>
                </Banner>
            </Hero>
        </div>
    )
}

export default Error;
