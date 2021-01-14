<template>
    <div>
        <!-- panel info -->
        <!-- passing a props of info -->
        <admin-panel :info="info"></admin-panel>

        <!-- main  -->
        <div class="container pt-4">
            <div class="row">
                <div class="col-lg-7">
                    <!-- students report -->
                    <admin-student-report></admin-student-report>
                </div>
                <div class="col-lg-5">
                    <!-- news report -->
                    <admin-news-report></admin-news-report>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from "@/utils/api.js";

export default {
    data() {
        return {
            info: {
                students: "",
                news: "",
            },
        };
    },
    components: {
        "admin-panel": () => import("@/components/admin/AdminPanel"),
        "admin-student-report": () =>
            import("@/components/admin/students/StudentsReport"),
        "admin-news-report": () => import("@/components/admin/news/NewsReport"),
    },
    created() {
        this.getStudents();
        this.getNews();
    },
    methods: {
        async getStudents() {
            const res = await api.get("user");
            this.info.students = res.data.length;
        },
        async getNews() {
            const res = await api.get("news");
            this.info.news = res.data.length;
        },
    },
};
</script>

<style></style>
