<template>
  <main class='main-content bgc-grey-100'>
    <div id='mainContent'>
      <div class="row gap-20 masonry pos-r">
        <div class="masonry-sizer col-md-6">

        </div>

        <div class="masonry-item  w-100">
          <div class="row gap-20">
            <!-- #Toatl Visits ==================== -->
            <div class='col-md-3'>
              <div class="layers bd bgc-white p-20">
                <div class="layer w-100 mB-10">
                  <h6 class="lh-1">Total Contacts</h6>
                </div>

                <div class="layer w-100">
                  <div class="peers ai-sb fxw-nw">
                    <div class="peer peer-greed">
                      <i class="fas fa-phone-square fa-3x" style="color:black"></i>
                    </div>

                    <div class="peer">
                      <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-green-50 c-green-500">{{Contactslists.length}}</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <!-- #Total Page Views ==================== -->
            <div class='col-md-3'>
              <div class="layers bd bgc-white p-20">
                <div class="layer w-100 mB-10">
                  <h6 class="lh-1">Total Notes</h6>
                </div>

                <div class="layer w-100">
                  <div class="peers ai-sb fxw-nw">
                    <div class="peer peer-greed">
                      <i class="fas fa-sticky-note fa-3x" style="color:black"></i>
                    </div>

                    <div class="peer">
                      <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-red-50 c-red-500">{{Noteslists.length}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- #Unique Visitors ==================== -->
            <div class='col-md-3'>
              <div class="layers bd bgc-white p-20">
                <div class="layer w-100 mB-10">
                  <h6 class="lh-1">Categories</h6>
                </div>

                <div class="layer w-100">
                  <div class="peers ai-sb fxw-nw">
                    <div class="peer peer-greed">
                      <i class="fas fa-user-graduate fa-3x" style="color:black"></i>
                    </div>

                    <div class="peer">
                      <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-purple-50 c-purple-500">{{Contactslists.length}}</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <!-- #Bounce Rate ==================== -->
            <div class='col-md-3'>
              <div class="layers bd bgc-white p-20">
                <div class="layer w-100 mB-10">
                  <h6 class="lh-1">Total Messages</h6>
                </div>

                <div class="layer w-100">
                  <div class="peers ai-sb fxw-nw">
                    <div class="peer peer-greed">
                      <i class="fas fa-comments fa-3x" style="color:black"></i>
                    </div>
                    <div class="peer">
                      <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-blue-50 c-blue-500">33</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
        <div class="masonry-item col-12">
          <!-- #Site Visits ==================== -->
          <div class="bd bgc-white">
            
          </div>
        </div>

        <div class="masonry-item col-md-6">
          <!-- #Monthly Stats ==================== -->
          <div class="bd bgc-white">
            <div class="layers">
              <div class="layer w-100 pX-20 pT-20">
                <h6 class="lh-1">Slide Show</h6>
              </div>
              <div class="layer w-100 p-20">
                <canvas id="line-chart" height="220"></canvas>
              </div>
              <div class="layer bdT p-20 w-100">
                <div class="peers ai-c jc-c gapX-20">
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="masonry-item col-md-6">
          <!-- #Todo ==================== -->
          <div class="bd bgc-white p-20">
            <div class="layers">
              <div class="layer w-100 mB-10">
                <h6 class="lh-1">Services</h6>
              </div>

              <div class="layer w-100">
                <ul class="list-task list-group" data-role="tasklist">
                  <li class="list-group-item bdw-0" data-role="task">
                    <div class="checkbox checkbox-circle checkbox-info peers ai-c">                           
                      <label for="inputCall1" class=" peers peer-greed js-sb ai-c">
                        <span class="peer peer-greed">Call John for Dinner</span>
                      </label>
                    </div>
                  </li>
                  <li class="list-group-item bdw-0" data-role="task">
                    <div class="checkbox checkbox-circle checkbox-info peers ai-c">
                      
                      <label for="inputCall2" class=" peers peer-greed js-sb ai-c">
                        <span class="peer peer-greed">Book Boss Flight</span>
                        <span class="peer">
                          
                        </span>
                      </label>
                    </div>
                  </li>
                  <li class="list-group-item bdw-0" data-role="task">
                    <div class="checkbox checkbox-circle checkbox-info peers ai-c">
                      
                      <label for="inputCall3" class=" peers peer-greed js-sb ai-c">
                        <span class="peer peer-greed">Hit the Gym</span>
                        <span class="peer">
                          
                        </span>
                      </label>
                    </div>
                  </li>
                  <li class="list-group-item bdw-0" data-role="task">
                    <div class="checkbox checkbox-circle checkbox-info peers ai-c">
                      
                      <label for="inputCall4" class=" peers peer-greed js-sb ai-c">
                        <span class="peer peer-greed">Give Purchase Report</span>
                        <span class="peer">
                          
                        </span>
                      </label>
                    </div>
                  </li>
                  <li class="list-group-item bdw-0" data-role="task">
                    <div class="checkbox checkbox-circle checkbox-info peers ai-c">
                      
                      <label for="inputCall5" class=" peers peer-greed js-sb ai-c">
                        <span class="peer peer-greed">Watch Game of Thrones Episode</span>
                        <span class="peer">
                          
                        </span>
                      </label>
                    </div>
                  </li>
                  <li class="list-group-item bdw-0" data-role="task">
                    <div class="checkbox checkbox-circle checkbox-info peers ai-c">
                      <label for="inputCall6" class=" peers peer-greed js-sb ai-c">
                        <span class="peer peer-greed">Give Purchase report</span>
                        <span class="peer">
                        </span>
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import{ContactsUrl,NotesUrl,CatogryUrl} from '../config'
  import axios from 'axios';
  export default {
    Name:"ManiBody",
    data()
    {
      return{
      username:'',
      Contactslists:{},
      Noteslists:{},
      temp:{},
      userobj:'',
      listscat:{},
      tempcat:{}
      }
    },
    mounted()
    {        
      const userobj=JSON.parse(window.localStorage.getItem(('authUser')))
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + userobj.access_token
      axios.get(ContactsUrl)
          .then(response =>
          {
            this.Contactslists = this.temp = response.data
            context.commit('retrieveTodos', response.data)
          })
          .catch(error =>
          {
            //console.log(error)
          });
          axios.get(NotesUrl)
          .then(response =>
          {
            this.Noteslists = response.data
            context.commit('retrieveTodos', response.data)
          })
          .catch(error =>
          {
            //console.log(error)
          });
           axios.get(CatogryUrl)
          .then(response =>
          {
            this.listscat = this.tempcat = response.data
            //context.commit('retrieveTodoscat', response.data)
          })
          .catch(error =>
          {
            //console.log(error)
          })
      },
  }
</script>

<style>

</style>
