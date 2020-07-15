<template>
  <div class="container">
    <div>
      <form class = "form-group" @submit.prevent="handleSubmit">
        <div class="row justify-content-center">
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
        </div>
        <div class="row">
          <div class = "form-group col-sm-4">
              <label for="scannerID" class="">Scanner ID</label>
              <input type="text" v-model="scannerID" class="form-control" name="scannerID">
          </div>
          <div class = "form-group col-sm-4">
              <label for="studentID" class="">Student ID</label>
              <input type="text" v-model="studentID" class="form-control" name="studentID">
          </div>
        </div>
      </form>
      <div v-show="error"> 
        <p>
          Please fill in all fields
        </p>
      </div>
      <div v-show="!error">
          <table class = "table table-striped">
            <thead>
              <th>Student ID</th>
              <th>Date</th>
              <th>Time</th>
              <th>Course Code</th>
              <th>Scanner ID</th>
            </thead>
            <tbody>
              <tr v-for="x in toPrint" :key = "x.studentID" >
                <td>{{x.studentID}}</td>
                <td>{{x.date}}</td>
                <td>{{x.time}}</td>
                <td>{{x.courseCode}}</td>
                <td>{{x.scannerID}}</td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  </div>
</template>

<script>
import AttendanceService from '../middleware/AttendanceService.js';
export default {
  components: {
    
  },
  data() {
    return {
      year:null,
      month:null,
      day:null,
      year2:null,
      month2:null,
      day2:null,
      data:[],
      scannerID:null,
      studentID:null,
      toPrint:[],
      len:null,
      error:true
    };
  },
  methods:{
      async handleSubmit(){
          if(!this.day || !this.month || !this.year || !this.day2 || !this.month2 || !this.year2 || !this.scannerID){
            this.error = true;
          }else{
            this.error = false;
            let dateFrom = this.year+"-"+this.month+"-"+this.day;
            let dateTo = this.year2+"-"+this.month2+"-"+this.day2;
            this.data = await AttendanceService.getAttendanceBetweenDateID(dateFrom,dateTo,this.studentID,this.scannerID);
            console.log(this.data.length);
            if(this.data != []){
              this.len = this.data.length;
              for(let i=0;i<this.len;i++){
                let tempDate = new Date(this.data[i].date)
                console.log(tempDate)
                let temp = {
                              "studentID":this.data[i].studentID,
                              "date":tempDate.toDateString(),
                              "time":tempDate.getUTCHours()+":"+tempDate.getUTCMinutes() + ":"+tempDate.getUTCSeconds(),
                              "courseCode":this.data[i].courseCode,                             
                              "scannerID":this.data[i].scannerID
                }
                console.log(temp)
                this.toPrint.push(temp)
              }
             console.log(this.toPrint); 
            }
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

/* .echarts {
  width: 100%;
  height: 100%;
} */
</style>
