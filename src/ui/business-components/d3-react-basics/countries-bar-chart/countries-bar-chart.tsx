import { format, max, ScaleBand, scaleBand, ScaleLinear, scaleLinear } from 'd3'

import { useD3CSVData } from '~/ui/hooks/d3-react'

import { AxisBottom } from './axis-bottom'
import { AxisLeft } from './axis-left'
import { Marks } from './marks'

import { BIG_COUNTRIES_URL } from '~/lib/constants'

const width = 960
const height = 500
const margin = { top: 20, right: 30, bottom: 65, left: 220 }

const xAxisLabelOffset = 50

const innerWidth = width - margin.left - margin.right
const innerHeight = height - margin.top - margin.bottom

export const CountriesBarChart = () => {
  
  const transformRow = (d: any) => ({
    country: d.Country,
    population: +d['2020'] * 1000
  })

  const data = useD3CSVData(BIG_COUNTRIES_URL, transformRow)?.slice(0, 10)

  if (!data) return <pre>Loading Countries...</pre>

  const xValue = (d: any) => d.population
  const yValue = (d: any) => d.country

  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .padding(0.15)

  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth])

  const siFormat = format('.2s')

  const xAxisTickFormat = (tickValue: any) => siFormat(tickValue).replace('G', 'B')

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom
          innerHeight={innerHeight}
          xScale={xScale}
          tickFormat={xAxisTickFormat}
        />
        <AxisLeft yScale={yScale} />
        <text
          className="axis-label"
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor="middle"
        >
          Population
        </text>
        <Marks
          data={data}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
          toolTipFormat={xAxisTickFormat}
        />
      </g>
    </svg>
  )
}
