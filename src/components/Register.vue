<template>
  <div class="peers ai-s fxw-nw h-100vh">
    <div class="peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv" style='background-image: url("assets/static/images/2.jpg")'>
      <div class="pos-a centerXY">
        <div class="bgc-white bdrs-50p pos-r" style='width: 120px; height: 120px;'>
          <img class="pos-a centerXY" src="assets/static/images/logo.png" alt="">
        </div>
      </div>
    </div>
    <div class="col-12 col-md-4 peer pX-40 pY-80 h-100 bgc-white scrollable pos-r" style='min-width: 320px;'>
      <h4 class="fw-300 c-grey-900 mB-40">Register </h4>
      <small style="color:red">{{error[0]}}</small>
      <form>
        <div class="form-group">
          <label class="text-normal text-dark">Username</label>
          <input type="text" class="form-control" Placeholder='John Doe' v-model="list.name">
        </div>
        <div class="form-group">
          <label class="text-normal text-dark">Email Address</label>
          <input type="email" class="form-control" Placeholder='name@email.com' v-model="list.email">
        </div>
        <div class="form-group">
          <label class="text-normal text-dark">Password</label>
          <input type="password" class="form-control" placeholder="Password" v-model="list.password">
        </div>
        <div class="form-group">
          <label class="text-normal text-dark">Confirm Password</label>
          <input type="password" class="form-control" placeholder="Re-type Password" v-model="list.repassword">
        </div>
        <div class="form-group">
          <button type="button" class="btn btn-primary" @click="register" >Register</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import{Registerurl} from '../config'
  export default {
      name:"Register",
          data()
          {
            return{
                list:
                {
                    name:'',
                    email:'',
                    password:'',
                    repassword:'' 
                },
                error:'',    
            }
          },
          methods:
          {
          register()
          {
              
            if (this.list.password==this.list.repassword)
            {
                this.$http.post(Registerurl,this.$data.list,).then(response =>
                {   //alert(response.status)  
                    if (response.status === 200)
                    {
                      //console.log('Oauth token', response),
                      alert("Registration Succeed. Please Login Now.!")
                      this.$router.push('/')               
                    }
                },response =>
                {
                  if(response.status == 422)
                  {
                      
                      this.error=response.data.errors.email
                  }
                                      
                })//.catch((error) => this.errors = error.response.data.errors);
            }else{
                alert("Passowrd Dosent Match Pleast check the Password and try again..!")
            }
              
          }
      }

  }
</script>

<style>

</style>
