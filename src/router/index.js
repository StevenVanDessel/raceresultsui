import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import RiderDetail from '@/views/RiderDetail.vue'
import RiderService from '@/services/RiderService.js'
import NotFound from '@/views/NotFound.vue'
import NetworkError from '@/views/NetworkError.vue'
import store from '@/store';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/riders/:id",
    name: "RiderDetail",
    component: RiderDetail,
    beforeEnter: to => {
      return RiderService.getRider(to.params.id)
        .then(response => {
          store.rider = response.data
          console.log('Set rider in store: ' + store.rider.id + ',' + store.rider.name)
        })
        .catch(error => {
          if (error.response && error.response.status == 404) {
            return {
              name: '404Resource',
              params: { resource: 'rider' }
            }
          } else {
            return { name: 'NetworkError' }
          }
        })
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetworkError
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
