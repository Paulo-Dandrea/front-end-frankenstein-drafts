import { extent, format, scaleLinear, scaleTime, timeFormat } from 'd3'
import { WEEK_TEMPERATURE_URL } from '~/lib/constants'
import { useD3CSVData } from '~/ui/hooks/d3-react'
import { AxisBottom } from './axis-bottom'
import { AxisLeft } from './axis-left'
import { Marks } from './marks'

const width = 960
const height = 500
const margin = { top: 20, right: 30, bottom: 65, left: 90 }

const innerWidth = width - margin.left - margin.right
const innerHeight = height - margin.top - margin.bottom

const xAxisLabelOffset = 50
const yAxisLabelOffset = 45

interface TemperatureByWeek {
  temperature: string | number
  timestamp: string | number | Date
}

export const Timestamp = () => {
  const transformData = (d: TemperatureByWeek) => ({
    ...d,
    temperature: +d.temperature,
    timestamp: new Date(d.timestamp)
    // timestamp: new Date(d.timestamp)
  })

  const data = useD3CSVData(WEEK_TEMPERATURE_URL, transformData) || null

  if (!data) return <pre>Loading Iris...</pre>

  const xAxisTickFormat = timeFormat('%a');

  const xValue = d => d.timestamp
  const xAxisLabel = 'Time'

  const yValue = d => d.temperature
  const yAxisLabel = 'Temperature'

  const xScale = scaleTime().domain(extent(data, xValue)).range([0, innerWidth]).nice()

  const yScale = scaleLinear().domain(extent(data, yValue)).range([innerHeight, 0 ])

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
          tickOffset={7}
        />
        <text
          className="axis-label"
          textAnchor="middle"
          transform={`translate(${-yAxisLabelOffset},${innerHeight / 2}) rotate(-90)`}
        >
          {yAxisLabel}
        </text>
        <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={12} />{' '}
        <text
          className="axis-label"
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor="middle"
        >
          {xAxisLabel}
        </text>
        <Marks
          data={data}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
          circleRadius={8}
          toolTipFormat={xAxisTickFormat}
        />
      </g>
    </svg>
  )
}
