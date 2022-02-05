import { json } from 'd3'
import { feature, mesh } from 'topojson-client'
import { useEffect, useState } from 'react'

export const useTopoJsonToGeoJson = (url: string) => {
  const [data, setData] = useState(null)
  console.log('TCL: useTopoJsonToGeoJson -> data,', data)

  useEffect(() => {
    json(url).then(topology => {
      const { countries, land } = topology.objects
      setData({
        land: feature(topology, land),
        interiors: mesh(topology, countries, (a, b) => a !== b)
      })
    })
  }, [])

  return data
}
