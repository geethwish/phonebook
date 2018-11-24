<template>
    <div>
        <sidebar/>
        <div class="page-container">
            <HeaderNav/>
            <PhonebookBody/>
            <PageFooter/>
        </div>
    </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import HeaderNav from './HeaderNav.vue'
import PageFooter from './PageFooter.vue'
import PhonebookBody from './Phonebookbody.vue'
export default {
    name:"Phonebook",
    components:
    {
        Sidebar,HeaderNav,PageFooter,PhonebookBody
    }


}
</script>

<style>

</style>
