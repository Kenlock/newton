<template>
    <div class=" bg-light">
        <app-header></app-header>

        <!-- jumbotron -->
        <div class=" jumbotron jumbotron-fluid bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 d-flex align-items-center">
                        <div data-aos="fade-right">
                            <div
                                class="display-4 font-weight-bold mt-5 text-purple"
                            >
                                Discover Power of the Knowladge
                            </div>
                            <div class="mt-4 text-muted">
                                Our focus - modular training programs from
                                <br />
                                leading practice lectors.
                            </div>
                            <div class="mt-5">
                                <router-link
                                    to="/login"
                                    class="btn btn-purple py-3 px-5 "
                                >
                                    Join Us
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class=" col-lg-6 text-center" data-aos="fade-left">
                        <img
                            src="@/assets/img/svg/7 SCENE.svg"
                            class="img-fluid "
                        />
                    </div>
                </div>
            </div>
        </div>
        <!-- end jumbotron -->

        <!-- majors section -->
        <section>
            <div class="py-5 bg-light-yellow">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="h1 font-weight-bold text-purple">
                                Our Majors
                            </div>
                            <div class="text-muted">
                                We provide courses that can help students
                                discover their potential
                            </div>
                        </div>
                    </div>
                    <div class="row py-5">
                        <div class="col-lg-4 mt-2" data-aos="fade-up">
                            <div class="card border-0 rounded-sm h-100">
                                <div class="card-body">
                                    <img
                                        src="@/assets/img/ak.png"
                                        class="img-fluid w-25"
                                        alt=""
                                    />
                                    <h3 class="card-title mt-4">Accounting</h3>
                                    <p class="text-muted ">
                                        We learn recording financial
                                        transactions pertaining to a business.
                                        The accounting process includes
                                        summarizing, analyzing and reporting
                                        these transactions to oversight
                                        agencies.
                                    </p>
                                    <a href="">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div
                            class="col-lg-4 mt-2"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div class="card border-0 rounded-sm h-100">
                                <div class="card-body">
                                    <img
                                        src="@/assets/img/tkj.png"
                                        class="img-fluid w-25"
                                        alt=""
                                    />
                                    <h3 class="card-title mt-4">
                                        Network Technology
                                    </h3>
                                    <p class="text-muted ">
                                        We learn theory of computation,
                                        fundamentals of computer science,
                                        compliers and operating systems,
                                        information theory, basic programming ,
                                        systems and architecture, software
                                        development.
                                    </p>
                                    <a href="">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div
                            class="col-lg-4 mt-2"
                            data-aos="fade-up"
                            data-aos-duration="1500"
                        >
                            <div class="card border-0 rounded-sm h-100">
                                <div class="card-body">
                                    <img
                                        src="@/assets/img/pm.png"
                                        class="img-fluid w-25"
                                        alt=""
                                    />
                                    <h3 class="card-title mt-4">Marketing</h3>
                                    <p class="text-muted ">
                                        We learn monitor market trends, create
                                        advertising campaigns, develop pricing
                                        strategies and targeting strategies
                                        based on demographic data and work with
                                        the company
                                    </p>
                                    <a href="">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end majors section -->

        <!-- achivements section -->
        <section class="py-5 bg-light-blue">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="h1 font-weight-bold text-purple ">
                            Our Achievements 🏆
                        </div>
                        <div class="text-muted">
                            We've won a lot of competitions, and now it's your
                            turn
                        </div>
                    </div>
                </div>
                <div class="row py-5">
                    <div class="col-lg-6">
                        <div
                            class="card rounded-lg border-0"
                            data-aos="fade-right"
                        >
                            <div class="card-body">
                                <div class="d-flex mb-5">
                                    <img
                                        src="@/assets/img/boy.png"
                                        class=" img-fluid  v-avatar"
                                        alt=""
                                    />
                                    <div class="ml-3">
                                        <b>Gavriel Satrio Wijaya</b>
                                        <div>
                                            1st Place at LKS Nasional 2020 IT
                                            Software Solution for Business 🥇
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex mb-5">
                                    <img
                                        src="@/assets/img/boy.png"
                                        class=" img-fluid  v-avatar"
                                        alt=""
                                    />
                                    <div class="ml-3">
                                        <b>Veri & Christian</b>
                                        <div>
                                            2nd Place at LKS Nasional 2020
                                            Artificial Intelligence 🥈
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex mb-5 ">
                                    <img
                                        src="@/assets/img/boy.png"
                                        class=" img-fluid  v-avatar"
                                        alt=""
                                    />
                                    <div class="ml-3">
                                        <b>Erik</b>
                                        <div>
                                            Medalion of Excelence at LKS
                                            Nasional 2020 Web Technologies 🏅
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <img
                            src="@/assets/img/svg/1 SCENE.svg"
                            alt=""
                            class=" img-fluid d-sm-none d-md-none d-lg-block"
                        />
                    </div>
                </div>
                <div class="row pt-3 pb-5">
                    <div class="col-lg-12 text-center">
                        <button class="btn btn-purple py-3 px-5">
                            See More
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <!-- end -->

        <!-- extracurricular section -->
        <section class=" py-5 bg-light-yellow">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class=" h1 font-weight-bold text-purple">
                            Join Our Extracurricular
                        </div>
                        <div class=" text-muted">
                            Join our extracurricular to to practice your skills
                        </div>
                    </div>
                </div>
                <div class="row pt-5">
                    <div class="col-lg-4">
                        <div
                            class="card border-0 rounded-lg h-100"
                            data-aos="fade-up"
                        >
                            <div class="inner">
                                <img
                                    src="@/assets/img/it_software.jpg"
                                    loading="lazy"
                                    class="card-img-top"
                                />
                            </div>
                            <div class="card-body">
                                <h3 class=" card-title mt-4">IT Software</h3>
                                <p class="text-muted">
                                    A hands-on marketing course for executives
                                    and marketes, SMM , SEO, context and web
                                    analytics
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div
                            class="card border-0 rounded-lg h-100"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div class="inner">
                                <img
                                    src="@/assets/img/web_tech.jpg"
                                    loading="lazy"
                                    class="card-img-top"
                                />
                            </div>
                            <div class="card-body ">
                                <h3 class=" card-title">
                                    Web Technologies
                                </h3>
                                <p class="text-muted">
                                    A hands-on marketing course for executives
                                    and marketes, SMM , SEO, context and web
                                    analytics
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div
                            class="card border-0 rounded-lg h-100"
                            data-aos="fade-up"
                            data-aos-duration="1500"
                        >
                            <div class="inner">
                                <img
                                    src="@/assets/img/robotics.jpg"
                                    loading="lazy"
                                    class="card-img-top"
                                />
                            </div>
                            <div class="card-body ">
                                <h3 class=" card-title mt-4">
                                    Mobile Robotics
                                </h3>
                                <p class="text-muted">
                                    A hands-on marketing course for executives
                                    and marketes, SMM , SEO, context and web
                                    analytics
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row py-5">
                    <div class="col-lg-12 text-center">
                        <button class="btn btn-purple text-white py-3 px-5">
                            See More
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <!-- end -->

        <!-- news section -->
        <section class="py-5 bg-light-blue">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center pb-3">
                        <div class="h1 font-weight-bold text-purple">
                            What's New ?
                        </div>
                        <div class="text-muted">
                            stay updated, read the latest news about us
                        </div>
                    </div>
                </div>
                <div class="row py-5">
                    <div class="col-lg-4">
                        <div
                            class="card border-0 rounded-lg h-100"
                            data-aos="fade-up"
                        >
                            <div class="inner">
                                <img
                                    src="@/assets/img/a.jpg"
                                    loading="lazy"
                                    class="card-img-top"
                                />
                            </div>
                            <div class="card-body">
                                <h3 class=" card-title mt-3">
                                    Internet Marketing
                                </h3>
                                <p class="text-muted">
                                    A hands-on marketing course for executives
                                    and marketes, SMM , SEO, context and web
                                    analytics
                                </p>
                                <a href="">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div
                            class="card border-0 rounded-lg h-100"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div class="inner">
                                <img
                                    src="@/assets/img/b.jpg"
                                    loading="lazy"
                                    class="card-img-top"
                                />
                            </div>
                            <div class="card-body">
                                <h3 class=" card-title mt-3">SEO Marketing</h3>
                                <p class="text-muted">
                                    A hands-on marketing course for executives
                                    and marketes, SMM , SEO, context and web
                                    analytics
                                </p>
                                <a href="">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div
                            class="card border-0 rounded-lg h-100"
                            data-aos="fade-up"
                            data-aos-duration="1500"
                        >
                            <div class="inner">
                                <img
                                    src="@/assets/img/c.jpg"
                                    loading="lazy"
                                    class="card-img-top"
                                />
                            </div>
                            <div class="card-body">
                                <h3 class=" card-title mt-3">Practical SMM</h3>
                                <p class="text-muted">
                                    A hands-on marketing course for executives
                                    and marketes, SMM , SEO, context and web
                                    analytics
                                </p>
                                <a href="">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row pt-3 pb-5">
                    <div class="col-lg-12 text-center">
                        <button class="btn btn-purple text-white py-3 px-5">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <!-- end -->

        <!-- contact us section -->
        <section class=" py-5">
            <div class="container mt-5">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <div class=" h1 font-weight-bold text-purple">
                            Contact Us
                        </div>
                    </div>
                </div>
                <div class="row py-5">
                    <div class="col-lg-6">
                        <img
                            src="@/assets/img/svg/4 SCENE.svg"
                            class=" img-fluid"
                        />
                    </div>
                    <div class="col-lg-6">
                        <div class=" font-weight-bold text-purple">
                            Feel free to contact us
                        </div>
                        <div class="mt-3">
                            <input
                                type="text"
                                class="form-control mb-2"
                                placeholder="name"
                            />
                            <input
                                type="email"
                                class="form-control mb-2"
                                placeholder="email"
                            />
                            <textarea rows="5" class=" form-control mb-2">
                                Your text</textarea
                            >
                            <button class="btn btn-purple text-white py-3 px-5">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end -->

        <app-footer></app-footer>

        <app-copyright></app-copyright>
    </div>
</template>

<script>
export default {
    name: "Home",
    components: {
        "app-header": () => import("@/components/utils/Navbar"),
        "app-footer": () => import("@/components/utils/Footer"),
        "app-copyright": () => import("@/components/utils/Copyright"),
    },
};
</script>
