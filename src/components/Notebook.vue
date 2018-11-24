<template>
<div>
    <sidebar/>
    <div class="page-container">
        <HeaderNav/>
        <NotebookBody/>
        <PageFooter/>
    </div>
</div>
    
</template>

<script>
import Sidebar from './Sidebar.vue'
import HeaderNav from './HeaderNav.vue'
import PageFooter from './PageFooter.vue'
import NotebookBody from './NotebookBody.vue'
export default {
    name:"Notebook",
    components:
    {
        Sidebar,HeaderNav,PageFooter,NotebookBody
    }


}
</script>

<style>

</style>
