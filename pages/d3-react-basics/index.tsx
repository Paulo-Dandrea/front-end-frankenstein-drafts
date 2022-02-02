import {
  Colors,
  CountriesBarChart,
  IrisScatterPlot,
  LineChartTemperature,
} from '~/ui/business-components/d3-react-basics'

const D3ReactBasics = () => {
  return (
    <>
      <LineChartTemperature />
      <IrisScatterPlot />
      <CountriesBarChart />
      <Colors />
    </>
  )
}

export default D3ReactBasics
