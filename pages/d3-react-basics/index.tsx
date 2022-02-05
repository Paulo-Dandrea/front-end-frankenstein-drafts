import {
  Colors,
  CountriesBarChart,
  IrisScatterPlot,
  LineChartTemperature
} from '~/ui/business-components/d3-react-basics'
import { WorldMap } from '~/ui/business-components/d3-react-basics/world-map'

const D3ReactBasics = () => {
  return (
    <>
      <WorldMap />
      <LineChartTemperature />
      <IrisScatterPlot />
      <CountriesBarChart />
      <Colors />
    </>
  )
}

export default D3ReactBasics
