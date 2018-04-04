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



    /*Neuro FeedBack*/

    var select3 = $('#select3');
    var select4 = $('#select4');
    var myChart2 = $('#myChart2');
    var myChart3 = $('#myChart3');
    select3.on('click',()=>{
        if (select3.value != ""){
            select4.prop('disabled', false);
            select4.css({
                'background' : '#ddd',
                'color' : 'black',
                'cursor' : 'pointer'
            })
        }
    });

    select4.on('click',()=>{
        if (select4.value != ""){
            myChart2.prop('height', 300);
            myChart2.prop('width', 400);
            var ctx = document.getElementById("myChart2").getContext('2d');
                              var myChart = new Chart(ctx, {
                                  type: 'line',
                                  data: {
                                      labels: ["Enero", "Febrero", "Marzo", "Abril"],
                                      datasets: [{
                                          data: [12, 19, 3, 5],
                                          backgroundColor: [
                                              'rgba(255, 99, 132, 0.2)',
                                              
                                        
                                          ],
                                          borderColor: [
                                              'rgba(255,99,132,1)',
                                              

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
                                        display: false,
                                        labels: {
                                            fontColor: 'white'
                                        }
                                      }


                                      
                                  }
                              });

                              myChart3.prop('height', 300);
                              myChart3.prop('width', 400);
                              var ctx = document.getElementById("myChart3").getContext('2d');
                                                var myChart = new Chart(ctx, {
                                                    type: 'polarArea',
                                                    data: {
                                                        labels: ["Enero", "Febrero", "Marzo", "Abril"],
                                                        datasets: [{
                                                            data: [12, 19, 13, 20],
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
                                                          display: false,
                                                          labels: {
                                                              fontColor: 'white'
                                                          }
                                                        }
                  
                  
                                                        
                                                    }
                                                });
        }
    });



    $('#my-table').Tabledit({
        columns: {
          identifier: [0, 'id'],                    
          editable: [[1, 'First Name'], [2, 'Last Name'],[3, 'First Name'], [4, 'Last Name'],[5, 'Last Name']]
        }
        });
});


