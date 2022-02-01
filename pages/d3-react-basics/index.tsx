import {
  Colors,
  CountriesBarChart,
  IrisScatterPlot,
  Timestamp
} from '~/ui/business-components/d3-react-basics'

const D3ReactBasics = () => {
  return (
    <>
      <Timestamp />
      <IrisScatterPlot />
      <CountriesBarChart />
      <Colors />
    </>
  )
}

export default D3ReactBasics
