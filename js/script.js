$(function(){
  'use strict';

  var ctx1 = $("#chart-1");
  var chart1 = new Chart(ctx1, {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            data: [65, 59, 80, 81, 56, 55, 40],

            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            //borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            spanGaps: false
          }
        ]
      }
  });

  //-----------------

  var ctx2 = $("#chart-2");
  var chart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
          label: 'CHART 2',
          data: [12, 19, 3, 5, 2, 3],

          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 5
      }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
  });

  //-----------------

  var ctx3 = $("#chart-3");
  var chart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        datasets: [{
            label: 'Scatter Dataset',
            lineTension: 0,
            borderColor: "#f00",
            
            data: [{
                x: -10,
                y: 0
            }, {
                x: 0,
                y: 10
            }, {
                x: 10,
                y: 5
            }]
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
  });


  //----------------------

  $("#toggle-sidebar").on("click", function(){
    $(this).closest(".sidebar").toggleClass("right");
  });
});