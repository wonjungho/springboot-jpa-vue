<template>
<div>
  <Nav></Nav>
  <form>
    <div class="form-group">
      <label for="email">CustomerId:</label>
      <input type="text" class="form-control" v-model="customerId" id="email" placeholder="Enter email">
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" v-model="password" placeholder="Enter password">
    </div>
    <div class="checkbox">
      <label><input type="checkbox"> Recommon me</label>
    </div>
    <button class="btn btn-default" @click="login()">login</button>
    <button  class="btn btn-default" @click="count()">count</button>
    <button  class="btn btn-default" @click="deleteById()">deleteById</button>
    <button  class="btn btn-default" @click="existsById()">existsById</button>
    <button  class="btn btn-default" @click="findAll()">findAll</button>
    <button  class="btn btn-default" @click="findById()">findById</button>
    <button  class="btn btn-default" @click="save()">save</button>
  </form>
  <Footer></Footer>
</div>
</template>

<script>
import Nav from '@/components/common/Nav.vue'
import Footer from'@/components/common/Footer.vue'
import axios from 'axios'

export default {
  data(){
    return{
      context: 'http://localhost:9000/customers',
      customerId:'',
      password:''
    }
  },
  components: {
    Nav,
    Footer
  },
  methods:{
    count(){
      axios.get(`${this.context}/count`).then(res=>{
        alert(`count() SUCCESS:${res.data}`)
      })
      .catch(e=>{
        alert('ERROR')
      })
    },
    deleteById(){
      axios.delete(`${this.context}/1`).then(res=>{
        alert(`deleteById() SUCCESS!`)
      })
      .catch(e=>{
        alert('ERROR')
      })
    },
     existsById(){
      axios.get(`${this.context}/exists/1`).then(res=>{
        alert(`existsById() SUCCESS:${res.data}`)
      })
      .catch(e=>{
        alert('ERROR')
      })
    },
    findAll(){
      axios.get(`${this.context}`).then(res=>{
        alert(`findAll() SUCCESS:${res.data[0].customerName}`)
      })
      .catch(e=>{
        alert('ERROR')
      })
    },
     findById(){
      axios.get(`${this.context}/1`).then(res=>{
        alert(`findById() SUCCESS:${res.data.customerName}`)
      })
      .catch(e=>{
        alert('ERROR')
      })
    },
     save(){
       let data={
         id:this.id,
         customerId:this.customerId,
         customerName:this.customerName,
         password:'1234',
        ssn:this.ssn,
        phone:this.phone,
        city:this.city,
        address:this.address,
        postalcode:this.postalcode,
        photo:this.photo
       }
        let headers={
          'Content-Type':'application/json',
          'Authorization':'JWT fefege..'
      }
      axios.post(`${this.context}`,JSON.stringify(data),{headers:headers})
      .then(res=>{
        alert(`SUCCESS2:${res.data.result}`)
      })
      .catch(e=>{
        alert('ERROR')
      })
    },
    login(){
      let data={
        customerId:this.customerId,
        password:this.password
      }
      let headers={
          'Content-Type':'application/json',
          'Authorization':'JWT fefege..'
      }
      axios.post(`${this.context}/login`,JSON.stringify(data),{headers:headers})
      .then(res=>{
        alert(`login() SUCCESS:${res.data.customerName}`)
      })
      .catch(e=>{
        alert(`ERROR`)
      })
    }
  }
}
</script>

<style scoped>
</style>
