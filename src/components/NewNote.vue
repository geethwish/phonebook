<template>
    <div>
        <div class="form-row">
            <div class="form-group col-md-6">

            </div>
            <div class="form-group col-md-6">
                <h3 class="c-grey-900">Create New Note &nbsp;<i class="far fa-sticky-note"></i></h3>
            </div>
            <hr>
            <div class="form-group col-md-2">

            </div>
            <div class="form-group col-md-5">
                <label for="inputEmail4">Title</label>
                <input type="text" class="form-control" id="inputEmail4" placeholder="Note Title"  v-model="list.title">
            </div>
            <div class="form-group col-md-5">
                <label for="inputEmail4">Description</label>
                <input type="text" class="form-control" id="inputEmail4" placeholder="Note Description" v-model="list.description">
            </div>
            <div class="form-group col-md-2">

            </div>
            
            <div class="form-group col-md-5">
                <label for="inputEmail4">Date</label>
                <input type="date" class="form-control" id="inputEmail4" placeholder="Note Description" v-model="list.date">
                
                
               
            </div>
               <div class="form-group col-md-5">
                <label for="inputEmail4">Time</label><br>
                <input type="time" class="form-control" id="inputEmail4" placeholder="Note Description" v-model="list.time">
               
            </div>
            <div class="form-group col-md-2">

            </div>
            <div class="form-group col-md-5">
                <label for="inputEmail4">Venue</label>
                <input type="text" class="form-control" id="inputEmail4" placeholder="Venue" v-model="list.Venue">
            </div>
            <div class="form-group col-md-5">
                
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
    import Datepicker from 'vuejs-datepicker';
    import{ContactsUrl,NotesUrl,CatogryUrl,AddNoteUrl} from '../config'
    export default {
        name:"NewNote",
        components:
        {
            Datepicker

        },
        data()
            {
                return{
                    list:
                    {
                        title:'',
                        description:'',
                        date:'',
                        time:'',
                        Venue:'',
                    },
                    listscat:{},
                    tempcat:{},
                    errors:{},
                    date:'',
                    showupdatemodel:false,   
                }
            
            },
           
            methods:
            {
                save()
                {
                if (this.list.title=='')
                    {
                        alert("Title Cannot be Empty")
                    }
                else if (this.list.des=='')
                    {
                        alert("Description should be Provie")
                        
                    }
                else if (this.list.date=='')
                    {
                        alert("Date should be Provie")
                        
                    } 
                else if (this.list.time=='')
                    {
                        alert("Time should be Provie")
                        
                    }
                else if (this.list.Venue=='')
                    {
                        alert("Location  should be Provie")
                        
                    }
                else if (this.list.Venue!='' && this.list.title!=''&& this.list.date!=''&& this.list.time!=''&& this.list.des!='')
                {
                    axios.post(AddNoteUrl,this.$data.list).then((response)=> {
                        //console.log(response)
                        location.reload('/notebook')  
                    })
                    .catch((error) => this.errors = error.response.data.errors) 
                    
                }
                
            }
        }

    }
</script>

<style>

</style>
