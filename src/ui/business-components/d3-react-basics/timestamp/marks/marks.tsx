import { ScaleLinear } from 'd3'

export const Marks = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  toolTipFormat = (d: any) => d,
  circleRadius = 10
}: {
  data: any[]
  xScale: ScaleLinear<number, number>
  yScale: ScaleLinear<number, number>
  xValue: (d: any) => number
  yValue: (d: any) => number
  toolTipFormat?: (d: any) => string
  circleRadius?: number
}) => (
  <>
    {data.map(d => (
      <circle className="mark" cx={xScale(xValue(d))} cy={yScale(yValue(d))} r={circleRadius}>
        <title>{toolTipFormat(xValue(d))}</title>
      </circle>
    ))}
  </>
)
