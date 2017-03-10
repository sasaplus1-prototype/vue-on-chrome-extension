export default {

  data() {
    return {
      title: 'Hello!',
    };
  },

  computed: {
    getTitleByComputed() {
      return `${this.title} ${(new Date).toUTCString()} get from computed`;
    },
  },

  methods: {
    getTitleByMethods() {
      return `${this.title} ${(new Date).toUTCString()} get from methods`;
    },
  },

};
