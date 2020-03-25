<template>
  <div class="container">
    <form v-on:submit.prevent="addCourse">
      <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input 
        v-model="name" 
        type="text" 
        class="form-control" 
        id="exampleInputEmail1" 
        aria-describedby="emailHelp"
        
        >
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">ID</label>
        <input v-model="id" type="text" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <table class = "table table-striped">
      <thead>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Fingerprint</th>
      </thead>
      <tbody>
        <tr v-for="student in students" :key = "student._id" >
          <td>{{student.fName}}</td>
          <td>{{student.lName}}</td>
        </tr>
      </tbody>
    </table>
    <div>
      <logo />
      <h1 class="title">
        Pi4-Server
      </h1>
      <h2 class="subtitle">
        My exquisite Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import axios from 'axios'

export default {
  components: {
    Logo
  },
  data() {
    return {
      name:"",
      id: "",
      students:[]
    };
  },
  methods:{
    addCourse: function(){
      if(this.name=="" || this.name == ""){
        alert("Please enter valid data");
      }else{
        axios.post('http://localhost:5000/api/students',{
          fName:this.name,
          lName:this.id,
          fingerprint:"kjbdljbs"
        }).then(res => {
          if(res.data.message == "OK"){
            alert("Success");
          }else{
            alert("Something went wrong");
          }
        })
      }
    }
  },
  created(){
    axios
    .get ('http://localhost:5000/api/students')
    .then(res => (this.students = res.data));
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
</style>
