<template>
    <div>

        <div class="form-row">
            <div class="form-group col-md-6">

            </div>
            <div class="form-group col-md-6">
                <h3 class="c-grey-900">Update {{list.name}}'s Details &nbsp;<i class="fas fa-user-plus"></i></h3>
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
                <select id="inputState" class="form-control"  v-model="list.cat" >
                    <option selected>{{list.cat}}</option>
                    <option v-for="itemcat in Catlist">{{itemcat.categories}}</option>
                    

                </select>
            </div>
            <div class="form-group col-md-2">

            </div>
            <div class="form-group col-md-6">
                <button type="submit" @click="update" class="btn btn-primary">Save</button>
            </div>
        </div>
                        
    </div> 
    
</template>

<script>
    import axios from 'axios';
    import{ContactUpdateUrl} from '../config'
    export default {
        name:"UpdateContacts",
        props:
        {  
            list:{},
            Catlist:{}
        },
        data()
        {
            return{
            
            }
        
        },
        methods:
        {
            update()
                {   //alert(`${ContactUpdateUrl}${this.list.id}`) 
                    axios.patch(`${ContactUpdateUrl}${this.list.id}`,this.$props.list).then((response)=>
                        {
                            console.log(response)
                        }).catch((error) => this.errors = error.response.data.errors)
                        this.$router.go('/phonebook')
                }

        }
    }
</script>

<style>

</style>
