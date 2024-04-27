import React from 'react'

const ResultPage = ({isLoading}) => {
  return (
    <div>{isLoading && <p>Loading...</p>}
        {!isLoading && <p>plant name</p>}
    

    </div>
  )
}

export default ResultPage