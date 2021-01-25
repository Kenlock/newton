<template>
    <div>
        <app-header></app-header>

        <div class="jumbotron jumbotron-fluid bg-white">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12" data-aos="fade-right">
                        <div class=" h2 mt-5">
                            We are on mission to
                            <span class=" text-danger font-weight-bold"
                                >provide</span
                            >
                            a premier educational experience customized to needs
                            of each
                            <span class=" text-danger font-weight-bold"
                                >student</span
                            >.
                        </div>
                    </div>
                </div>
                <div class="row pt-5">
                    <div
                        class="col-lg-12"
                        data-aos="fade-right"
                        data-aos-animation="1000"
                    >
                        <div class="card border-0 shadow bg-light">
                            <div class="card-body">
                                <h3 class=" font-weight-bold">
                                    Our
                                    <span class=" text-danger">Mission</span>
                                </h3>
                                <p class=" text-muted">
                                    Vocational High School is on mission to
                                    provid apremier educational experience
                                    customized to the need of each student. We
                                    do this by providing parents with a choise
                                    of the best educators, sourced from elite
                                    private,public, and charter-schools, to
                                    teach theri childeren. The instruction
                                    occurs in parent's homes or at a secure and
                                    accessible location - such as community
                                    center or chruch. Each class utilizes the
                                    unique network of students,teachers,and
                                    parents, to work together to create a word
                                    class educational for each child.
                                </p>
                                <p class=" text-muted">
                                    We provide support for every type of
                                    curriculum and certified learning method. We
                                    work with families to help them find what
                                    methods best suits them,wheater that's a
                                    Montessori approach,project-based learning,
                                    or STEM,and then works to implement that
                                    curriculum with our incredible teachers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row pt-5">
                    <div
                        class="col-lg-12"
                        data-aos="fade-right"
                        data-aos-animation="1000"
                    >
                        <div class="card border-0 shadow bg-light">
                            <div class="card-body">
                                <h3 class=" font-weight-bold">
                                    Our
                                    <span class=" text-danger">Values</span>
                                </h3>
                                <p class=" text-muted">
                                    We are going to connect students and
                                    famillies with great teachers. We belive
                                    that behind every get
                                    <span class=" text-danger"> "aha" </span
                                    >moment, light-blub going off, or profound
                                    realization, there is a teacher. Our
                                    teacher's job is to bring forth that spark
                                    in each of our students.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" row pt-5">
                    <div class="col-lg-12 text-center">
                        <router-link
                            to="/login"
                            tag="button"
                            class="btn v-btn-danger text-white py-2 px-5"
                        >
                            Join Us Now
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <app-footer></app-footer>

        <app-copyright></app-copyright>
    </div>
</template>

<script>
export default {
    name: "About",
    components: {
        "app-header": () => import("@/components/utils/Navbar"),
        "app-footer": () => import("@/components/utils/Footer"),
        "app-copyright": () => import("@/components/utils/Copyright"),
    },
};
</script>

<style></style>
