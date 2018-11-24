import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Dashboard from './components/DashBoard.vue';
import Phonebook from './components/Phonebook.vue';
import NoteBook from './components/Notebook.vue';
import Login from './components/Login.vue';
import Test from './components/testme.vue';
import Register from './components/Register.vue';
import VueModalTor from 'vue-modaltor';

//globle initialization
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueModalTor);

//router Paths
const routes=[
  {path:'/',component:Login},
  {path:'/home',component:Dashboard,meta:{requiresAuth:true}},
  {path:'/phonebook',component:Phonebook,meta:{requiresAuth:true}},
  {path:'/notebook',component:NoteBook,meta:{requiresAuth:true}},
  {path:'/register',component:Register},
  {path:'/test',component:Test},
];

const router= new VueRouter(
  {
    routes,
    mode:'history'
  });

router.beforeEach((to,from,next)=>
{
  if(to.meta.requiresAuth)
  {
    const authUser=JSON.parse(window.localStorage.getItem('authUser')); 
    if (authUser && authUser.access_token)
    {
      next(); 
    }else{
      next('/');
    }
  }
  next();
}); 

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
