<template>
  <div>
    <!-- navbar  -->
    <b-navbar toggleable="lg" class="bg-warning fixed-top">
      <b-container>
        <router-link
          to="/"
          class="c-pointer font-weight-bold"
          tag="b-navbar-brand"
        >
          <span class="v-text-warning"
            >Vocational High School</span
          ></router-link
        >

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav>
              <router-link to="/" tag="b-nav-item">Home</router-link>
              <router-link to="/about" tag="b-nav-item">About Us</router-link>
              <router-link to="/login" tag="b-nav-item">Login</router-link>
              <router-link to="/student" tag="b-nav-item">LMS</router-link>
              <button class="btn v-btn-danger text-white" @click="logout()">
                Log out
              </button>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <!-- end navbar  -->
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem("school-website-login");
    },
  },
};
</script>

<style></style>
