import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.47/vue.esm-browser.min.js';

const baseUrl = 'https://vue3-course-api.hexschool.io/';

const app = {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      const api = `${baseUrl}v2/admin/signin`;
      axios
        .post(api, this.user)
        .then((res) => {
          const { token, expired } = res.data;
          document.cookie = `sportToken=${token}; expires=${expired};`;
          window.location = 'products.html';
        })
        .catch((err) => {
          //   console.log(err);
          alert(err.data.message);
        });
    },
  },
  mounted() {
    //console.log(this.user);
  },
};

createApp(app).mount('#app');
