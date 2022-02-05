import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import * as d3 from 'd3'
import { useInterval } from 'usehooks-ts'

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

  useEffect(() => {
    axios.get('./api/for-d3-project/entries', {}).then(newData => {
      if (data !== newData.data) setData(newData.data)
    })
  }, [])

  // react-query for refetching from time to time. The above approach

  useEffect(() => {
    if (data && d3svg.current) {
      let svg = d3
        .select(d3svg.current)

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

      // remove unwanted rects
      rects.exit().remove()

      // append the enter selection to the DOM
      rects
        .enter()
        .append('rect')
        .attr('width', x.bandwidth)
        .attr('height', d => graphHeight - y(d.orders))
        .attr('y', d => y(d.orders))
        .attr('x', d => x(d.name))
        .attr('fill', 'orange')

      // create and call the axes
      const xAxis = d3.axisBottom(x)
      const yAxis = d3
        .axisLeft(y)
        .ticks(3)
        .tickFormat(d => d + ' orders')

      xAxisGroup.call(xAxis)
      yAxisGroup.call(yAxis)

      xAxisGroup
        .selectAll('text')
        .attr('transform', 'rotate(-40)')
        .attr('text-anchor', 'end')
        .attr('fill', 'blue')
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

// TODO:check how to update data without creating new svgs

// Should I focus in d3+react first? I think so.
// The firebase part is slowing me down with something that I don't want right now. Maybe is better to use that youtube video.
