<template>
    <div>
        <div class="jumbotron jumbotron-fluid bg-white">
            <div class="container pt-5">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="h1 font-weight-bold " data-aos="fade-right">
                            Learning Management System
                        </div>
                    </div>
                </div>
                <div class="row pt-5">
                    <div class="col-lg-6">
                        <div
                            class="card border-0 rouned-lg shadow"
                            data-aos="fade-right"
                        >
                            <div class="card-body">
                                <div class="h3 font-weight-bold">Prorfile</div>
                                <p class="text-muted">
                                    You can edit your profie here.
                                </p>
                            </div>
                            <ul class=" list-group list-group-flush ">
                                <li class=" list-group-item">
                                    <img src="@/assets/img/girl.png" alt="" />
                                </li>
                                <li class=" list-group-item">
                                    Sana Minatozaki
                                </li>
                                <li class=" list-group-item">12 TKJ 1</li>
                                <li class=" list-group-item">
                                    <button
                                        class="btn v-btn-danger col-3 text-light"
                                    >
                                        Edit Profile
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card border-0 shadow" data-aos="fade-left">
                            <div class="card-body">
                                <div class="h3 font-weight-bold">
                                    School Material
                                </div>
                                <p class="text-muted">
                                    Find your school material here.
                                </p>
                                <div class="form-group d-flex">
                                    <select name="" id="" class=" form-control">
                                        <option value="">All</option>
                                        <option value=""
                                            >Advance Programing</option
                                        >
                                        <option value=""
                                            >Network System
                                            Administration</option
                                        >
                                        <option value=""
                                            >Administration of Network
                                            Infrastructure</option
                                        >
                                    </select>
                                    <button
                                        class="btn v-btn-danger ml-2 text-white"
                                    >
                                        Search
                                    </button>
                                </div>
                                <hr class="my-4" />
                                <div class=" d-flex mb-3 c-pointer">
                                    <div>
                                        <img
                                            src="@/assets/img/ak.png"
                                            alt=""
                                            class="w-50"
                                        />
                                    </div>
                                    <div class="mr-auto">
                                        <b>Advance Programing</b>
                                        <p class=" text-muted">
                                            This is the material for next 2
                                            weeks
                                        </p>
                                    </div>
                                </div>
                                <div class=" d-flex mb-3 c-pointer">
                                    <div>
                                        <img
                                            src="@/assets/img/tkj.png"
                                            alt=""
                                            class="w-50"
                                        />
                                    </div>
                                    <div class="mr-auto">
                                        <b>Network System Administration</b>
                                        <p class=" text-muted">
                                            This is the material for next 2
                                            weeks
                                        </p>
                                    </div>
                                </div>
                                <div class=" d-flex mb-3 c-pointer">
                                    <div>
                                        <img
                                            src="@/assets/img/pm.png"
                                            alt=""
                                            class="w-50"
                                        />
                                    </div>
                                    <div class="mr-auto">
                                        <b>Network System Administration</b>
                                        <p class=" text-muted">
                                            This is the material for next 2
                                            weeks
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        class=" btn v-btn-danger text-white col-3"
                                    >
                                        See More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
