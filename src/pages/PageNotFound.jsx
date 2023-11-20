import React from 'react'
import Error from '../assets/404.svg'
import Layout from '../components/Layout/Layout'

const PageNotFound = () => {
    return (
        <Layout>
            <div title="Page Not Found" className="flex h-[80vh] w-full">
                <img className="object-contain block mx-auto" src={Error} alt="Page Not Found" />
            </div>
        </Layout>
    )
}

export default PageNotFound