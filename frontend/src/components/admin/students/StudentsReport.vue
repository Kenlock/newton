<template>
    <div>
        <div class="card shadow border-0">
            <div class="card-body">
                <h3 class="my-4">Students Details</h3>

                <b-skeleton-wrapper :loading="loading">
                    <template #loading>
                        <b-skeleton-table
                            columns="6"
                            rows="3"
                        ></b-skeleton-table>
                    </template>

                    <table class="table table-borderless table-hover">
                        <router-link
                            to="/admin/student"
                            tag="caption"
                            class="mt-4 c-pointer"
                            >View more</router-link
                        >
                        <thead>
                            <tr>
                                <th class="text-muted">NO</th>
                                <th class="text-muted">NISN</th>
                                <th class="text-muted">NAMA</th>
                                <th class="text-muted">KELAS</th>
                                <th class="text-muted">JURUSAN</th>
                                <th class="text-muted">AKTIF</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr
                                v-for="(s, index) in getReqData"
                                :key="s.id"
                                class="c-pointer"
                            >
                                <td>
                                    <div
                                        class="bg-grey-400 rounded text-center"
                                    >
                                        {{ (index += 1) }}
                                    </div>
                                </td>
                                <td>{{ s.nisn }}</td>
                                <td>{{ s.nama }}</td>
                                <td>{{ s.kelas }}</td>
                                <td>{{ s.jurusan }}</td>
                                <td>
                                    <div
                                        v-if="s.aktif === 'y'"
                                        class="badge badge-success p-2"
                                    >
                                        Aktif
                                        <!-- <div class="text-dark">Aktif</div> -->
                                    </div>
                                    <div v-else class="badge badge-danger p-2">
                                        Tidak Aktif
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </b-skeleton-wrapper>
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
            loading: false,
            loadingTime: 0,
            maxLoadingTime: 2,
        };
    },
    mixins: [getDataMixin],
    created() {
        this.$_loadingTimeInterval = null;
    },
    watch: {
        loading(newValue, oldValue) {
            if (newValue !== oldValue) {
                this.clearLoadingTimeInterval();

                if (newValue) {
                    this.$_loadingTimeInterval = setInterval(() => {
                        this.loadingTime++;
                    }, 1000);
                }
            }
        },
        loadingTime(newValue, oldValue) {
            if (newValue !== oldValue) {
                if (newValue === this.maxLoadingTime) {
                    this.loading = false;
                }
            }
        },
    },
    mounted() {
        this.startLoading();
        this.getData("user");
    },
    methods: {
        startLoading() {
            this.loading = true;
            this.loadingTime = 0;
        },
        clearLoadingTimeInterval() {
            clearInterval(this.$_loadingTimeInterval);
            this.$_loadingTimeInterval = null;
        },
    },
};
</script>

<style></style>
