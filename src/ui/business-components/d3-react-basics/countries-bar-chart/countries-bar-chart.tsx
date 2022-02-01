import { max, ScaleBand, scaleBand, ScaleLinear, scaleLinear } from 'd3'

import { useD3CSVData } from '~/ui/hooks/d3-react'

import { AxisBottom } from './axis-bottom'
import { AxisLeft } from './axis-left'
import { Marks } from './marks'

import { BIG_COUNTRIES_URL } from '~/lib/constants'

const width = 960
const height = 500
const margin = { top: 20, right: 20, bottom: 20, left: 200 }

const innerWidth = width - margin.left - margin.right
const innerHeight = height - margin.top - margin.bottom

export const CountriesBarChart = () => {
  const data = useD3CSVData(BIG_COUNTRIES_URL)

  if (!data) return <pre>Loading Countries...</pre>

  const xValue = (d: any) => d.population
  const yValue = (d: any) => d.country

  const yScale = scaleBand().domain(data.map(yValue)).range([0, innerHeight])

  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth])

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom innerHeight={innerHeight} xScale={xScale} />
        <AxisLeft yScale={yScale} />
        <Marks
          data={data}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
        />
      </g>
    </svg>
  )
}
