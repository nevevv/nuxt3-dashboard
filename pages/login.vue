<script>
import Loader from '~~/components/Loader.vue';
import {useMainStore} from '~~/store';

export default {
  setup() {
    definePageMeta({
      layout        : "guest",
      pageTransition: {
        name: 'page'
      },
    });
    const store  = useMainStore();
    const config = useRuntimeConfig();
    return {store, config}
  },
  components: {
    Loader
  },
  data() {
    return {
      loading: false,
      error  : '',
      data   : {
        name    : '',
        password: '',
      }
    }
  },
  methods: {
    async submit() {
      this.loading = true
      await apiRequest('/login', {
        method: 'POST',
        body  : {
          "email"   : this.data.name,
          "password": this.data.password
        },
      }).then(async (response) => {
        if (response.success) {
          this.error = '';
          await navigateTo('/');
        } else {
          this.error = response.message;
        }
      }).catch((error) => {
        this.error = error;
        console.log(error)
      }).finally(() => {
        this.loading = false
      });
    }
  },

}
</script>
<template>
  <div class="login-page">
    <div class="login-page-content">
      <p class="login-page-title">
        COPYRIGHT© AKFA UNIVERSITY ALL RIGHTS RESERVED.
      </p>
      <div class="login" v-if="!loading">
        <form @submit.prevent="submit()" method="post">
          <div class="login__head">
            <div class="login__head-img">
              <img src="@/static/images/logo-icon.png" alt=""/>
              <img src="@/static/images/logo-text.png" alt=""/>
            </div>
          </div>
          <p style="color: #ffffff;">{{ error }}</p>
          <div class="login__form">
            <input type="text" placeholder="ID" v-model="data.name"/>
            <input type="password" placeholder="Password" v-model="data.password"/>
          </div>
          <div class="login__foot">
            <a class="login__foot-forgot">Forgot password?</a>
            <button type="submit" style="cursor: pointer;" class="login__foot-btn">Submit</button>
          </div>
        </form>
      </div>
      <Loader v-else/>
    </div>
  </div>
</template>
<style scoped>
.create-acc {
  color: blue;
  font-size: 1rem;
  cursor: pointer;
}
</style>