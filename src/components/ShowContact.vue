<template>
  <div>
    <div class="peers ai-c jc-sb pX-40 pY-30">
      <div class="peers peer-greed">
        <div class="peer mR-20">
          <img class="bdrs-50p w-3r h-3r" alt="" src="https://randomuser.me/api/portraits/men/11.jpg">
        </div>
        <div class="peer">
          <h3 class="c-grey-900 mB-5">{{Contacts.name}}</h3>
        </div>
      </div>
      <div class="peer">
        <a href="" class="btn btn-danger bdrs-50p p-15 lh-0">
          <i class="fa fa-reply"></i>
        </a>
      </div>
    </div>

    <!-- Content -->
    <div class="bdT pX-40 pY-30">
      <h4>  <i class="fas fa-envelope"></i> &nbsp; {{Contacts.email}} </h4>
      <h4>  <i class="fas fa-phone-square"></i> &nbsp; {{Contacts.phone}} </h4>
      <h4>  <i class="fas fa-users"></i> &nbsp; {{Contacts.cat}} </h4>
      <h4>  <i class="fas fa-building"></i> &nbsp; {{Contacts.compny}} </h4>
      <h4>  <i class="fas fa-home"></i> &nbsp; {{Contacts.address}} </h4>                                                                    
    </div>
  </div>
</template>

<script>
  import{ContactsUrl,NotesUrl,CatogryUrl} from '../config'
  import axios from 'axios';
    export default {
        props:
        {
          Contacts:{}
        },
        data()
        {
          return{
              
            errors:{},
            temp:'',
            userobj:'',
            
          }

        },

    }
</script>

<style>

</style>
