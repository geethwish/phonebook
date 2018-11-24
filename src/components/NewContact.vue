<template>
    <div>

        <div class="form-row">
            <div class="form-group col-md-6">

            </div>
            <div class="form-group col-md-6">
                <h3 class="c-grey-900">New Contact &nbsp;<i class="fas fa-user-plus"></i></h3>
            </div>
            <hr>
            <div class="form-group col-md-2">

            </div>
            <div class="form-group col-md-5">
                <label for="inputEmail4">Name</label>
                <input type="text" class="form-control" id="inputEmail4" placeholder="Name"  v-model="list.name">
            </div>
            <div class="form-group col-md-5">
                <label for="inputEmail4">Email</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="Email" v-model="list.email">
            </div>
            <div class="form-group col-md-2">

            </div>
            <div class="form-group col-md-5">
                <label for="inputEmail4">Phone Number</label>
                <input type="number" class="form-control" id="inputEmail4" placeholder="Phone Number" v-model="list.phone">
            </div>
            <div class="form-group col-md-5">
                <label for="inputEmail4">Company</label>
                <input type="text" class="form-control" id="inputEmail4" placeholder="Companay" v-model="list.compny">
            </div>
            <div class="form-group col-md-2">

            </div>
            <div class="form-group col-md-5">
                <label for="inputEmail4">Personal Address</label>
                <input type="text" class="form-control" id="inputEmail4" placeholder="Address" v-model="list.address">
            </div>
            <div class="form-group col-md-5">
                <label for="inputState">category</label>
                <select id="inputState" class="form-control"  v-model="list.cat">
                    <option v-for="itemcat in tempcat">{{itemcat.categories}}</option>
                </select>
            </div>
            <div class="form-group col-md-2">

            </div>
            <div class="form-group col-md-6">
                <button type="submit" @click="save"  class="btn btn-primary">Save</button>
            </div>
        </div>
                        
    </div> 
</template>

<script>
    import axios from 'axios';
    import{ContactsUrl,NotesUrl,CatogryUrl} from '../config'
    export default {
        name:"NewContact",
        data()
            {
                return{
                    list:
                    {
                        name:'',
                        email:'',
                        address:'',
                        phone:'',
                        compny:'',
                        cat:''
                    },
                    listscat:{},
                    tempcat:{},
                    errors:{}   
                }
            
            },
            mounted()
            {
                const userobj=JSON.parse(window.localStorage.getItem(('authUser')))
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + userobj.access_token
                axios.get(CatogryUrl)
                .then(response =>
                {
                    this.listscat = this.tempcat = response.data
                })
                .catch(error =>
                {
                    console.log(error)
                })
            },
            methods:
            {
                save(){
                    if (this.list.name=='') {
                        alert("Name Field Cannot Be null")
                    } else if (this.list.email=='')
                    {
                    alert("Email Field Cannot Be null") 
                    }
                    else if (this.list.phone=='')
                    {
                    alert("Phone Number Field Cannot Be null") 
                    }
                    else if (this.list.phone.length>10)
                    {
                    alert("Phone number must be less than 9 chaeacters..!") 
                    }else if (this.list.address=='')
                    {
                    alert("AddressField Cannot Be null") 
                    }else if (this.list.cat=='')
                    {
                    alert("Catagory Field Cannot Be null") 
                    }else if (this.list.compny=='')
                    {
                    alert("Work Place Field Cannot Be null") 
                    }else if(this.list.name!=''&&this.list.phone!=''&&this.list.email!=''&&this.list.address!=''&&this.list.cat!=''&&this.list.compny!='')
                    {
                        axios.post('http://localhost/api/addpcontacts',this.$data.list,).then((response)=>
                        {
                            console.log(response)
                            confirm("Successfully Added ");
                            location.reload('/phonebook')    
                        }).catch((error) => this.errors = error.response.data.errors)

                    }
                    
                }
            }
    }
</script>

<style>

</style>
