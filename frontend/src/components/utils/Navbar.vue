<template>
    <div>
        <!-- navbar  -->

        <b-navbar
            toggleable="lg"
            class="bg-light-yellow py-4"
            :class="{ 'fixed-top': login == false }"
        >
            <b-container>
                <router-link
                    to="/"
                    class="c-pointer font-weight-bold"
                    tag="b-navbar-brand"
                >
                    <span class="text-purple"
                        >Newton</span
                    ></router-link
                >

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-navbar-nav>
                            <router-link to="/" tag="b-nav-item"
                                >Home</router-link
                            >
                            <router-link to="/about" tag="b-nav-item"
                                >About Us</router-link
                            >
                            <router-link to="/pmb" tag="b-nav-item"
                                >PMB</router-link
                            >
                            <div
                                v-if="
                                    login == false ||
                                        typeof login == 'undefined'
                                "
                            >
                                <router-link to="/login" tag="b-nav-item"
                                    >Login</router-link
                                >
                            </div>
                            <div v-if="login && status == 'siswa'">
                                <router-link to="/student" tag="b-nav-item"
                                    >LMS</router-link
                                >
                            </div>
                            <div v-if="login">
                                <button
                                    class="btn btn-purple text-white"
                                    @click="logout()"
                                >
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
    props: ["login", "status"],
    methods: {
        logout() {
            localStorage.removeItem("school-website-login");
            location.reload();
        },
    },
};
</script>

<style></style>
