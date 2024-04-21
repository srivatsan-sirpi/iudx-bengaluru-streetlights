const ctx4 = document.getElementById('myChart4');


const chartAreaBorder = {
    id: 'chartAreaBorder',
    beforeDraw(chart, args, options) {
        const { ctx, chartArea: { left, top, width, height } } = chart;
        ctx.save();
        ctx.strokeStyle = options.borderColor;
        ctx.lineWidth = options.borderWidth;
        ctx.setLineDash(options.borderDash || []);
        ctx.lineDashOffset = options.borderDashOffset;
        ctx.strokeRect(left, top, width, height);
        ctx.restore();
    }
};

new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['Status'],
        // labels: [''],
        datasets: [{
            label: 'Off Duty Hours',
            data: ['1400'],
            borderWidth: 2,
            backgroundColor: ['#f75990'],
            borderColor: ['#f75990'],
            borderSkipped: false,
            hoverBackgroundColor: 'red'

        }, {
            label: 'On Duty Hours',
            data: ['1951'],
            borderWidth: 2,
            backgroundColor: ['#00DDFF'],
            borderColor: ['#00DDFF'],
            borderSkipped: false,
            hoverBackgroundColor: 'blue'

        }]
    },
    options: {

        responsive: true,
		maintainAspectRatio: true,
        plugins: {
            legend: {
                position: 'bottom'
            },
            title: {
                display: false,
                text: ''
            },
            chartAreaBorder: {
                borderColor: 'gray',
                borderWidth: 2,
                borderDash: [10, 10],
                borderDashOffset: 2,
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
                ticks: {
                    value: 'OnDuty'
                }
            },
            y: {
                ticks: {
                    callback: (label) => (`${label}H`)
                },
                display: true,
                title: {
                    display: true,
                    text: 'Hours'
                }
            }
        }
    },
    plugins: [chartAreaBorder]
});