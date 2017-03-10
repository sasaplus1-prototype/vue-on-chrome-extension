import Vue from 'vue';

import App from './components/app/app.vue';

new Vue({
  el: '#app',
  render(createElement) {
    return createElement(App);
  },
});
