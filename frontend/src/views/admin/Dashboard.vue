<template>
    <div>
        <!-- panel info -->
        <admin-panel :infoData="info"></admin-panel>

        <!-- main  -->
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
import api from "@/utils/api.js";

export default {
    data() {
        return {
            info: {
                students: "",
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
    },
    methods: {
        async getStudents() {
            const res = await api.get("user");
            this.info.students = res.data.length;
        },
    },
};
</script>

<style></style>
