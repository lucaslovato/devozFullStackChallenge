import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

Vue.config.productionTip = false

import HomeComponent from './components/HomeComponent';
import CreateComponent from './components/CreateComponent';
import IndexComponent from './components/IndexComponent';
import EditComponent from './components/EditComponent';

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomeComponent
  },
  {
    name: 'create',
    path: '/create',
    component: CreateComponent
  },
  {
    name: 'posts',
    path: '/posts',
    component: IndexComponent
  },
  {
    name: 'edit',
    path: '/edit',
    component: EditComponent
  }
];

const router = new VueRouter({ mode: 'history', routes: routes})

new Vue(Vue.util.extend({router}, App)).$mount('#app');
