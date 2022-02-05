import { WORLD_MAP_URL } from '~/lib/constants'
import { useJsonData } from '~/ui/hooks/d3-react'
import { Marks } from './marks'

const width = 960
const height = 500

export const WorldMap = () => {
  const data = useJsonData(WORLD_MAP_URL) || null
  console.log(data)

  if (!data) return <pre>Loading World Map...</pre>

  return (
    <svg width={width} height={height}>
      <Marks
        data={data}
      />
    </svg>
  )
}
