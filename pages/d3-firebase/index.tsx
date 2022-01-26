import { useEffect, useState } from 'react'
import axios from 'axios'

const D3Firebase = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('./api/for-d3-project/entries').then(data => {
      console.log({ data: data.data.entriesData })
      setData(data.data.entriesData)
    })
  }, [])

  console.log('rendering')

  return <>{data && data.map(item => <h1>{item?.name}</h1>)}</>
}

export default D3Firebase

// TODO: make a service + react query
