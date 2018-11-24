<template>
  <main class='main-content bgc-grey-100'>
    <div id='mainContent'>
      <div class="full-container">
        <div class="email-app">
          <div class="email-side-nav remain-height ov-h">
            <div class="h-100 layers">
              <div class="p-20 bgc-grey-100 layer w-100">
                <a @click="open = true;" style="color:white" class="btn btn-danger btn-block">New Note&nbsp;<i class="fas fa-plus"></i> </a>
              </div>
              <div class="scrollable pos-r bdT layer w-100 fxg-1">
                <ul class="p-20 nav flex-column">
                  <li class="nav-item">
                    <a href="" class="nav-link c-grey-800 cH-blue-500">
                      <div class="peers ai-c jc-sb">
                        <div class="peer peer-greed">
                          
                          <span>Only I can change my life. No one can do it for me</span>
                        </div>
                        <div class="peer">
                          <span class="badge badge-pill bgc-red-50 c-red-700">+99</span>
                        </div>
                      </div>
                    </a>
                  </li>
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
                    <h5>Note Boook <i class="fas fa-sticky-note"></i></h5>
                  </div>
                </div>
              </div>
            </div>

          <div class="layer w-100">
            <div class="bdT bdB">
              <input type="text" class="form-control m-0 bdw-0 pY-15 pX-20" placeholder="Search..." v-model="searchQuery">
            </div>
          </div>

            <div class="layer w-100 fxg-1 scrollable pos-r">
              <VuePerfectScrollbar  class="scroll-area" v-bind:settings="settings" @ps-scroll-y="scrollHanle">
                <div class="">
                  <div v-if="temp==''">
                    <H1>No Result Found</H1>
                  </div>

                  <div v-else>
                    <div class="email-list-item peers fxw-nw p-20 bdB bgcH-grey-100 cur-p" v-for="item,key in temp" >
                      <div class="peer mR-10">
                        <div class="checkbox checkbox-circle checkbox-info peers ai-c">
                          <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" class="peer">
                          <label for="inputCall1" class=" peers peer-greed js-sb ai-c"></label>
                        </div>
                      </div>
                      <div class="peer peer-greed ov-h" @click="show(key)">
                        <div class="peers ai-c">
                          <div class="peer peer-greed">
                            <h6>{{item.title}}</h6>
                          </div>
                          <div class="peer">
                            <small>{{item.date}}</small>
                          </div>
                        </div>
                        <span class="whs-nw w-100 ov-h tov-e d-b">{{item.description}} </span>
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
                    <show-notes v-bind="{Notes}" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <vue-modaltor  :visible="open" @hide="hideModal">
    <NewNote/>
  </vue-modaltor>

  <vue-modaltor  :visible="showupdatemodel" @hide="hideModal" >
    <UpdateNote v-bind="{list}"/>
  </vue-modaltor>

  </main>
</template>

<script>
    import axios from 'axios';
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import{NotesUrl,CatogryUrl,DeleteNoteUrl} from '../config'
    import ShowNotes from './ShowNotes.vue'
    import NewNote from './NewNote.vue'
    import UpdateNote from './UpdateNote.vue'
    export default {
      name:"NotebookBody",
      components:
      {
        ShowNotes,
        VuePerfectScrollbar,
        NewNote,
        UpdateNote
      
      },
      data()
      {
        return{
          lists:{},
          errors:{},
          updateActive : '',
          loading:false,
          searchQuery:'',
          temp:'',
          settings:{maxScrollbarLength: 100},
          IDofkey2:'',
          Notes:'',
          open: false,	
          showupdatemodel:false,
          list:'',			
        }
      },
      watch:
      {
        searchQuery()
        {
          if (this.searchQuery.length > 0)
          {
              this.temp = this.lists.filter((item) =>
              {
                  return Object.keys(item).some((key)=>
                  {
                    let string = String(item[key]) 
                    return string.toLowerCase().indexOf(this.searchQuery.toLowerCase())>-1
                    // console.log(string)
                  })
              });
              // console.log(result)
          }else
          {
            this.temp = this.lists
          }
        }
      },
      mounted()
      {
        this.IDofkey2=false;
        const userobj=JSON.parse(window.localStorage.getItem(('authUser')))
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + userobj.access_token
        axios.get(NotesUrl)
        .then(response =>
        {
          this.lists = this.temp = response.data
          context.commit('retrieveTodos', response.data)
        })
        .catch(error =>
        {
          //console.log(error)
        })
      },
      methods:
      {
        scrollHanle(evt)
        {
      
        },
        hideModal()
        {
          this.open = false;
          this.showmodel=false;
          this.showupdatemodel=false;
        },
        show(key){
          this.IDofkey2=true;
          this.Notes=this.temp[key]      
        },
        update(key,id)
        {
          this.list=this.temp[key]
        },
        del(key,id)
        {
          if (confirm("Are you sure ?"))
            {
              //alert(`${DeleteNoteUrl}/${id}`) 
              axios.delete(`${DeleteNoteUrl}/${id}`)
              .then((response)=> {this.lists.splice(key,1);this.IDofkey2=false;})
              .catch((error) => this.errors = error.response.data.errors)	
            }
            //console.log(`${key} ${id}`)
        },

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
