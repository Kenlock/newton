<template>
    <div>
        <admin-navigation></admin-navigation>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    components: {
        "admin-navigation": () => import("@/components/admin/AdminNavigation"),
    },
};
</script>

<style></style>
