import React, { useState } from 'react'
import Pagination from '../shared/Ui/Reactpaginate'
import Card from './Card'

const ContentCard = () => {
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(2);

    const onPageChange = (e) => {
        console.log(e)
    }

    return (
        <div className='w-full px-2 md:px-0 mt-6 md:mt-0'>
            <div className='grid md:gap-8 gap-2 md:grid-cols-4 grid-cols-1 md:p-6 space-y-4'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((a, i) => (
                <Card 
                key={i}
                data={a}
                />
            ))}

           
        </div>
        {totalPages > 0 && (
                <Pagination totalPages={totalPages} onPageChange={onPageChange} />
            )}
        </div>
        
    )
}

export default ContentCard