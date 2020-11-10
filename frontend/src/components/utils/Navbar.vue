<template>
  <div>
    <!-- navbar  -->

    <b-navbar
      toggleable="lg"
      class="bg-warning"
      :class="{ 'fixed-top': login == false }"
    >
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
              <div v-if="login">
                <button class="btn v-btn-danger text-white" @click="logout()">
                  Log out
                </button>
              </div>
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
  props: ["login"],
  methods: {
    logout() {
      localStorage.removeItem("school-website-login");
      location.reload();
    },
  },
};
</script>

<style></style>
