/*******************************************************************************
 * 파일명 : content2_dab.js
 * 제작자 : jsm
 * 일  자 : 2020-07-06
 * 내  용 : content script
 ******************************************************************************/

$(document).ready(function(){
    console.log("content2_dab");

    var chart13 = new Highcharts.Chart({
        chart: {
            renderTo: 'chart13',
            type: 'column',
            backgroundColor: '#34495E',
            borderWidth: 0,
            plotBackgroundColor: '#34495E',
            plotShadow: false,
            plotBorderWidth: 0,
            style: {
                fontFamily: 'sans-serif',
                color: '#fff'
            }
        },

        title: {
            //text: '<span style="font-size:15px; font-weight:600; color:#fff;">금일발전량</span>'
            text: null
        },   
    
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            labels: {
                style: {
                    fontFamily: 'sans-serif',
                    color: '#fff'
                }
            }
        },
        
        yAxis: {
            title: {
                //text: 'Temperature (°C)'
                enabled : false
            },
            labels: {
                style: {
                    fontFamily: 'sans-serif',
                    color: '#fff'
                }
            }
        },
    
        legend: {
            //layout: 'vertical',
            //align: 'right',
            //verticalAlign: 'middle'
            enabled : false
        },
    
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },

        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }],

        credits: {
            enabled: false
        },

        exporting: {
            enabled: false
        }
    });

    var chart14 = new Highcharts.Chart({
        chart: {
            renderTo: 'chart14',
            type: 'line',
            backgroundColor: '#34495E',
            borderWidth: 0,
            plotBackgroundColor: '#34495E',
            plotShadow: false,
            plotBorderWidth: 0,
            style: {
                fontFamily: 'sans-serif',
                color: '#fff'
            }
        },

        title: {
            //text: '<span style="font-size:15px; font-weight:600; color:#fff;">금일발전량</span>'
            text: null
        },   
    
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            labels: {
                style: {
                    fontFamily: 'sans-serif',
                    color: '#fff'
                }
            }
        },
        
        yAxis: {
            title: {
                //text: 'Temperature (°C)'
                enabled : false
            },
            labels: {
                style: {
                    fontFamily: 'sans-serif',
                    color: '#fff'
                }
            }
        },
    
        legend: {
            //layout: 'vertical',
            //align: 'right',
            //verticalAlign: 'middle'
            enabled : false
        },
    
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },

        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }],

        credits: {
            enabled: false
        },

        exporting: {
            enabled: false
        }
    });

    var chart15 = new Highcharts.Chart({
        chart: {
            renderTo: 'chart15',
            type: 'column',
            backgroundColor: '#34495E',
            borderWidth: 0,
            plotBackgroundColor: '#34495E',
            plotShadow: false,
            plotBorderWidth: 0,
            style: {
                fontFamily: 'sans-serif',
                color: '#fff'
            }
        },

        title: {
            //text: '<span style="font-size:15px; font-weight:600; color:#fff;">금일발전량</span>'
            text: null
        },   
    
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            labels: {
                style: {
                    fontFamily: 'sans-serif',
                    color: '#fff'
                }
            }
        },
        
        yAxis: {
            title: {
                //text: 'Temperature (°C)'
                enabled : false
            },
            labels: {
                style: {
                    fontFamily: 'sans-serif',
                    color: '#fff'
                }
            }
        },
    
        legend: {
            //layout: 'vertical',
            //align: 'right',
            //verticalAlign: 'middle'
            enabled : false
        },
    
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },

        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }],

        credits: {
            enabled: false
        },

        exporting: {
            enabled: false
        }
    });

    var chart16 = new Highcharts.Chart({
        chart: {
            renderTo: 'chart16',
            type: 'line',
            backgroundColor: '#34495E',
            borderWidth: 0,
            plotBackgroundColor: '#34495E',
            plotShadow: false,
            plotBorderWidth: 0,
            style: {
                fontFamily: 'sans-serif',
                color: '#fff'
            }
        },

        title: {
            //text: '<span style="font-size:15px; font-weight:600; color:#fff;">금일발전량</span>'
            text: null
        },   
    
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            labels: {
                style: {
                    fontFamily: 'sans-serif',
                    color: '#fff'
                }
            }
        },
        
        yAxis: {
            title: {
                //text: 'Temperature (°C)'
                enabled : false
            },
            labels: {
                style: {
                    fontFamily: 'sans-serif',
                    color: '#fff'
                }
            }
        },
    
        legend: {
            //layout: 'vertical',
            //align: 'right',
            //verticalAlign: 'middle'
            enabled : false
        },
    
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },

        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }],

        credits: {
            enabled: false
        },

        exporting: {
            enabled: false
        }
    });

    var chart17 = new Highcharts.Chart({
        chart: {
            renderTo: 'chart17',
            type: 'column',
            backgroundColor: '#34495E',
            borderWidth: 0,
            plotBackgroundColor: '#34495E',
            plotShadow: false,
            plotBorderWidth: 0,
            style: {
                fontFamily: 'sans-serif',
                color: '#fff'
            }
        },

        title: {
            //text: '<span style="font-size:15px; font-weight:600; color:#fff;">금일발전량</span>'
            text: null
        },   
    
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            labels: {
                style: {
                    fontFamily: 'sans-serif',
                    color: '#fff'
                }
            }
        },
        
        yAxis: {
            title: {
                //text: 'Temperature (°C)'
                enabled : false
            },
            labels: {
                style: {
                    fontFamily: 'sans-serif',
                    color: '#fff'
                }
            }
        },
    
        legend: {
            //layout: 'vertical',
            //align: 'right',
            //verticalAlign: 'middle'
            enabled : false
        },
    
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },

        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }],

        credits: {
            enabled: false
        },

        exporting: {
            enabled: false
        }
    });

    var chart18 = new Highcharts.Chart({
        chart: {
            renderTo: 'chart18',
            type: 'line',
            backgroundColor: '#34495E',
            borderWidth: 0,
            plotBackgroundColor: '#34495E',
            plotShadow: false,
            plotBorderWidth: 0,
            style: {
                fontFamily: 'sans-serif',
                color: '#fff'
            }
        },

        title: {
            //text: '<span style="font-size:15px; font-weight:600; color:#fff;">금일발전량</span>'
            text: null
        },   
    
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            labels: {
                style: {
                    fontFamily: 'sans-serif',
                    color: '#fff'
                }
            }
        },
        
        yAxis: {
            title: {
                //text: 'Temperature (°C)'
                enabled : false
            },
            labels: {
                style: {
                    fontFamily: 'sans-serif',
                    color: '#fff'
                }
            }
        },
    
        legend: {
            //layout: 'vertical',
            //align: 'right',
            //verticalAlign: 'middle'
            enabled : false
        },
    
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },

        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }],

        credits: {
            enabled: false
        },

        exporting: {
            enabled: false
        }
    });
})