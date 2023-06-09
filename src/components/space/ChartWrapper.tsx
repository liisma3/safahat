import React, { useRef, useState, useEffect } from 'react';
import D3Chart from '@/lib/stat/D3Chart';

const ChartWrapper = ({ data, updateName }) => {
	const chartArea = useRef(null)
	const [chart, setChart] = useState(null)

	useEffect(() => {
		if (!chart) {
			setChart(new D3Chart(chartArea.current, data, updateName))
		}
		else {
			chart.update(data)
		}
	}, [chart, data, updateName])

	return (
		<div className="chart-area" ref={chartArea}></div>
	)
}

export default ChartWrapper
