<template>
    <div>
        <sidebar/>
        <div class="page-container">
            <HeaderNav/>
            <main-body/>
            <PageFooter/>
        </div>
    </div> 
</template>

<script>
    import Sidebar from './Sidebar.vue'
    import HeaderNav from './HeaderNav.vue'
    import MainBody from './MainBody.vue'
    import PageFooter from './PageFooter.vue'
    export default {
        name:"DashBoard",
        components:
        {
            Sidebar,
            HeaderNav,
            MainBody,
            PageFooter
        }

    }
</script>

<style>

</style>
