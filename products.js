import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.47/vue.esm-browser.min.js';

const baseUrl = 'https://vue3-course-api.hexschool.io';
const path = 'sport-course';

const app = {
  data() {
    return {
      products: [],
      tempProduct: {},
    };
  },
  methods: {
    checkAdmin() {
      const apiPath = `${baseUrl}/api/user/check`;
      axios
        .post(apiPath)
        .then(() => {
          this.getProducts();
        })
        .catch((err) => {
          alert(err.response.data.message);
          window.location = 'login.html';
        });
    },
    getProducts() {
      const apiPath = `${baseUrl}/v2/api/${path}/admin/products`;
      axios
        .get(apiPath)
        .then((res) => {
          console.log(res.data.products);
          this.products = res.data.products;
          //   console.log(this.products);
        })
        .catch((err) => {
          //   alert(err.response.data.message);
        });
    },
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)sportToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    axios.defaults.headers.common['Authorization'] = token;
    this.checkAdmin();
  },
};

createApp(app).mount('#app');
