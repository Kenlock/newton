<template>
    <div>
        <!-- panel -->
        <admin-panel></admin-panel>

        <!--  -->
        <div class="container pt-4">
            <div class="row">
                <div class="col-lg-7">
                    <admin-student-report></admin-student-report>
                </div>
                <div class="col-lg-5">
                    <admin-news-report></admin-news-report>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        "admin-panel": () => import("@/components/admin/AdminPanel"),
        "admin-student-report": () =>
            import("@/components/admin/students/StudentsReport"),
        "admin-news-report": () => import("@/components/admin/news/NewsReport"),
    },
};
</script>

<style></style>
