<template>
    <div>
        <app-header :login="loginInfo"></app-header>

        <div class="jumbotron jumbotron-fluid bg-white">
            <div class="container pt-5">
                <div class="row">
                    <div class="col-lg-6" data-aos="fade-right">
                        <div class="h1 font-weight-bold text-purple">
                            Sign In
                        </div>
                        <p class=" text-muted">
                            Join Us In Vocation High School
                        </p>
                        <div class="form-group pt-4">
                            <label for="">Email</label>
                            <input
                                type="email"
                                class=" form-control border-left-0 border-top-0 border-right-0"
                                v-model="loginData.email"
                            />
                        </div>
                        <div class="form-group pt-4">
                            <label for="">Password</label>
                            <input
                                type="password"
                                class=" form-control border-left-0 border-top-0 border-right-0"
                                v-model="loginData.password"
                            />
                        </div>
                        <div class="form-group pt-5 ">
                            <button
                                class=" btn btn-purple text-white col-3"
                                @click="login()"
                            >
                                Sign In
                            </button>
                            <router-link
                                to="/register"
                                tag="button"
                                class=" btn btn-outline-purple col-3 ml-2"
                            >
                                Sign Up
                            </router-link>
                        </div>
                    </div>
                    <div class="col-lg-6" data-aos="fade-left">
                        <img
                            src="@/assets/img/login_banner.jpg"
                            alt=""
                            class="img-fluid rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>

        <app-footer></app-footer>

        <app-copyright></app-copyright>
    </div>
</template>

<script>
import api from "@/utils/api";

export default {
    data() {
        return {
            loginData: {
                email: "",
                password: "",
            },
            loginInfo: false,
        };
    },
    components: {
        "app-header": () => import("@/components/utils/Navbar"),
        "app-footer": () => import("@/components/utils/Footer"),
        "app-copyright": () => import("@/components/utils/Copyright"),
    },
    methods: {
        async login() {
            const res = await api.post("login", this.loginData);
            if (res.data.msg == "Login Success" && res.data.status == "admin") {
                localStorage.setItem(
                    "school-website-login",
                    JSON.stringify(res.data)
                );
                // this.$router.push("/admin");
                location.reload();
            } else if (
                res.data.msg == "Login Success" &&
                res.data.status == "siswa"
            ) {
                localStorage.setItem(
                    "school-website-login",
                    JSON.stringify(res.data)
                );
            }
        },
    },
};
</script>

<style></style>
