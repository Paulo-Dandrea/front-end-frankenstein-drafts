import { useEffect, useState } from 'react'
import axios from 'axios'

const D3Firebase = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const whatDoWeHaveHere = axios.get('./api/for-d3-project/entries').then(data => {
      console.log({ data: data.data.entriesData })
      setData(data.data.entriesData)
    })
    // console.log({ whatDoWeHaveHere })
  }, [])

  return <>{data && data.map(item => <h1>{item?.name}</h1>)}</>
}

export default D3Firebase

// TODO: make a service + react query
