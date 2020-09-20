export const pieOptions = {
    chart: {
      background: "transparent",
      foreColor: "white",
      fontFamily: 'Play',
      


      dropShadow: {
        enabled: true,
        enabledOnSeries: true,
        top: 0,
        left: 0,
        blur: 20,
        color: '#000',
        opacity: 0.35
      }

    },
    colors: ["#a8dadc", "#ed7947", "#00D4FF", "#ffd6a5"],
    legend: {
      show: true,
      fontFamily: 'Play',
      fontSize: '14px',
      position: 'bottom',
      offsetY: 5
    },
    tooltip: {
      enabled: true,
    },
    dataLabels: {
      enabled: true,
      offsetX: "200px",
      offsetY: "200px",
      
      style: {
        colors: ["#a8dadc", "#ed7947", "#00D4FF", "#ffd6a5"],
        fontSize: "20px",
        fontFamily: "Play, sans-serif",
        fontWeight: 700
      },
    },
    plotOptions: {
      pie: {
        customScale: 0.8,
        expandOnClick: true,
        dataLabels: {
          offset: 55,
        },
      },

      value: {
        offsetY: 50
      },
    },
  };
  
  export const barOptions = {
    chart: {
      toolbar: {
        show: true,
      },
    },
    colors: ["#ED7947"],
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        endingShape: "rounded",
        startingShape: "rounded",
        barHeight: "50px",
      },
    },
    dataLabels: {
      enabled: true,
    },
    tooltip: {
      enabled: true,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: [
      {
        labels: {
          maxWidth: 360,
          style: {
            colors: "#00D4FF",
            fontSize: "18px",
            fontFamily: "Play, sans-serif",
            fontWeight: 700,
          },
        },
      },
    ],
  };