<template>
    <div>
        <!-- <app-header :login="true"></app-header> -->

        <!-- <admin-dashboard></admin-dashboard> -->

        <div class="container" :class="{ 'd-none': isAdd }">
            <div class="row">
                <div class="col-lg-12">
                    <button
                        class="btn v-btn-danger text-white"
                        @click="isAdd = true"
                    >
                        Add Students
                    </button>
                </div>
            </div>
        </div>
        <div class="container d-none" :class="{ 'd-block': isAdd }">
            <div class="row">
                <div class="col-lg-12">
                    <div class=" form-row">
                        <div class="col">
                            <label for="">NISN</label>
                            <input type="text" class=" form-control" />
                        </div>
                        <div class="col">
                            <label for="">Nama</label>
                            <input type="text" class=" form-control" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container pt-3" :class="{ 'd-none': isAdd }">
            <div class="row">
                <div class="col-lg-12">
                    <div class=" table-responsive">
                        <table class=" table">
                            <thead>
                                <tr>
                                    <th>NISN</th>
                                    <th>Nama</th>
                                    <th>Kelas</th>
                                    <th>Jurusan</th>
                                    <th colspan="2" class="text-center">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="s in studentData" :key="s.id">
                                    <td>{{ s.nisn }}</td>
                                    <td>{{ s.nama }}</td>
                                    <td>{{ s.kelas }}</td>
                                    <td>{{ s.jurusan }}</td>
                                    <td>
                                        <button class="btn btn-warning">
                                            Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button class="btn btn-danger">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from "@/utils/api";

export default {
    components: {
        // "app-header": () => import("@/components/utils/Navbar"),
        // "admin-dashboard": () => import("@/components/admin/AdminDashboard"),
    },
    data() {
        return {
            studentData: "",
            isAdd: false,
        };
    },
    mounted() {
        this.getStudents();
    },
    methods: {
        async getStudents() {
            const res = await api.get("user");
            this.studentData = res.data;
        },
    },
};
</script>

<style></style>
