<template>
    <div class="form-row">
        <div class="form-group col-md-6">

        </div>
        <div class="form-group col-md-6">
            <h3 class="c-grey-900">Update Category &nbsp;<i class="fas fa-edit"></i></h3>
        </div>
        <hr>
        <div class="form-group col-md-4">

        </div>
        <div class="form-group col-md-6">
            <label for="inputEmail4">Category Title</label>
            <input type="text" class="form-control" id="inputEmail4" placeholder="category(Friend/Family etc.." v-model="listofcat.categories" >
        </div>
        <div class="form-group col-md-4">

        </div>
        
        <div class="form-group col-md-6">
            <button type="submit" @click="update"  class="btn btn-primary">Update</button>
        </div>

    </div>
</template>

<script>
    import axios from 'axios';
    import{UpdateCatUrl} from '../config'
    export default {
        name:"UpdateCat",
        props:{
            listofcat:{}
        },
         data()
         {
            return{
              
                errors:{}
            }
        },
        methods:
        {
            update()
            {
                if (this.listofcat.categories=='') {
                    alert("Catagory Cannot be Empty")
                }
                else if ( this.listofcat.categories!='')
                {
                    axios.patch(`${UpdateCatUrl}${this.listofcat.id}`,this.$props.listofcat).then((response)=>
                        {
                            confirm("Successfully Updated..! ");
                            location.reload('/phonebook')    
                        }).catch((error) => this.errors = error.response.data.errors)   
                }
                
            }
        }

    }
</script>

<style>

</style>
