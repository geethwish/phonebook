<template>
    <div class="form-row">
        <div class="form-group col-md-6">

        </div>
        <div class="form-group col-md-6">
            <h3 class="c-grey-900">New Category &nbsp;<i class="fas fa-plus-circle"></i></i></h3>
        </div>
        <hr>
        <div class="form-group col-md-4">

        </div>
        <div class="form-group col-md-6">
            <label for="inputEmail4">Category Title</label>
            <input type="text" class="form-control" id="inputEmail4" placeholder="category(Friend/Family etc.." v-model="list.categories" >
        </div>
        <div class="form-group col-md-4">

        </div>
        
        <div class="form-group col-md-6">
            <button type="submit" @click="save"  class="btn btn-primary">Save</button>
        </div>

    </div>
</template>

<script>
    import axios from 'axios';
    import{CatogryAddUrl} from '../config'
    export default {
        name:"NewCategory",
         data()
         {
            return{
                list:
                {
                    categories:''
                },
                errors:{}
            }
        },
        methods:
        {
            save()
            {
                if (this.list.categories=='') {
                    alert("Catagory Cannot be Empty")
                }
                else if ( this.list.categories!='')
                {
                    axios.post(CatogryAddUrl,this.$data.list).then((response)=>
                        {
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
