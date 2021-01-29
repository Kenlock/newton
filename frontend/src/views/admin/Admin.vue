<template>
    <div class="bg-light">
        <app-header :login="true"></app-header>

        <admin-navigation></admin-navigation>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    components: {
        "admin-navigation": () => import("@/components/admin/AdminNavigation"),
        "app-header": () => import("@/components/utils/Navbar"),
    },
};
</script>

<style></style>
