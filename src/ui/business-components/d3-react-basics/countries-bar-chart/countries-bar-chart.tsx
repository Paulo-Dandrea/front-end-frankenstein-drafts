import { csv, max, scaleBand, scaleLinear } from 'd3'
import { useEffect, useState } from 'react'

const csvUrl =
  'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv'

const width = 960
const height = 500
const margin = { top: 20, right: 20, bottom: 20, left: 200 }

const innerWidth = width - margin.left - margin.right
const innerHeight = height - margin.top - margin.bottom

export const CountriesBarChart = () => {
  const [data, setData] = useState<any[] | null>(null)

  useEffect(() => {
    const row = (d: any) => ({
      country: d.Country,
      population: +d['2020']
    })

    csv(csvUrl, row).then(data => {
      setData(data.slice(0, 10))
      console.log()
    })
  }, [])

  if (!data) return <pre>Loading Countries...</pre>

  const yScale = scaleBand()
    .domain(data.map(d => d.country))
    .range([0, innerHeight])

  const xScale = scaleLinear()
    .domain([0, max(data, d => d.population)])
    .range([0, innerWidth])

  // console.log(
  //     xScale.ticks()
  // )

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {xScale.ticks().map(tickValue => (
          <g key={tickValue} transform={`translate(${xScale(tickValue)},0)`}>
            <line y2={innerHeight} stroke="black" />
            <text style={{ textAnchor: 'middle' }} dy=".71em" y={innerHeight + 3}>
              {tickValue}
            </text>
          </g>
        ))}

        {yScale.domain().map(tickValue => (
          <text
            key={tickValue}
            textAnchor="end"
            dy=".32em"
            x={-9}
            y={yScale(tickValue) + yScale.bandwidth() / 2}
          >
            {tickValue}
          </text>
        ))}

        {data.map((d, i) => (
          <rect
            x={0}
            y={yScale(d.country)}
            width={xScale(d.population)}
            height={yScale.bandwidth()}
            fill={'black'}
            key={d.country}
          />
        ))}
      </g>
    </svg>
  )
}
