import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import * as d3 from 'd3'

interface VegDish {
  name: string
  orders: number
}

// create margins & dimensions
const margin = { top: 20, right: 20, bottom: 100, left: 100 }
const graphWidth = 600 - margin.left - margin.right
const graphHeight = 600 - margin.top - margin.bottom

export const VegMenu = () => {
  const [data, setData] = useState<VegDish[]>([])

  const d3svg = useRef(null)

  console.log(data)

  useEffect(() => {
    axios.get('./api/for-d3-project/entries').then(wtf => {
      console.log({ wtf })
      setData(wtf.data)
    })
  }, [])

  useEffect(() => {
    if (data && d3svg.current) {
      const svg = d3
        .select('.veg-canvas')
        .append('svg')
        .attr('width', 600)
        .attr('height', 600)

      const graph = svg
        .append('g')
        .attr('width', graphWidth)
        .attr('height', graphHeight)
        .attr('transform', `translate(${margin.left}, ${margin.top})`)

      const xAxisGroup = graph
        .append('g')
        .attr('transform', `translate(0, ${graphHeight})`)

      const yAxisGroup = graph.append('g')

      // d3.json('menu.json').then(data => {
      const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, d => d.orders)])
        .range([graphHeight, 0])

      const x = d3
        .scaleBand()
        .domain(data.map(item => item.name))
        .range([0, 500])
        .paddingInner(0.2)
        .paddingOuter(0.2)

      // join the data to circs
      const rects = graph.selectAll('rect').data(data)

      // append the enter selection to the DOM
      rects
        .enter()
        .append('rect')
        .attr('width', x.bandwidth)
        .attr('height', d => graphHeight - y(d.orders))
        .attr('y', d => y(d.orders))
        .attr('fill', 'orange')
        .attr('x', d => x(d.name))

      // create and call the axes
      const xAxis = d3.axisBottom(x)
      const yAxis = d3
        .axisLeft(y)
        .ticks(20)
        .tickFormat(d => d + ' orders')

      xAxisGroup.call(xAxis)
      yAxisGroup.call(yAxis)

      xAxisGroup
        .selectAll('text')
        .attr('transform', 'rotate(-40)')
        .attr('text-anchor', 'end')
      // })
    }
  }, [data])

  return (
    <svg
      className="veg-canvas"
      width={graphWidth + margin.left + margin.right}
      height={graphHeight + margin.top + margin.bottom}
      role="img"
      ref={d3svg}
    ></svg>
  )
}
