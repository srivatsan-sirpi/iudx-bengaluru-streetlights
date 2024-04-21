const ctx5 = document.getElementById('myChart5');

new Chart(ctx5, {
    type: 'bar',
    data: {
      labels: ['GJ06G6482','GJ06GA0421','GJ06G6735', 'GJ06G6737', 'GJ06G6390', 'GJ06GA0402', 'GJ06G6385', 'GJ06G6733', 'GJ06G6482', 'GJ06G6383', 'GJ06G6736'],
      datasets: [{
        label: 'NO',
        data: ['6568', '16040', '172207', '222382','0', '238210', '289927','309029', '353517', '432332', '477849'],
        borderWidth: 2,
        backgroundColor:['rgb(253,217,181,0.2)',
  'rgb(253,217,181,0.4)',
  'rgb(253,217,181,0.6)',
  'rgb(253,217,181,0.8)',
  'rgb(253,217,181,1)',
  'rgb(253,217,181,1)',
  'rgb(253,217,181,0.8)',
  'rgb(253,217,181,0.6)',
  'rgb(253,217,181,0.4)',
    'rgb(253,217,181,0.2)'],
        borderColor:['rgba(254, 55, 1, 1)'],
        pointHoverRadius:20,
  order:1
        
      },{
        label: 'YES',
  order:0,
        data: ['9137', '18264', '40859', '91089', '257766', '0', '189282','167158', '103687', '54116', '6253'],
        borderWidth: 2,
        // backgroundColor:['rgba(1, 55, 255, 0.2)',
  // 'rgba(1, 55, 255, 0.4)',
  // 'rgba(1, 55, 255, 0.6)',
  // 'rgba(1, 55, 255, 0.8)',
  // 'rgba(1, 55, 255, 1.2)',
  // 'rgba(1, 55, 255, 1)',
  // 'rgba(1, 55, 255, 0.8)',
  // 'rgba(1, 55, 255, 0.6)',
  // 'rgba(1, 55, 255, 0.4)',
  // 'rgba(1, 55, 255, 0.2)'],
        borderColor:['#12343b'],
        pointHoverRadius:20,
        
      }]
    },
    options: {
plugins: {
title: {
  display: false,
  text: '(1st dec - 31th dec)'
},
},
interaction: {
mode: 'nearest',
axis: 'x',
intersect: false
},

responsive: true,
scales:{
x:{
  ticks:{
      value:'OnDuty',
      font:{
        size:8
      }
  }
},
y: {
  ticks: {
    callback: (label) => `${label/1000}H`,
  },
  display: true,
  title: {
    display: true,
    text: 'Hours'
  }
}
}
},
  });