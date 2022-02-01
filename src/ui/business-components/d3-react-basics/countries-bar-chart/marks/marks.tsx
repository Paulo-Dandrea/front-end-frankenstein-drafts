import { ScaleBand, ScaleLinear } from 'd3'

export const Marks = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue
}: {
  data: any[]
  xScale: ScaleLinear<number, number>
  yScale: ScaleBand<string>
  xValue: (d: any) => number
  yValue: (d: any) => string
}) => (
  <>
    {data.map(d => (
      <rect
        key={yValue(d)}
        className="mark"
        x={0}
        y={yScale(yValue(d))}
        width={xScale(xValue(d))}
        height={yScale.bandwidth()}

        fill="#6BBBA1"
      />
    ))}
  </>
)
