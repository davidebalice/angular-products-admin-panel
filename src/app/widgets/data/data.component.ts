import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from 'src/app/appModules/mat.module';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexFill,
  ApexMarkers,
  ApexYAxis,
  ApexPlotOptions,
  ApexTooltip,
  ApexNonAxisChartSeries,
  ApexResponsive,
} 

from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  responsive: ApexResponsive[];
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  fill: ApexFill,
  markers: ApexMarkers,
  colors: string[];
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
  labels: string[];
};


@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule, MatModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.scss'
})
export class DataComponent {
  @ViewChild("chart") chart: ChartComponent;

  public WidgetChart1: Partial<ChartOptions>;
  public WidgetChart2: Partial<ChartOptions>;
  public WidgetChart3: Partial<ChartOptions>;
  public WidgetChart4: Partial<ChartOptions>;
  public WidgetChart5: Partial<ChartOptions>;
  public WidgetChart6: Partial<ChartOptions>;
  public WidgetChart7: Partial<ChartOptions>;
  public WidgetChart8: Partial<ChartOptions>;
  public WidgetChart9: Partial<ChartOptions>;
  public WidgetChart10: Partial<ChartOptions>;
  public WidgetChart11: Partial<ChartOptions>;
  public WidgetChart12: Partial<ChartOptions>;
  public WidgetChart13: Partial<ChartOptions>;
  public WidgetChart14: Partial<ChartOptions>;
  public WidgetChart15: Partial<ChartOptions>;


  constructor() { 

// chart 1
this.WidgetChart1 = {
  series
  : [
    {
      name: "Orders",
      data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21]
    }
  ],
  chart: {
    height: 65,
    type: "area",
    zoom: {
      enabled: false
    },
    toolbar: {
      show: !1
    },
    sparkline: {
      enabled: !0
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      gradientToColors: ["#b224ef"],
      shadeIntensity: 1,
      type: "vertical",
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 100, 100, 100]
    }
  },
  colors: ["#7579ff"],
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 2,
    curve: "smooth"
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5
    }
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep"
    ]
  },
  tooltip: {
    theme: "dark",
  }
};


// chart 2
this.WidgetChart2 = {
  series
  : [
    {
      name: "Orders",
      data: [12, 14, 7, 47, 32, 44, 14, 55, 41, 69]
    }
  ],
  chart: {
    height: 65,
    type: "area",
    zoom: {
      enabled: false
    },
    toolbar: {
      show: !1
    },
    sparkline: {
      enabled: !0
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      gradientToColors: ["#ee226e"],
      shadeIntensity: 1,
      type: "vertical",
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 100, 100, 100]
    }
  },
  colors: ["#ee226e"],
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 2,
    curve: "smooth"
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5
    }
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep"
    ]
  },
  tooltip: {
    theme: "dark",
  }
};

// chart 3
this.WidgetChart3 = {
  series
  : [
    {
      name: "Orders",
      data: [47, 45, 74, 32, 56, 31, 44, 33, 45, 19]
    }
  ],
  chart: {
    height: 65,
    type: "area",
    zoom: {
      enabled: false
    },
    toolbar: {
      show: !1
    },
    sparkline: {
      enabled: !0
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      gradientToColors: ["#2af598"],
      shadeIntensity: 1,
      type: "vertical",
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 100, 100, 100]
    }
  },
  colors: ["#009efd"],
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 2,
    curve: "smooth"
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5
    }
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep"
    ]
  },
  tooltip: {
    theme: "dark",
  }
};


// chart 4
this.WidgetChart4 = {
  series
  : [
    {
      name: "Orders",
      data: [15, 75, 47, 65, 14, 32, 19, 54, 44, 61]
    }
  ],
  chart: {
    height: 65,
    type: "bar",
    zoom: {
      enabled: false
    },
    toolbar: {
      show: !1
    },
    sparkline: {
      enabled: !0
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      gradientToColors: ["#fe6225"],
      shadeIntensity: 1,
      type: "vertical",
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100, 100, 100]
    }
  },
  colors: ["#fe6225"],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "30%",
      //endingShape: "rounded"
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 4,
    colors: ["transparent"]
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5
    }
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep"
    ]
  },
  tooltip: {
    theme: "dark",
  }
};



// chart 5
this.WidgetChart5 = {
  series: [75],
  chart: {
    height: 260,
    type: "radialBar",
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 225,
      hollow: {
        margin: 0,
        size: "82%",
        background: "transparent",
        image: undefined,
        position: "front",
        dropShadow: {
          enabled: false,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.24
        }
      },
      track: {
        background: "#eee",
        strokeWidth: "67%",
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: false,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35
        }
      },

      dataLabels: {
        show: true,
        name: {
          offsetY: -10,
          show: false,
          color: "#888",
          fontSize: "17px"
        },
        value: {
          color: "#111",
          fontSize: "36px",
          show: true
        }
      }
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "horizontal",
      shadeIntensity: 0.5,
      gradientToColors: ["#ff00cc"],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  colors: ["#333399"],
  stroke: {
    lineCap: "round"
  },
  labels: ["Monthly Views"]
};




// chart 6
this.WidgetChart6 = {
  series: [75],
  chart: {
    height: 260,
    type: "radialBar",
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 225,
      hollow: {
        margin: 0,
        size: "82%",
        background: "transparent",
        image: undefined,
        position: "front",
        dropShadow: {
          enabled: false,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.24
        }
      },
      track: {
        background: "#eee",
        strokeWidth: "67%",
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: false,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35
        }
      },

      dataLabels: {
        show: true,
        name: {
          offsetY: -10,
          show: false,
          color: "#888",
          fontSize: "17px"
        },
        value: {
          color: "#111",
          fontSize: "36px",
          show: true
        }
      }
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "horizontal",
      shadeIntensity: 0.5,
      gradientToColors: ["#ee0979"],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  colors: ["#ff6a00"],
  stroke: {
    lineCap: "round"
  },
  labels: ["Monthly Views"]
};




// chart 7
this.WidgetChart7 = {
  series: [75],
  chart: {
    height: 260,
    type: "radialBar",
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 225,
      hollow: {
        margin: 0,
        size: "82%",
        background: "transparent",
        image: undefined,
        position: "front",
        dropShadow: {
          enabled: false,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.24
        }
      },
      track: {
        background: "rgba(255, 255, 255, 0.10)",
        strokeWidth: "67%",
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: false,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35
        }
      },

      dataLabels: {
        show: true,
        name: {
          offsetY: -10,
          show: false,
          color: "#888",
          fontSize: "17px"
        },
        value: {
          color: "#fff",
          fontSize: "36px",
          show: true
        }
      }
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "horizontal",
      shadeIntensity: 0.5,
      gradientToColors: ["#fff"],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  colors: ["#fff"],
  stroke: {
    lineCap: "round"
  },
  labels: ["Monthly Views"]
};




// chart 8
this.WidgetChart8 = {
  series: [75],
  chart: {
    height: 260,
    type: "radialBar",
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 225,
      hollow: {
        margin: 0,
        size: "82%",
        background: "transparent",
        image: undefined,
        position: "front",
        dropShadow: {
          enabled: false,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.24
        }
      },
      track: {
        background: "rgba(0, 0, 0, 0.10)",
        strokeWidth: "67%",
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: false,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35
        }
      },
      dataLabels: {
        show: true,
        name: {
          offsetY: -10,
          show: false,
          color: "#888",
          fontSize: "17px"
        },
        value: {
          color: "#111",
          fontSize: "36px",
          show: true
        }
      }
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "horizontal",
      shadeIntensity: 0.5,
      gradientToColors: ["#2af598"],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  colors: ["#009efd"],
  stroke: {
    lineCap: "round"
  },
  labels: ["Monthly Views"]
};




// chart 9
this.WidgetChart9 = {
  series
  : [
    {
      name: "Revenu",
      data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21]
    }
  ],
  chart: {
    width: 150,
    height: 60,
    type: "area",
    zoom: {
      enabled: false
    },
    toolbar: {
      show: !1
    },
    sparkline: {
      enabled: !0
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      gradientToColors: ["#ff00cc"],
      shadeIntensity: 1,
      type: "vertical",
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 100, 100, 100]
    }
  },
  colors: ["#333399"],
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 1.5,
    curve: "smooth"
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5
    }
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep"
    ]
  },
  tooltip: {
    theme: "dark",
  }
};



// chart 10
this.WidgetChart10 = {
  series
  : [
    {
      name: "Revenu",
      data: [12, 14, 20, 47, 32, 44, 14, 55, 41, 69]
    }
  ],
  chart: {
    width: 150,
    height: 60,
    type: "area",
    zoom: {
      enabled: false
    },
    toolbar: {
      show: !1
    },
    sparkline: {
      enabled: !0
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      gradientToColors: ["#f09819"],
      shadeIntensity: 1,
      type: "vertical",
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 100, 100, 100]
    }
  },
  colors: ["#ff5858"],
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 1.5,
    curve: "smooth"
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5
    }
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep"
    ]
  },
  tooltip: {
    theme: "dark",
  }
};




// chart 11
this.WidgetChart11 = {
  series
  : [
    {
      name: "Revenu",
      data: [47, 45, 74, 32, 56, 31, 44, 33, 45, 19]
    }
  ],
  chart: {
    width: 150,
    height: 60,
    type: "area",
    zoom: {
      enabled: false
    },
    toolbar: {
      show: !1
    },
    sparkline: {
      enabled: !0
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      gradientToColors: ["#f9f047"],
      shadeIntensity: 1,
      type: "vertical",
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 100, 100, 100]
    }
  },
  colors: ["#0fd850"],
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 1.5,
    curve: "smooth"
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5
    }
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep"
    ]
  },
  tooltip: {
    theme: "dark",
  }
};




// chart 12
this.WidgetChart12 = {
  series
  : [
    {
      name: "Revenu",
      data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21]
    }
  ],
  chart: {
    width: 150,
    height: 60,
    type: "bar",
    zoom: {
      enabled: false
    },
    toolbar: {
      show: !1
    },
    sparkline: {
      enabled: !0
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      gradientToColors: ["#ff00cc"],
      shadeIntensity: 1,
      type: "vertical",
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100, 100, 100]
    }
  },
  colors: ["#333399"],
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 1.5,
    curve: "smooth"
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5
    }
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep"
    ]
  },
  tooltip: {
    theme: "dark",
  }
};



// chart 13
this.WidgetChart13 = {
  series
  : [
    {
      name: "Revenu",
      data: [12, 14, 20, 47, 32, 44, 14, 55, 41, 69]
    }
  ],
  chart: {
    width: 150,
    height: 60,
    type: "bar",
    zoom: {
      enabled: false
    },
    toolbar: {
      show: !1
    },
    sparkline: {
      enabled: !0
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      gradientToColors: ["#f09819"],
      shadeIntensity: 1,
      type: "vertical",
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100, 100, 100]
    }
  },
  colors: ["#ff5858"],
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 1.5,
    curve: "smooth"
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5
    }
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep"
    ]
  },
  tooltip: {
    theme: "dark",
  }
};




// chart 14
this.WidgetChart14 = {
  series
  : [
    {
      name: "Revenu",
      data: [47, 45, 74, 32, 56, 31, 44, 33, 45, 19]
    }
  ],
  chart: {
    width: 150,
    height: 60,
    type: "bar",
    zoom: {
      enabled: false
    },
    toolbar: {
      show: !1
    },
    sparkline: {
      enabled: !0
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      gradientToColors: ["#f9f047"],
      shadeIntensity: 1,
      type: "vertical",
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100, 100, 100]
    }
  },
  colors: ["#0fd850"],
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 1.5,
    curve: "smooth"
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5
    }
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep"
    ]
  },
  tooltip: {
    theme: "dark",
  }
};


// chart 15
this.WidgetChart15 = {
  series: [44, 55, 67],
  chart: {
    height: 330,
    type: "radialBar"
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: "22px"
        },
        value: {
          fontSize: "16px"
        },
        total: {
          show: true,
          label: "Total",
          formatter: function(w) {
            return "249";
          }
        }
      },
      hollow: {
        margin: 10,
        size: "50%",
        background: "transparent",
        image: undefined,
        position: "front",
        dropShadow: {
          enabled: false,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.24
        }
      },
      track: {
        background: "rgba(0, 0, 0, 0.10)",
        strokeWidth: "67%",
        margin: 10, // margin is in pixels
        dropShadow: {
          enabled: false,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35
        }
      },
    },
    
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "horizontal",
      shadeIntensity: 0.5,
      gradientToColors: ["#25a0f4", "#a52db7", "#fe6225"],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  colors: ["#25a0f4", "#a52db7", "#fe6225"],
  stroke: {
    lineCap: "round"
  },
  labels: ["Stocks", "Mutual Fund", "Bonds"]
};



  }

}
