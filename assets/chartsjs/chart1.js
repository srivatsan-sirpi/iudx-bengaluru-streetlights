const ctx = document.getElementById('myChart').getContext("2d");
let delayed;


new Chart(ctx, {
	type: 'line',
	data: {
		labels: ['2018', '2019', '2020', '2021'],
		datasets: [{
			label: 'Accidents',
			data: [467044, 449002, 366138, 412432],
			borderWidth: 3,
			borderColor: "skyblue",
			pointHoverRadius: 30,
			tension: 0.4
		}, {
			label: 'Injuries',
			data: [469418, 451361, 348279, 384448],
			borderWidth: 3,
			borderColor: "black",
			pointHoverRadius: 30,
			tension: 0.4
		}, {
			label: 'Fatalities',
			data: [151417, 151113, 131714, 153972],
			borderWidth: 3,
			borderColor: "orange",
			pointHoverRadius: 30,
			tension: 0.4
		}]
	},
	options: {

		responsive: true,
		plugins: {
			title: {
				display: false,
				text: ''
			},
			tooltip: {
				mode: 'index'
			},
		},
		interaction: {
			mode: 'nearest',
			axis: 'x',
			intersect: false
		},
		animation: {
			onComplete: () => {
				delayed = false;
			},
			delay: (context) => {
				let delay = 0;
				if (context.type === 'data' && context.mode === 'default' && !delayed) {
					delay = context.dataIndex * 300 + context.datasetIndex * 100;
				}
				return delay;
			}
		},
		scales: {
			x: {
				title: {
					display: true,
					text: 'Year'
				}
			},
			y: {
				title: {
					display: true,
					text: 'Count'
				}
			}
		}
	}

});

