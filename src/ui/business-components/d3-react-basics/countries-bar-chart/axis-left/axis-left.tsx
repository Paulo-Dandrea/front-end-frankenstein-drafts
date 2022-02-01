
export const AxisLeft = ({ yScale }: { yScale: ScaleBand<string> }) => (
    <g className="tick">
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
    </g>
  )
  