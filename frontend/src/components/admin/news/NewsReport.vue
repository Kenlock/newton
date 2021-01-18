<template>
    <div>
        <div class="card shadow-lg">
            <div class="card-header">
                <b class="h5">News Report 🧾</b>
            </div>
            <div class="card-body">
                <ul class=" list-group-flush list-group">
                    <li
                        class=" list-group-item"
                        v-for="n in getReqData"
                        :key="n.id"
                    >
                        {{ n.judul_berita }}
                    </li>
                </ul>
            </div>
            <div class="card-footer text-center">
                <router-link
                    to="/admin/news"
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
    mixins: [getDataMixin],
    mounted() {
        this.getData("news");
    },
};
</script>

<style></style>
