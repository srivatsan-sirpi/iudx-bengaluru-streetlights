const ctx6 = document.getElementById('myChart6');

new Chart(ctx6, {
	type: 'bar',
	data: {
		labels: ['Night (9PM-3AM)', 'Morning (3AM-9AM)', 'Afternoon (9AM-3PM)', 'Evening (3PM-9PM)'],
		datasets: [{
			data: [44, 43, 44, 45],
			borderWidth: 2,
			backgroundColor: ['#e3eaf6', '#e3eaf6', '#e3eaf6', '#ff0000'],

		}]
	},
	options: {
		plugins: {
			legend: {
				display: false
			}
		},
		responsive: true,
		scales: {
			x: {
				title: {
					display: false,
					text: 'Time period for 24 hours'
				},
				ticks: {
					font: {
						size: 9,
					}
				}
			},
			y: {
				display: true,
				title: {
					display: true,
					text: 'Ambulance Activity (%)'
				}
			}
		}
	}
});
