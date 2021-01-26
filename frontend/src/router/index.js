import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

let ls = JSON.parse(localStorage.getItem("school-website-login"));

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/views/Home"),
    },
    {
        path: "/pmb",
        name: "pmb",
        component: () => import("@/views/pmb/Pmb"),
    },
    {
        path: "/about",
        name: "About",
        component: () => import("@/views/About"),
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("@/views/Login"),
        beforeEnter: (to, from, next) => {
            if (ls == null) {
                next();
            } else {
                if (ls.msg == "Login Success") {
                    if (ls.status == "admin") {
                        next("/admin/dashboard");
                    } else if (ls.status == "siswa") {
                        next("/student");
                    }
                }
            }
        },
    },
    {
        path: "/register",
        name: "Register",
        component: () => import("@/views/Register"),
        beforeEnter: (to, from, next) => {
            if (ls == null) {
                next();
            } else {
                if (ls.msg == "Login Success") {
                    if (ls.status == "admin") {
                        next("/admin/dashboard");
                    } else if (ls.status == "siswa") {
                        next("/student");
                    }
                }
            }
        },
    },
    {
        path: "/admin",
        name: "Admin",
        component: () => import("@/views/admin/Admin"),
        beforeEnter: (to, from, next) => {
            if (ls == null) {
                next("/login");
            } else {
                if (ls.msg == "Login Success" && ls.status == "admin") {
                    next();
                }
            }
        },
        children: [
            {
                path: "dashboard",
                name: "Dashboard",
                component: () => import("@/views/admin/Dashboard"),
            },
            {
                path: "student",
                name: "Student",
                component: () => import("@/views/admin/student/Student"),
            },
            {
                path: "news",
                name: "News",
                component: () => import("@/views/admin/news/News"),
            },
            {
                path: "pmb",
                name: "PMB",
                component: () => import("@/views/admin/pmb/Pmb"),
            },
            {
                path: "staff",
                name: "Staff",
                component: () => import("@/views/admin/staff/Staff"),
            },
            {
                path: "major",
                name: "Major",
                component: () => import("@/views/admin/major/Major"),
            },
        ],
    },
    {
        path: "/student",
        name: "client",
        component: () => import("@/views/student/Student"),
        beforeEnter: (to, from, next) => {
            if (ls == null) {
                next("/login");
            } else {
                if (ls.msg == "Login Success" && ls.status == "siswa") {
                    next();
                }
            }
        },
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
