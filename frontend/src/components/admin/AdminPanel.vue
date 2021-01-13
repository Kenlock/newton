<template>
    <div>
        <div class="container pt-3  ">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card shadow-lg border-0">
                        <div class="card-header py-4">
                            <b class="h5"
                                >All Immanuel Vocational High School Performance
                                Report 📊</b
                            >
                        </div>
                        <div class="card-body row">
                            <div class="col-4 text-center">
                                <div class="text-muted h5">Jumlah Siswa</div>
                                <!-- props from Admin.vue -->
                                <h1 class="card-title text-success">
                                    {{ studentsAmount }}
                                </h1>
                            </div>
                            <div class="col-4  text-center">
                                <div class="text-muted  h5">Jumlah Ekskul</div>
                                <h1 class="card-title text-primary">4</h1>
                            </div>
                            <div class="col-4  text-center">
                                <div class="text-muted  h5">Jumlah Berita</div>
                                <h1 class="card-title text-info">
                                    {{ newsAmount }}
                                </h1>
                            </div>
                        </div>
                        <div class="card-footer text-center">
                            <button
                                class="badge badge-primary border-0 py-2 w-25 rounded"
                            >
                                View more report
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["studentsAmount", "newsAmount"],
    data() {
        return {};
    },
    methods: {
        listenToEvent(e) {
            console.log(e);
        },
    },
};
</script>

<style></style>
