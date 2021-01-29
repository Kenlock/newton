<template>
    <div>
        <div class="card border-0">
            <div class="card-body">
                <h3 class="my-4">Staff Details</h3>

                <b-skeleton-wrapper :loading="loading">
                    <template #loading>
                        <b-skeleton-table
                            :columns="6"
                            :rows="3"
                            animation="throb"
                        ></b-skeleton-table>
                    </template>

                    <table class="table table-borderless table-hover">
                        <router-link
                            to="/admin/staff"
                            tag="caption"
                            class="mt-4 c-pointer"
                            >View more</router-link
                        >
                        <thead>
                            <tr>
                                <th class="text-muted">NO</th>
                                <th class="text-muted">NAMA</th>
                                <th class="text-muted">STATUS</th>
                                <th class="text-muted">TELP</th>
                                <th class="text-muted">EMAIL</th>
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
                                <td>{{ s.nama.toUpperCase() }}</td>
                                <td>{{ s.status }}</td>
                                <td>{{ s.telp }}</td>
                                <td>{{ s.email }}</td>
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
            loading: true,
        };
    },
    mixins: [getDataMixin],
    mounted() {
        this.startLoading();
    },
    methods: {
        async startLoading() {
            this.loading = true;

            const res = await this.getData("staff");

            this.loading = false;
        },
    },

    // #299750
};
</script>

<style></style>
