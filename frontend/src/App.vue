<template>
    <div id="app">
        <!-- navbar -->
        <!-- <navbar-app></navbar-app> -->

        <!-- main content -->
        <router-view></router-view>

        <!-- footer -->
    </div>
</template>
<script>
export default {
    components: {
        // "navbar-app": () => import("@/components/utils/Navbar"),
        // "footer-app": () => import("@/components/utils/Footer"),
        // "copyright-app": () => import("@/components/utils/Copyright"),
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;1,500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,500&display=swap");

* {
    font-family: "Poppins", sans-serif;
}

.c-pointer {
    cursor: pointer;
}

.v-text-warning {
    color: #ff4b33;
}

.v-bg-warning {
    background-color: #ffbd1d;
}

.v-btn-danger {
    background-color: #ff4b33 !important;
}

.v-btn-outline-danger {
    border: 1px solid #ff4b33;
}

.v-avatar {
    width: 70px;
    height: 70px;
}
</style>
