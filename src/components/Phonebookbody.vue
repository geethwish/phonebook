<template>
  <main class='main-content bgc-grey-100'>
    <div id='mainContent'>
      <div class="full-container">
        <div class="email-app">
          <div class="email-side-nav remain-height ov-h">
            <div class="h-100 layers">
              <div class="p-20 bgc-grey-100 layer w-100">
                <a  class="btn btn-danger btn-block" @click="open = true;" style="color:white">New Contact &nbsp;<i class="fas fa-plus"></i></a> 
              </div>

              <div class="scrollable pos-r bdT layer w-100 fxg-1">
                <ul class="p-20 nav flex-column">
                  <li class="nav-item" v-for="itemcat,key in tempcat"  >
                    <a href="javascript:void(0)" class="nav-link c-grey-800 cH-blue-500 active">
                      <div class="peers ai-c jc-sb">
                        <div class="peer peer-greed">
                          <i v-if="itemcat.categories=='Friend'" class="fas fa-male"></i> 
                          <i v-else-if="itemcat.categories=='Family'" class="fas fa-home"></i>  
                          <i v-else-if="itemcat.categories=='Lawyer'" class="fas fa-gavel"></i>
                          <i v-else-if="itemcat.categories=='Relations'" class="fas fa-people-carry"></i>
                          <i v-else-if="itemcat.categories=='School'" class="fas fa-school"></i>
                          <i v-else-if="itemcat.categories=='Schhol'" class="fas fa-school"></i>
                          <i v-else-if="itemcat.categories=='Campus'" class="fas fa-graduation-cap"></i>  
                          <i v-else-if="itemcat.categories=='University'" class="fas fa-graduation-cap"></i>
                          <i v-else-if="itemcat.categories=='O/L'" class="fas fa-swatchbook"></i> 
                          <i v-else-if="itemcat.categories=='A/L'" class="fas fa-swatchbook"></i>
                          <i v-else-if="itemcat.categories=='Wife'" class="fas  fa-heartbeat"></i>
                          <i v-else-if="itemcat.categories=='Children'" class="fas  fa-child"></i>  
                          <i v-else class="fas fa-circle"></i> 
                          <span @click="bycategory(itemcat.categories)">&nbsp;{{itemcat.categories}}</span>
                          <span class="badge badge-pill bgc-deep-purple-50 c-deep-purple-700" style="float:right">
                            <i class="fas fa-pen-square" @click="showupdateCat= true;updatecat(key)"></i> &nbsp;
                            <i class="fas fa-trash"  @click="delcat(key,itemcat.id)"></i>
                          </span>
                          
                        </div>
                      </div>
                    </a>
                  </li>

                  <li class="nav-item">
                    <a href="javascript:void(0)" class="nav-link c-grey-800 cH-blue-500 active">
                      <div class="peer peer-greed">
                        <span @click="bycategoryall">&nbsp;All</span>
                        <span class="badge badge-pill bgc-deep-purple-50 c-deep-purple-700" style="float:right">{{ Contactslists.length}}</span>                            
                      </div>  
                    </a>
                  </li>
                  <br>
                  <br>
                  <button type="submit"   class="btn btn-primary" @click="showmodel= true;">Add Category &nbsp; <i class="fas fa-plus"></i></button>
                </ul>
              </div>
            </div>
          </div>

        <div class="email-wrapper row remain-height bgc-white ov-h">
          <div class="email-list h-100 layers">
            <div class="layer w-100">
              <div class="bgc-grey-100 peers ai-c jc-sb p-20 fxw-nw">
                <div class="peer">
                  <div class="btn-group" role="group">
                    <h5>Phone Boook <i class="fas fa-phone"></i></h5>
                  </div>
                </div>
              </div>
            </div>

            <div class="layer w-100">
              <div class="bdT bdB">
                <input type="text" class="form-control m-0 bdw-0 pY-15 pX-20" placeholder="Search..."  v-model="searchQuery">
              </div>
            </div>
            
            <div class="layer w-100 fxg-1 scrollable pos-r">
              <VuePerfectScrollbar  class="scroll-area" v-bind:settings="settings" @ps-scroll-y="scrollHanle">
              
                <div class="">
                    <div v-if="temp==''">
                      <H1>No Result Found</H1>
                    </div>
                  <div v-else>
                    <div class="email-list-item peers fxw-nw p-20 bdB bgcH-grey-100 cur-p" v-for="item,key in temp">
                      <div class="peer mR-10">
                        <div class="checkbox checkbox-circle checkbox-info peers ai-c">
                          <input type="radio" name="gender" value="male" @click="show(key)" >
                          <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" class="peer" >
                        </div>
                      </div>

                      <div class="peer peer-greed ov-h" @click="show(key)">
                        <div class="peers ai-c">
                          <div class="peer peer-greed" >
                            <h6>
                              {{item.name}}
                            </h6>
                          </div>
                          <div class="peer">
                            <small>{{item.cat}}</small>
                          </div>
                        </div>
                        <h6 class="fsz-def tt-c c-grey-900">
                          {{item.email}}
                        </h6>
                        <div align="right">
                          <i class="fas fa-pen-square" @click="showupdatemodel= true;update(key,item.id)"></i> &nbsp;
                          <i class="fas fa-trash"  @click="del(key,item.id)"></i>
                        </div>
                      </div>   
                    </div>
                  </div>
                </div>
              </VuePerfectScrollbar>
            </div> 
          </div>

          <div class="email-content h-100">
            <div class="h-100 scrollable pos-r">
              <div class="email-content-wrapper">
                <!-- Header -->
                <div v-if="IDofkey2==false">
                  <div class="peer">
                      <h3>No Contact Selected</h3>
                  </div>

                  <div class="peer">
                      <img src="assets/static/images/77.gif" width="85%">
                  </div> 

                </div>

                <div v-else>
                    <show-contact v-bind="{Contacts}" />
                </div>

              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
      <vue-modaltor  :visible="open" @hide="hideModal">
        <NewContact/>
      </vue-modaltor>
      
      <vue-modaltor  :visible="showmodel" @hide="hideModal">
        <NewCategory/>
      </vue-modaltor>

      <vue-modaltor  :visible="showupdatemodel" @hide="hideModal" >
        <UpdateContacts v-bind="{list,Catlist}"/>
      </vue-modaltor>

      <vue-modaltor  :visible="showupdateCat" @hide="hideModal" >
        <UpdateCat v-bind="{listofcat}"/>
      </vue-modaltor>
  </main>
        
</template>

<script>
    import NewCategory from './NewCategory.vue'
    import UpdateCat from './UpdateCat.vue'
    import UpdateContacts from './UpdateContacts.vue'
    import ShowContact from './ShowContact.vue'
    import NewContact from './NewContact.vue'
    import{ContactsUrl,NotesUrl,CatogryUrl,DeleteCatUrl} from '../config'
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import axios from 'axios';
    export default
    {
      name:"Phonebookbody",
      components:
      {
        ShowContact,
        VuePerfectScrollbar,
        NewContact,
        NewCategory,
        UpdateContacts,
        UpdateCat
      },
      data()
      {
        return{
          Contactslists:{},
          errors:{},
          open: false,
          searchQuery:'',
          temp:'',
          userobj:'',
          view:{},
          IDofkey:false,
          Contacts:'',
          IDofkey2:'',
          settings:{maxScrollbarLength: 100},
          listscat:{},
          showmodel:false,
          showupdatemodel:false,
          list:{},
          Catlist:{},
          showupdateCat:false,
          listofcat:'',
          tempcat:{}
        }

      },
      mounted()
      { 
        this.IDofkey2=false; 
        const userobj=JSON.parse(window.localStorage.getItem(('authUser')))
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + userobj.access_token
        axios.get(ContactsUrl)
            .then(response =>
            {
              this.Contactslists = this.temp = response.data             
            })
            .catch(error =>
            {
              console.log(error)
            })
        axios.get(CatogryUrl)
            .then(response =>
            {
              this.listscat = this.tempcat= response.data 
            })       
      },
      watch:
      {
        searchQuery()
        {
          if (this.searchQuery.length > 0)
          {
            this.temp = this. Contactslists.filter((item) =>
              {
                return Object.keys(item).some((key)=>
                {
                  let string = String(item[key]) 
                  return string.toLowerCase().indexOf(this.searchQuery.toLowerCase())>-1
                  console.log(string)
                })
              });
              // console.log(result)
          }else
          {
            this.temp = this.Contactslists
          }
        }
      },
      methods:
      {
        show(key)
        {
          this.IDofkey2=true;
          this.Contacts=this.temp[key]      
        },
        scrollHanle(evt)
        {
      
        },
        hideModal()
        {
          this.open = false;
          this.showmodel=false;
          this.showupdatemodel=false;
          this.showupdateCat=false;
        },
        bycategory(keyword)
        {
          this.temp = this. Contactslists.filter((item) =>
          {
            return Object.keys(item).some((key)=>
            {
                let string = String(item[key]) 
                return string.toLowerCase().indexOf(keyword.toLowerCase())>-1
                console.log(string)
            })
          });

        },
        bycategoryall()
        {
          this.temp = this.Contactslists
        },
        update(key,id)
        {
          this.list=this.temp[key]
          this.Catlist=this.listscat

        },del(key,id){

          if (confirm("Are you sure You want to Delete this Record..?"))
          {    
            axios.delete(`http://localhost/phonebook/${id}`)
            .then((response)=> {this.Contactslists.splice(key,1);this.IDofkey2=false;})
            .catch((error) => this.errors = error.response.data.errors)     
          }
        },updatecat(key)
        {
          alert(key)
          this.listofcat=this.tempcat[key]

        },
        delcat(key,id){

          if (confirm("Are you sure You want to Delete this Record..?"))
          {    
            axios.delete(`${DeleteCatUrl}${id}`)
            .then((response)=> {this.tempcat.splice(key,1);})
            .catch((error) => this.errors = error.response.data.errors)     
          }
        }
        
      }

    }
</script>



<style >
.scroll-area {
  position: relative;
  margin: auto;
  width: inherit;
  height: 500px;
}
</style>