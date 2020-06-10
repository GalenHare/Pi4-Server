<template>
  <div class="container">
    <div>
      <form class = "form-group row justify-content-center" @submit.prevent="handleSubmit">
          <div class = "form-group col-sm-1">
              <label for="dayForm">Day </label>
              <input type="text" v-model="day" class="form-control" id="dayForm">
          </div>
          <div class = "form-group col-sm-1">
              <label for="monthForm">Month</label>
              <input type="text" v-model="month" class="form-control" id="monthForm">
          </div>
          <div class = "form-group col-sm-1">
              <label for="yearForm">Year</label>
              <input type="text" v-model="year" class="form-control" id="yearForm">
          </div>
        <div class="col-sm-3 text-center my-auto"><h1>TO</h1></div> 
          <div class = "form-group col-sm-1">
              <label for="dayForm2">Day </label>
              <input type="text" v-model="day2" class="form-control" id="dayForm2">
          </div>
          <div class = "form-group col-sm-1">
              <label for="monthForm2">Month</label>
              <input type="text" v-model="month2" class="form-control" id="monthForm2">
          </div>
          <div class = "form-group col-sm-1">
              <label for="yearForm2">Year</label>
              <input type="text" v-model="year2" class="form-control" id="yearForm2">
          </div>
          <button type="submit" class="btn btn-primary">Apply</button>
      </form> 
      <p v-if="error">
        Please fill in all fields
      </p>
      <p v-else>
        <ul>
          <li v-for="i in data">{{i}}</li>
        </ul>
      </p>
    </div>
    <v-chart :options="line"/>
  </div>
</template>

<script>
import AttendanceService from '../middleware/AttendanceService.js';
import ECharts from 'vue-echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/polar';

export default {
  components: {
    'v-chart': ECharts
  },
  data() {
    return {
      line: {
              title: {text: 'Line Chart'},
              tooltip: {},
              toolbox: {
                  feature: {
                      dataView: {},
                      saveAsImage: {
                          pixelRatio: 2
                      },
                      restore: {}
                  }
              },
              xAxis: {},
              yAxis: {},
              series: [{
                  type: 'line',
                  smooth: true,
                  data: [[12, 5], [24, 20], [36, 36], [48, 10], [60, 10], [72, 20]]
              }]
          },
      year:null,
      month:null,
      day:null,
      year2:null,
      month2:null,
      day2:null,
      data:[],
      error:null
    };
  },
  methods:{
      async handleSubmit(){
          if(!this.day || !this.month || !this.year || !this.day2 || !this.month2 || !this.year2){
            this.error = true;
          }else{
            this.error = false;
            let dateFrom = this.year+"-"+this.month+"-"+this.day;
            let dateTo = this.year2+"-"+this.month2+"-"+this.day2;
            this.data = await AttendanceService.getAttendanceBetweenDate(dateFrom,dateTo,"COMP3120");
          }
      }
  },
  created(){
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: block;
  /* justify-content: center; */
  /* align-items: center; */
  /* text-align: center; */
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.echarts {
  width: 100%;
  height: 100%;
}
</style>
