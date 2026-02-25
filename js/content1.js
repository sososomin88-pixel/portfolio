/*******************************************************************************
 * 파일명 : content1.js
 * 제작자 : jsm
 * 일  자 : 2020-07-06
 * 내  용 : content script
 ******************************************************************************/

$(document).ready(function(){
    console.log("content1");

    var chart1 = new Highcharts.Chart({
        chart: {
            renderTo: 'chart1',
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
            text: '<span style="font-size:15px; font-weight:600; color:#fff;">금일발전량</span>'
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
    
    var chart2 = new Highcharts.Chart({
        chart: {
            renderTo: 'chart2',
            type: 'solidgauge',
            backgroundColor: '#fff0',
            borderWidth: 0,
            plotBackgroundColor: '#fff0',
            plotShadow: false,
            plotBorderWidth: 0,
            style: {
                fontFamily: 'sans-serif',
                color: '#fff'
            }
        },
        title: {
            text: null
        },   
        /*tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '16px'
            },
            valueSuffix: 'kWh',
            //pointFormat: '<span style="font-weight: bold">{series.name}</span><br><span style="font-size:20px; color: {point.color}; font-weight: bold">{point.y}</span>',
            pointFormat: '<span style="font-size:16px; color: {point.color}; font-weight: bold">{point.y}</span><br><span style="font-size:16px; color: {point.color}; font-weight: bold">100%효율</span>',
            positioner: function (labelWidth) {
                return {
                    x: (this.chart.chartWidth - labelWidth) / 2,
                    y: (this.chart.plotHeight / 2) - 15
                };
            }
        },*/
        tooltip: {
            enabled : false
        },   
        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{ // Track for Move
                outerRadius: '112%',
                innerRadius: '88%',
                backgroundColor: Highcharts.color(Highcharts.getOptions().colors[0])
                    .setOpacity(0.3)
                    .get(),
                borderWidth: 0
            }]
        },    
        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },    
        plotOptions: {
            solidgauge: {
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false,
                rounded: true
            }
        },
        legend: {
            enabled : false
        },  
        series: [{
            name: 'Move',
            data: [{
                color: 'rgb(213,213,213)',
                radius: '112%',
                innerRadius: '88%',
                y: 80
            }]
        }],
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        }
    });
})