const ctx3 = document.getElementById('myChart3');
// let delayed;

let changeColor=new Chart(ctx3, {
  type:'bar',
  data: {
  labels:['Mizoram','Bihar','Punjab','Meghalaya','Jharkhand','Karnataka','Jammu & Kashmir','Puducherry','Kerala','Goa','Nagaland'],
  datasets: [{
barPercentage: 0.5,
maxBarThickness: 10,
label: 'Death %',
data: [81,80,78,76,74,29,14,13,10,8,7],
backgroundColor: ["red", "red", "red", "red", "red", "blue","red", "red", "red", "red", "red"],
borderColor:'rgba(0, 0, 0, 0.2)',
borderWidth: 1
}]
},
options: {
  plugins: {
  legend: {
    display: false
 },
},
indexAxis:'y',
scales: {
  x: {
    title: {
      display: true,
      text: 'Fatality per 100 accidents'
    },
    ticks: {
      font: {
        size: 9,
      }
    }
  },
    y: {
        ticks: {
            font: {
                size: 9,
            }
        }
    }
}
  }
  
});


