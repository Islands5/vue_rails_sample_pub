import Vue from 'vue';
import TurbolinksAdapter from 'vue-turbolinks';
Vue.use(TurbolinksAdapter)

import App from './app'

document.addEventListener('turbolinks:load', () => {
  var vueapp = new Vue({
    el: "#hello",
    template: '<App/>',
    components: { App }
  });
});
