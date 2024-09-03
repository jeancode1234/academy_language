import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '@/components/HomeComponent.vue'
import slideComponent from '@/components/slideComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import LoginComponent from '@/components/auth/LoginComponent.vue'
import RegisterComponent from '@/components/auth/RegisterComponent.vue'
import NavBarComponent from '@/components/NavBarComponent.vue'



const routes = [
  {
    path:'/',
    component:NavBarComponent,
    children:[
      {
        path: '/',
        components:{
          default:NavBarComponent,
          one:HomeComponent,
        }
      },
        
         
    ]
},

  {
    path: '/slide',
    name: 'cardslide',
    component: slideComponent
  },
  {
    path: '/footer',
    name: 'footer',
    component: FooterComponent
  },
  {
    path: '/login',
    name: 'LoginForm',
    component: LoginComponent
  },
  {
    path: '/register',
    name: 'RegisterForm',
    component: RegisterComponent
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// router.beforeEach((to, from, next)=>{
//   if(to.matched[0].name == 'admin'){
//     this.$router.push('/dashboard')
//   }
//   next()
// })
export default router
