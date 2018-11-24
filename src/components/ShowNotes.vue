<template>
  <div>
    <div class="peers ai-c jc-sb pX-40 pY-30">
      <div class="peers peer-greed">
        <div class="peer mR-20">
          <img class="bdrs-50p w-3r h-3r" alt="" src="assets/static/images/88.png">
        </div>
        <div class="peer">
          <h3 class="c-grey-900 mB-5">{{Notes.title}}</h3>
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
      <h4>{{Notes.description}} </h4>
      <h4>  <i class="fas fa-calendar-alt"></i> &nbsp; {{Notes.date}} </h4>
      <h4>  <i class="fas fa-clock"></i> &nbsp; {{Notes.time}} </h4>
      <h4>  <i class="fas fa-map-marker-alt"></i> &nbsp; {{Notes.Venue}} </h4>                                                                 
    </div>
  </div>
</template>

<script>
    import{ContactsUrl,NotesUrl,CatogryUrl} from '../config'
    import axios from 'axios';
    export default {
        props:
        {
          Notes:{}
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
