$(document).ready(function(){
    
    var select1 = $('#select1');
    var select2 = $('#select2');
    var myChart1 = $('#myChart');
    select1.on('click',()=>{
        if (select1.value != ""){
            select2.prop('disabled', false);
            select2.css({
                'background' : '#ddd',
                'color' : 'black',
                'cursor' : 'pointer'
            })
        }
    });

    select2.on('click',()=>{
        if (select2.value != ""){
            myChart1.prop('height', 300);
            myChart1.prop('width', 400);
            var ctx = document.getElementById("myChart").getContext('2d');
                              var myChart = new Chart(ctx, {
                                  type: 'bar',
                                  data: {
                                      labels: ["Matematica", "Castellano", "Sociales", "Historia"],
                                      datasets: [{
                                          label: 'Nota',
                                          data: [12, 19, 3, 5],
                                          backgroundColor: [
                                              'rgba(255, 99, 132, 0.2)',
                                              'rgba(54, 162, 235, 0.2)',
                                              'rgba(255, 206, 86, 0.2)',
                                              'rgba(75, 192, 192, 0.2)',
                                          ],
                                          borderColor: [
                                              'rgba(255,99,132,1)',
                                              'rgba(54, 162, 235, 1)',
                                              'rgba(255, 206, 86, 1)',
                                              'rgba(75, 192, 192, 1)',
                                          ],
                                          borderWidth: 1
                                      }]
                                  },
                                  options: {
                                      scales: {
                                          yAxes: [{
                                              ticks: {
                                                  beginAtZero:true,
                                                  fontColor: 'white',
                                              }
                                          }],
                                          xAxes: [{
                                              ticks: {
                                                  fontColor: 'white',
                                              }
                                          }],
                                      },

                                      legend: {
                                        display: true,
                                        labels: {
                                            fontColor: 'white'
                                        }
                                      }


                                      
                                  }
                              });
        }
    });

});