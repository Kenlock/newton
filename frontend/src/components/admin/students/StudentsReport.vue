<template>
    <div>
        <div class="card shadow-lg">
            <div class="card-header">
                <b class="h5">All Students Report 📘</b>
            </div>
            <div class="card-body table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th>NISN</th>
                            <th>Nama</th>
                            <th>Kelas</th>
                            <th>Jurusan</th>
                            <th>Aktif</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="s in getReqData" :key="s.id">
                            <td>{{ s.nisn }}</td>
                            <td>{{ s.nama }}</td>
                            <td>{{ s.kelas }}</td>
                            <td>{{ s.jurusan }}</td>
                            <td>
                                <div
                                    v-if="s.aktif === 'y'"
                                    class="badge badge-success"
                                >
                                    Aktif
                                </div>
                                <div v-else class="badge badge-danger">
                                    Tidak Aktif
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="card-footer text-center">
                <router-link
                    to="/admin/student"
                    class="badge badge-primary border-0 py-2 w-25 rounded"
                    >View more</router-link
                >
            </div>
        </div>
    </div>
</template>

<script>
import getDataMixin from "@/utils/getDataMixin";

export default {
    data() {
        return {
            allStudents: [],
            studentsCount: "",
        };
    },
    mixins: [getDataMixin],
    mounted() {
        this.getData("user");
    },
};
</script>

<style></style>
