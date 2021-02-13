<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <div class="card  border-0 rounded">
                    <div class="card-body">
                        <h4 class="card-title mt-2 mb-4">Students</h4>
                        <div class="d-flex">
                            <b-icon
                                icon="people"
                                font-scale="3"
                                variant="primary"
                            ></b-icon>
                            <div class="ml-4">
                                <h1>{{ info.students }}</h1>
                            </div>
                        </div>
                        <div class="mt-3">
                            <router-link
                                to="admin/students"
                                class="text-decoration-none text-muted"
                                >show more</router-link
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card  border-0 rounded">
                    <div class="card-body">
                        <h4 class="card-title mt-2 mb-4">Staff</h4>
                        <div class="d-flex ">
                            <b-icon
                                icon="people-fill"
                                font-scale="3"
                                variant="primary"
                            ></b-icon>
                            <div class="ml-4">
                                <h1>{{ info.staff }}</h1>
                            </div>
                        </div>
                        <div class="mt-3">
                            <router-link
                                to="admin/students"
                                class="text-decoration-none text-muted"
                                >show more</router-link
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card  border-0 rounded">
                    <div class="card-body">
                        <h4 class="card-title mt-2 mb-4">News</h4>
                        <div class="d-flex ">
                            <b-icon
                                icon="newspaper"
                                font-scale="3"
                                variant="primary"
                            ></b-icon>
                            <div class="ml-4">
                                <h1>{{ info.news }}</h1>
                            </div>
                        </div>
                        <div class="mt-3">
                            <router-link
                                to="admin/news"
                                class="text-decoration-none text-muted"
                                >show more</router-link
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["info"],
};
</script>

<style></style>
