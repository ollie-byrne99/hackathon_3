import React from 'react'
import { FetchRandom } from '../../components'

const RandomPage = () => {

  const handleRefresh = () => {
    window.location.reload();
  }

  return (
    <>
      <div>
        <h2>You got:</h2>
        <FetchRandom/>
        <button onClick={handleRefresh}>Try Again?</button>
      </div>
    </>
  )
}

export default RandomPage;
