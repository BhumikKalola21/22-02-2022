import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';


import BaseModal from './components/BaseModal.vue';
import UserList from './components/UsersList.vue';
import AllUsers from './components/pages/AllUsers.vue';
import CourseGoals from './components/pages/CourseGoals.vue'
const app = createApp(App);
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: AllUsers },
        { path: '/goals', component: CourseGoals },
    ]
});
app.use(router)

app.component('base-modal', BaseModal);
app.component('user-list', UserList);
app.component('all-users', AllUsers);
app.component('course-goals', CourseGoals);

app.mount('#app');
