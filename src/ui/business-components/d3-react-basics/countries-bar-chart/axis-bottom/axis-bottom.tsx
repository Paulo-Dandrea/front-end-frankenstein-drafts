import { ScaleLinear } from 'd3'

export const AxisBottom = ({
  xScale,
  innerHeight
}: {
  xScale: ScaleLinear<number, number>
  innerHeight: number
}) => {
  return (
    <>
      {xScale.ticks().map(tickValue => (
        <g
          className="tick"
          key={tickValue}
          transform={`translate(${xScale(tickValue)},0)`}
        >
          <line y2={innerHeight} />
          <text style={{ textAnchor: 'middle' }} dy=".71em" y={innerHeight + 3}>
            {tickValue}
          </text>
        </g>
      ))}
    </>
  )
}
