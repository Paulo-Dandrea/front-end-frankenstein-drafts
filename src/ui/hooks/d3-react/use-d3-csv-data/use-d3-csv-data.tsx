import { csv } from 'd3'
import { useEffect, useState } from 'react'

export const useD3CSVData = (url: string, transformRow?: any) => {
  const [data, setData] = useState<any[] | null>(null)

  useEffect(() => {
    csv(url, transformRow).then(data => {
      setData(data)
    })
  }, [])

  return data
}
