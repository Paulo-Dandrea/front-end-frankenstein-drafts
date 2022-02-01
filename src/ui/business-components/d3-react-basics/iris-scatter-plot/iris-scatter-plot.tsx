import { extent, format, scaleLinear } from 'd3'
import { IRIS_URL } from '~/lib/constants'
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

interface Iris {
  petal_length: string | number
  petal_width: string | number
  sepal_length: string | number
  sepal_width: string | number
}

export const IrisScatterPlot = () => {
  const transformData = (d: Iris) => ({
    petal_length: +d.petal_length,
    petal_width: +d.petal_width,
    sepal_length: +d.sepal_length,
    sepal_width: +d.sepal_width
  })

  const data = useD3CSVData(IRIS_URL, transformData)

  if (!data) return <pre>Loading Iris...</pre>

  const siFormat = format('.2s')
  const xAxisTickFormat = (tickValue: any) => siFormat(tickValue).replace('G', 'B')

  const xValue = d => d.petal_length
  const xAxisLabel = 'Petal Length'

  const yValue = d => d.sepal_width
  const yAxisLabel = 'Sepal Width'

  const xScale = scaleLinear().domain(extent(data, xValue)).range([0, innerWidth]).nice()

  const yScale = scaleLinear().domain(extent(data, yValue)).range([0, innerHeight])

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
        />
      </g>
    </svg>
  )
}
