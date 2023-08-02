import Vue from 'vue';
import VueRouter from 'vue-router';
import Registro from './components/Registro.vue';
import Login from './components/Login.vue';

const routes = [
    { path: '/', component: Registro },
    { path: '/about', component: Login },