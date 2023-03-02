import Head from 'next/head'
import React from 'react'
import Wrapper from '../../core/components/shared/Wrapper'
import ContentCard from '../../core/components/Store/ContentCard'
import Filter from '../../core/components/Store/Filter'
import MainLayout from '../../core/layouts/MainLayout'

const Celebration = () => {
    return (
        <MainLayout
            head={
                <Head>
                    <title>Invitación Cars - Printable Party</title>
                </Head>
            }
        >
            <Wrapper maxScreen="max-w-screen-2xl md:p-10 py-8 md:py-0">
                <div className='flex md:flex-row flex-col min-h-screen w-full'>

                    <div className='md:w-1/6 w-full bg-transparent'>
                        <Filter />
                    </div>
                    <div className='md:w-5/6 w-full h-full pb-8'>
                        <ContentCard />
                    </div>
                </div>

            </Wrapper>
        </MainLayout>
    )
}

export default Celebration