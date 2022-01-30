import { arc, csv, pie } from 'd3'
import { useEffect, useState } from 'react'

const URL =
  'https://gist.githubusercontent.com/Paulo-Dandrea/6c3fa927a051228bf517a6832a6ddbe5/raw/fe36110916029998486a2e314db495fb1f3a6313/cssNamedColors.csv'

const width = 960
const height = 500
const centerX = width / 2
const centerY = height / 2

interface Color {
  Especificação: string
  'Palavra-chave': string
  'valores hex RGB': string
}

export const ColorsRadialBurst = () => {
  const [data, setData] = useState<Color[] | null>(null)

  const pieArc = arc().innerRadius(0).outerRadius(width)
  const colorPie = pie<Color>().value(1)

  useEffect(() => {
    csv(URL).then(data => {
      //   console.log(data)
      setData(data)
    })
  }, [])

  if (!data) return <pre>Loading...</pre>

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        {colorPie(data).map(d => (
          <path fill={d.data['valores hex RGB']} d={pieArc(d)} />
        ))}
      </g>
    </svg>
  )
}
