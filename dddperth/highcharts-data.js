var colors = Highcharts.getOptions().colors;

Highcharts.chart('macropods-chart-1', {

  chart: {
      type: 'column'
  },

  title: {
      text: 'Macropods' 
  },

  xAxis: {
      categories: [
        'Gilbert\'s Potoroo',
        'Banded Hare-Wallaby',
        'Bridled Nailtail Wallaby',
        'Long-Footed Potoroo',
        'Nabarlek',
        'Northern Bettong',
        'Proserpine Rock-Wallaby',
        'Woylie',
        'Long-Nosed Potoroo',
        'Quokka',
        'Rufous Hare-Wallaby',
        'Yellow-Footed Rock-Wallaby',
      ],
      plotBands: [{
        from: -0.5,
        to: 0.5,
        color: 'rgba(68, 170, 213, 0.1)',
        label: {
            text: 'Crit. endangered',
            style: {
                color: '#606060'
            }
        }
      },
      {
        from: 0.5,
        to: 7.5,
        color: 'rgba(68, 170, 213, 0.1)',
        label: {
            text: 'Endangered',
            style: {
                color: '#606060'
            }
        }
      },
      {
        from: 7.5,
        to: 11.5,
        color: 'rgba(68, 170, 213, 0.1)',
        label: {
            text: 'Vulnerable',
            style: {
                color: '#606060'
            }
        }
      }]
  },

  yAxis: {
      allowDecimals: false,
      min: 0,
      title: {
          text: 'Millimeters'
      }
  },

  tooltip: {
      formatter: function () {
          return '<b>' + this.x + '</b><br/>' +
              this.series.name + ': ' + this.y;
      }
  },

  plotOptions: {
      column: {
          stacking: 'normal'
      }
  },

  series: [{
      name: 'Average HB Male',
      data: [
        328.5,
        425,
        605,
        397.5,
        320,
        375,
        562.5,
        330,
        348.5,
        485,
        335,
        565
      ],
      stack: 'Male'
  }, {
      name: 'Average HB Female',
      data: [
        317,
        425,
        485,
        397.5,
        320,
        363.5,
        564.5,
        305,
        318.5,
        445,
        375,
        565
      ],
      stack: 'Female'
  }, {
      name: 'Average T Male',
      data: [
        223.5,
        295,
        460,
        320,
        265,
        315,
        636.5,
        315,
        233,
        280,
        287.5,
        632.5
      ],
      stack: 'Male'
  }, {
      name: 'Average T Female',
      data: [
        218,
        295,
        400,
        320,
        265,
        309,
        587.5,
        305,
        226,
        260,
        277.5,
        632.5
      ],
      stack: 'Female'
  }]
});

Highcharts.chart('dataviz-a11y-timeline', {
  chart: {
      type: 'timeline'
  },
  accessibility: {
      screenReaderSection: {
          beforeChartFormat: '<h5>{chartTitle}</h5>' +
              '<div>{typeDescription}</div>' +
              '<div>{chartSubtitle}</div>' +
              '<div>{chartLongdesc}</div>' +
              '<div>{viewTableButton}</div>'
      },
      point: {
          valueDescriptionFormat: '{index}. {point.label}. {point.description}.'
      }
  },
  xAxis: {
      visible: false
  },
  yAxis: {
      visible: false
  },
  title: {
      text: 'Timeline of dataviz accessibility'
  },
  // subtitle: {
  //     text: ''
  // },
  colors: [
      '#4185F3',
      '#427CDD',
      '#406AB2',
      '#3E5A8E',
      '#3B4A68',
      '#363C46'
  ],
  series: [{
      data: [{
          name: '2019: Freelancing',
          description: 'Working on some electricity IoT data, had no idea how to make it accessible.'
      }, {
          name: 'Mar 2020: Found Dataviz A11y Twitter community',
          description: ''
      }, {
          name: 'Sep 2020: Built a keyboard accessible dynamic dataviz',
          description: '18 March 2011, first spacecraft to orbit Mercury.'
      }, {
          name: '2015: Food eaten in space',
          description: '10 August 2015, first food grown in space and eaten (lettuce).'
      }, {
          name: '2019: Black hole photograph',
          description: '10 April 2019, first direct photograph of a black hole and its vicinity.'
      }, {
          name: '2020: Private spaceflight',
          description: '30 May 2020, first orbital human spaceflight launched by a private company (SpaceX).'
      }]
  }]
});