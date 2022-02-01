import { csv } from 'd3'
import { useEffect, useState } from 'react'

export const useD3CSVData = (url: string) => {
  const [data, setData] = useState<any[] | null>(null)

  useEffect(() => {
    const row = (d: any) => ({
      country: d.Country,
      population: +d['2020'] * 1000
    })

    csv(url, row).then(data => {
      setData(data.slice(0, 10))
    })
  }, [])

  return data
}
