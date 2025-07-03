import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = ({prevjob, nextjob}) => {
  return (
    <div className='flex gap-x-10'>
        {prevjob && 
         <Link to={`/job-detail/${prevjob.id}`}>
          <button className="bg-violet-800 px-4 py-2 rounded text-white">⬅ Previous</button>
        </Link>
        }
       {nextjob && <Link to={`/job-detail/${nextjob.id}`}>
             <button className="bg-violet-800 px-4 py-2 rounded text-white">Next ➡</button>
       </Link>}
    </div>
  )
}

export default Pagination