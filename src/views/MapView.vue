<template>
  <div id="map">
    <div id="map-container">
      <apexchart type="radar" height="550" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
export default {
  name: "MapView",
  components: {
    apexchart: VueApexCharts,
  },
  data(){
    return{
      series: [{
        name: 'Puntaje',
        data: [20, 100, 40, 30, 50, 80, 33],
      }],
      chartOptions: {
        chart: {
          height: 550,
          type: 'radar',
          labels: ["Salud", "Profesional", "Dinero", "Hogar", "Amigos", "Amor", "Espritualidad", "Diversión"],
        },
        title:{
          text: "Circulo del bienestar",
          align: "center",
          margin: 10,
          offsetY: 20,
          style: {
            fontSize: "25px",
            fontWeight: "bold",
            fontFamily: "Helvetica, Arial, sans-serif",
            color: "#433627"
          }
        },
        xaxis: {
          categories: ["Salud", "Profesional", "Dinero", "Hogar", "Amigos", "Amor", "Espritualidad", "Diversión"]
        },
        stroke: {
          colors: ['#e58d18']
        },
        fill: {
          opacity: 0.8,
          color: ['#e58d18']
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom',
            }
          }
        }]
      }
    }
  }
}
</script>

<style scoped>

</style>