<template>
    <div>
        <div class="card  border-0">
            <div class="card-body">
                <h3 class="my-4">News Details</h3>

                <table class="table table-hover table-borderless">
                    <router-link
                        to="/admin/news"
                        class="mt-4 c-pointer"
                        tag="caption"
                        >View more</router-link
                    >
                    <thead>
                        <tr>
                            <th class="text-muted">NO</th>
                            <th class="text-muted">JUDUL BERITA</th>
                        </tr>
                    </thead>
                </table>
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
