<template>
  <div class="peers ai-s fxw-nw h-100vh">
    <div class="d-n@sm- peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv" style='background-image: url("assets/static/images/2.jpg")'>
      <div class="pos-a centerXY">
        <div class="bgc-white bdrs-50p pos-r" style='width: 120px; height: 120px;'>
          <img class="pos-a centerXY" src="assets/static/images/logo.png" alt="">
        </div>
      </div>
    </div>

    <div class="col-12 col-md-4 peer pX-40 pY-80 h-100 bgc-white scrollable pos-r" style='min-width: 320px;'>
      <h4 class="fw-300 c-grey-900 mB-40">Login</h4>
      <small style="color:red">{{ msg}}</small>
      <form>
        <div class="form-group">
          <label class="text-normal text-dark">User Email</label>
          <input type="email" class="form-control" placeholder="John.Doe@example.com" v-model="email">
        </div>
        <div class="form-group">
          <label class="text-normal text-dark">Password</label>
          <input type="password" class="form-control" placeholder="Password" v-model="password">
        </div>
        <div class="form-group">
          <div class="peers ai-c jc-sb fxw-nw">
            <div class="peer">
              <div class="checkbox checkbox-circle checkbox-info peers ai-c">
                <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" class="peer">
                <label for="inputCall1" class=" peers peer-greed js-sb ai-c">
                  <a href="/register">
                  <span class="peer peer-greed">Register Now</span>
                  </a>
                   
                </label>
              </div>
            </div>
            
            <div class="peer">
              <button class="btn btn-primary"  @click.prevent="login" >Login</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import{getHeader,userurl,logincheck} from '../config'
  export default {
      name:"Login",
      data()
        {
            return{
                email:'',
                password:'',
                msg:''
            }
        }, methods:
        {
          login()
          {
            var data={
                client_id:2,
                client_secret:'9lVY6oiJ2M21nOjnUYxTGy4ayNfTdx6C3qtr1Fe0',
                grant_type:'password',
                username:this.email,
                password:this.password,
            }                
            const authUser={ }
            this.$http.post(logincheck,data).then(response =>
            {
               
              if (response.status === 200)
              {
                
                //console.log('Oauth token', response)
                authUser.access_token = response.data.access_token
                authUser.refresh_token = response.data.refresh_token
                window.localStorage.setItem('authUser', JSON.stringify(authUser))
                this.$http.get(userurl, {headers: getHeader()})
                    .then(response =>
                    {
                      //console.log('userobject', response)
                      authUser.email=response.body.email
                      authUser.name=response.body.name
                      window.localStorage.setItem('authUser', JSON.stringify(authUser))
                      this.$router.push('/Home')
                    });
              }
           
            },
            response =>
            {
              if(response.status == 400)
              { 
                this.msg=response.data.hint;
              }
                                  
            })
          }
        }

  }
</script>

<style>

</style>
