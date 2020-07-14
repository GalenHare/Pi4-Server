<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-5"></div>
      <h2 class="col-sm-3">START</h2>
      <div class="col-sm-1"></div>
      <h2 class="col-sm-3">END</h2>
    </div>
    <div>
    <form @submit.prevent="handleSubmit">
      <div class = "form-group row justify-content-center">
        <div class = "form-group col-sm-2">
            <label for="course">Course</label>
            <input type="text" v-model="course" class="form-control" name="course">
        </div>
          <div class = "form-group col-sm-1">
            <label for="startDay">Day</label>
            <select  v-model="startDay" name="startDay">
                <option value="1" selected>Mon</option>
                <option value="2">Tues</option>
                <option value="3">Wed</option>
                <option value="4">Thurs</option>
                <option value="5">Fri</option>
            </select>
          </div>
          <div class="col-sm-1"></div>
          <div class = "form-group col-sm-1">
               <label for="startHour">Hour</label>
                <select  name="startHour" v-model="startHour">
                    <option value="1" selected>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
          </div>
          <div class = "form-group col-sm-1">
                <label for="startMinute">Minute</label>
                <select  name="startMinute" v-model="startMinute">
                    <option value="0" selected>00</option>
                    <option value="1">01</option>
                    <option value="2">02</option>
                    <option value="3">03</option>
                    <option value="4">04</option>
                    <option value="5">05</option>
                    <option value="6">06</option>
                    <option value="7">07</option>
                    <option value="8">08</option>
                    <option value="9">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                    <option value="32">32</option>
                    <option value="33">33</option>
                    <option value="34">34</option>
                    <option value="35">35</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                    <option value="45">45</option>
                    <option value="46">46</option>
                    <option value="47">47</option>
                    <option value="48">48</option>
                    <option value="49">49</option>
                    <option value="50">50</option>
                    <option value="51">51</option>
                    <option value="52">52</option>
                    <option value="53">53</option>
                    <option value="54">55</option>
                    <option value="56">56</option>
                    <option value="57">57</option>
                    <option value="58">58</option>
                    <option value="59">59</option>
                </select>
          </div>
          <div class = "form-group col-sm-1">
              <label for="noonOrNight">A.M./P.M.</label>
                <select  name="noonOrNight" v-model="noonOrNight" >
                    <option value="1" selected>A.M.</option>
                    <option value="2">P.M.</option>
                </select>
          </div>
          <div class="col-sm-1"></div> 
          <div class = "form-group col-sm-1">
               <label for="endHour">Hour</label>
                <select  name="endHour" v-model="endHour">
                    <option value="1" selected>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
          </div>
          <div class = "form-group col-sm-1">
                <label for="endMinute">Minute</label>
                <select  name="endMinute" v-model="endMinute">
                    <option value="0" selected>00</option>
                    <option value="1">01</option>
                    <option value="2">02</option>
                    <option value="3">03</option>
                    <option value="4">04</option>
                    <option value="5">05</option>
                    <option value="6">06</option>
                    <option value="7">07</option>
                    <option value="8">08</option>
                    <option value="9">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                    <option value="32">32</option>
                    <option value="33">33</option>
                    <option value="34">34</option>
                    <option value="35">35</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                    <option value="45">45</option>
                    <option value="46">46</option>
                    <option value="47">47</option>
                    <option value="48">48</option>
                    <option value="49">49</option>
                    <option value="50">50</option>
                    <option value="51">51</option>
                    <option value="52">52</option>
                    <option value="53">53</option>
                    <option value="54">55</option>
                    <option value="56">56</option>
                    <option value="57">57</option>
                    <option value="58">58</option>
                    <option value="59">59</option>
                </select>
          </div>
          <div class = "form-group col-sm-1">
              <label for="noonOrNight2">
                  A.M./P.M.
              </label>
                <select  name="noonOrNight2" v-model="noonOrNight2">
                    <option value="1" selected>A.M.</option>
                    <option value="2">P.M.</option>
                </select>
          </div>
          <div class = "form-group row">
            <label for="scannerID">Scanner ID</label>
            <input type="text" v-model="scannerID" class="form-control" name="scannerID">
          </div>
        </div>
          <div class = "row">
            <div class = "col-sm-8"></div>
            <select  class="col-sm-2"name="option" v-model="buttonVal">
              <option value="1" selected>Add</option>
              <option value="2">Delete</option>
            </select>
            <button type="submit" class="btn btn-primary col-sm-2">Submit</button>
          </div>
      </form> 
      <p v-if="error ==='1'">
        Please fill in all fields
      </p>
      <p v-else-if="error === '2'">
        Incorrect time logic!
      </p>
    </div>
  </div>
</template>

<script>
import ScannerService from '../middleware/ScannerService.js';

export default {
  components: {
    
  },
  data() {
    return {
      startDay:null,
      course:null,
      startHour:null,
      startMinute:null,
      endHour:null,
      endMinute:null,
      noonOrNight:null,
      noonOrNight2:null,
      data:[],
      scannerID:null,
      error:null,
      buttonVal:null
    };
  },
  methods:{
      async handleSubmit(){
        console.log(this.error)
        let tempStartHour = this.startHour;
        let tempEndHour = this.endHour;
        if(this.noonOrNight == "2"){
          tempStartHour = 12 + parseInt(this.startHour);
        }
        if(this.noonOrNight2 == "2"){
          tempEndHour = 12 + parseInt(this.endHour);
        }
        if(!this.scannerID || !this.course || !this.startDay || !this.startHour || !this.startMinute || !this.endHour || !this.endMinute || !this.noonOrNight || !this.noonOrNight2){
          this.error = "1";
        }else if((parseInt(tempStartHour)*60 + parseInt(this.startMinute))>= (parseInt(tempEndHour)*60 + parseInt(this.endMinute))){
          this.error = "2"
        }else{
          this.error = false;
          console.log(this.scannerID);
          console.log(this.course);
          console.log(this.startDay);
          console.log(tempStartHour);
          console.log(this.startMinute);
          console.log(tempEndHour);
          console.log(this.endMinute);
          if(this.buttonVal == "1"){
            this.data = await ScannerService.addCourse(this.scannerID,this.course,this.startDay, tempStartHour, this.startMinute, tempEndHour, this.endMinute);
            if(this.data != null){
              alert("Query Successful");
            }
          }else{
            this.data = await ScannerService.deleteCourse(this.scannerID,this.course,this.startDay, tempStartHour, this.startMinute, tempEndHour, this.endMinute  );
            if(this.data != null){
              alert("Query Successful");
            }
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
