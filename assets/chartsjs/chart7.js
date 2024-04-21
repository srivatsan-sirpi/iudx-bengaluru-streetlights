const ctx7 = document.getElementById('myChart7');

let count = 28;
let labels = [];
for (let i = 1; i <= count; i++) {
  labels.push(i.toString());
}
const Title = (tooltipItems) => {
  let date = tooltipItems[0].label+"/2/2023";
  return date;
};

new Chart(ctx7, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: 'Active ambulance count',
      data: ['0','1','0','0','1','43','43','44','44','43','44','43','43','42','43','43','43','42','43','43','42','43','43','42','42','42','42','42'],
      borderWidth: 2,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)'

      ],
      borderColor: [
        'rgb(255, 99, 132)'
      ],
      pointHoverRadius: 20,
      order: 1

    }]
  },
  options: {
    plugins: {
      legend: {
        display: false,
        labels: {
          usePointStyle: false,
        },
      },
      tooltip:{
        callbacks:{
          title:Title
        }
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
        title: {
          display: true,
          text: 'February 2023'
        },
        ticks: {
          autoSkip: false,
          maxRotation: 90,
          minRotation: 90,
          font: {
            size: 7
          }
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Active Ambulance Count'
        }
      }
    }
  },
});
