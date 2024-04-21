const ctx2 = document.getElementById('myChart2');
// let delayed;

new Chart(ctx2, {
	type: 'bar',
	data: {
		labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
		datasets: [{
			label: 'Total Accidents',
			data: [486476, 489400, 501423, 480652, 464910, 467044, 449002, 366138],
			borderWidth: 2,
			backgroundColor: 'rgba(54, 162, 235, 1)',
			borderColor: 'rgb(0, 155, 255)',
			pointHoverRadius: 20,

		}, {
			label: 'Dead',
			data: [150785, 150785, 150785, 150785, 147913, 151417, 151113, 131714],
			borderWidth: 2,
			pointHoverRadius: 20,
			backgroundColor: 'rgba(255, 99, 132, 1)',
			borderColor: 'rgb(0, 155, 255)',

		}]
	},
	options: {
		plugins: {
			title: {
				display: false,
				text: ''
			},
		},
		xAxis3D: {
			type: 'value'
		},
		yAxis3D: {
			type: 'value'
		},
		zAxis3D: {
			type: 'value'
		},
		grid3D: {
			viewControl: {
				projection: 'orthographic'
			}
		},
		interaction: {
			mode: 'nearest',
			axis: 'x',
			intersect: false
		},
		responsive: true,
		scales: {
			x: {
				stacked: true,
			},
			y: {
				stacked: true
			}
		}
	}
});
