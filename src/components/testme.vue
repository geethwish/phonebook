<template>
  <VuePerfectScrollbar class="scroll-area" v-once :settings="settings" @ps-scroll-y="scrollHanle">
   <p>
npm install sass-loader node-sass webpack --save-dev
The sass-loader requires webpack as a peerDependency and it requires you to install either Node Sass or Dart Sass on your own. This allows you to control the versions of all your dependencies, and to choose which Sass implementation to use.
Examples
   </p>
  </VuePerfectScrollbar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
    name:"testme",
    components: {
    VuePerfectScrollbar
  },
  data() {
    return {
      settings: {
        maxScrollbarLength: 60
      }
    }
  },  methods: {
    scrollHanle(evt) {
      console.log(evt)
    }
  }


}
</script>

