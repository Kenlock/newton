<template>
  <div class=" bg-light">
    <app-header></app-header>

    <!-- jumbotron -->
    <div class=" jumbotron jumbotron-fluid v-bg-warning">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 d-flex align-items-center">
            <div data-aos="fade-right">
              <div class="display-4 mt-5">
                Discover Power of the
                <span class="v-text-warning font-weight-bold">Knowladge</span>
              </div>
              <div class="mt-4">
                Our focus - modular training programs from <br />
                leading practice lectors.
              </div>
              <div class="mt-5 ">
                <router-link
                  to="/about"
                  class="btn v-btn-danger text-white py-2 px-5"
                  tag="button"
                >
                  About Us
                </router-link>
                <router-link
                  to="/login"
                  class="btn v-btn-danger text-white  py-2 px-5 ml-3"
                  tag="button"
                >
                  Join Us
                </router-link>
              </div>
            </div>
          </div>
          <div class=" col-lg-6 text-center" data-aos="fade-left">
            <img src="@/assets/img/2.png" alt="" class="img-fluid " />
          </div>
        </div>
      </div>
    </div>
    <!-- end jumbotron -->

    <!-- majors section -->
    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="h1 font-weight-bold">
              Our <span class=" v-text-warning">Majors</span>
            </div>
            <div class="text-muted">
              We provide courses that can help students discover their potential
            </div>
          </div>
        </div>
        <div class="row pt-5">
          <div class="col-lg-4 mt-2" data-aos="fade-up">
            <div class="card shadow border-0 rounded-lg h-100">
              <div class="card-body">
                <img src="@/assets/img/ak.png" class="img-fluid w-25" alt="" />
                <h3 class="card-title mt-4">Accounting</h3>
                <p class="text-muted ">
                  We learn recording financial transactions pertaining to a
                  business. The accounting process includes summarizing,
                  analyzing and reporting these transactions to oversight
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
            <div class="card shadow border-0 rounded-lg h-100">
              <div class="card-body">
                <img src="@/assets/img/tkj.png" class="img-fluid w-25" alt="" />
                <h3 class="card-title mt-4">Network Technology</h3>
                <p class="text-muted ">
                  We learn theory of computation, fundamentals of computer
                  science, compliers and operating systems, information theory,
                  basic programming , systems and architecture, software
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
            <div class="card shadow border-0 rounded-lg h-100">
              <div class="card-body">
                <img src="@/assets/img/pm.png" class="img-fluid w-25" alt="" />
                <h3 class="card-title mt-4">Marketing</h3>
                <p class="text-muted ">
                  We learn monitor market trends, create advertising campaigns,
                  develop pricing strategies and targeting strategies based on
                  demographic data and work with the company
                </p>
                <a href="">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end majors section -->

    <!-- achivements section -->
    <section class="pt-5 ">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="h1 font-weight-bold">
              Our <span class="v-text-warning">Achievements</span>
              🏆
            </div>
            <div class="text-muted">
              We've won a lot of competitions, and now it's your turn
            </div>
          </div>
        </div>
        <div class="row pt-5">
          <div class="col-lg-5">
            <div class="card shadow rounded-lg border-0" data-aos="fade-right">
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
                      1st Place at LKS Nasional 2020 IT Software Solution for
                      Business 🥇
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
                      2nd Place at LKS Nasional 2020 Artificial Intelligence 🥈
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
                      Medalion of Excelence at LKS Nasional 2020 Artificial
                      Intelligence 🏅
                    </div>
                  </div>
                </div>
                <div>
                  <a href="">Find More</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <img
              src="@/assets/img/3.png"
              alt=""
              class=" img-fluid  d-sm-none d-md-none  d-lg-block"
              data-aos="fade-left"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- end -->

    <!-- extracurricular section -->
    <section class=" pt-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class=" h1 font-weight-bold">
              Join Our <span class=" v-text-warning">Extracurricular</span>
            </div>
            <div class=" text-muted">
              Join our extracurricular to to practice your skills
            </div>
          </div>
        </div>
        <div class="row pt-5">
          <div class="col-lg-4">
            <div
              class="card border-0 shadow rounded-lg h-100"
              data-aos="fade-up"
            >
              <div class="card-body text-center">
                <img
                  src="@/assets/img/it_software.jpg"
                  alt=""
                  class="img-fluid rounded-lg"
                />
                <h3 class=" card-title mt-3">IT Software</h3>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div
              class="card border-0 shadow rounded-lg h-100"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div class="card-body text-center">
                <img
                  src="@/assets/img/web_tech.jpg"
                  alt=""
                  class="img-fluid rounded-lg"
                />
                <h3 class=" card-title mt-3">Web Technologies</h3>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div
              class="card border-0 shadow rounded-lg h-100"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div class="card-body text-center">
                <img
                  src="@/assets/img/robotics.jpg"
                  alt=""
                  class="img-fluid rounded-lg"
                />
                <h3 class=" card-title mt-3">Robotics</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="row py-5">
          <div class="col-lg-12 text-center">
            <button class="btn v-btn-danger text-white py-2 px-5">
              See More
            </button>
          </div>
        </div>
      </div>
    </section>
    <!-- end -->

    <!-- news section -->
    <section class="pt-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <div class="h1 font-weight-bold">
              What's <span class="v-text-warning">New ?</span>
            </div>
            <div class="text-muted">
              stay updated, read the latest news about us
            </div>
          </div>
        </div>
        <div class="row pt-5">
          <div class="col-lg-4">
            <div
              class="card border-0 shadow rounded-lg h-100"
              data-aos="fade-up"
            >
              <div class="card-body">
                <img
                  src="@/assets/img/a.jpg"
                  alt=""
                  class="img-fluid rounded-lg"
                />
                <h3 class=" card-title mt-3">Internet Marketing</h3>
                <p class="text-muted">
                  A hands-on marketing course for executives and marketes, SMM ,
                  SEO, context and web analytics
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div
              class="card border-0 shadow rounded-lg h-100"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div class="card-body">
                <img
                  src="@/assets/img/b.jpg"
                  alt=""
                  class="img-fluid rounded-lg"
                />
                <h3 class=" card-title mt-3">SEO Marketing</h3>
                <p class="text-muted">
                  A hands-on marketing course for executives and marketes, SMM ,
                  SEO, context and web analytics
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div
              class="card border-0 shadow rounded-lg h-100"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div class="card-body">
                <img
                  src="@/assets/img/c.jpg"
                  alt=""
                  class="img-fluid rounded-lg"
                />
                <h3 class=" card-title mt-3">Practical SMM</h3>
                <p class="text-muted">
                  A hands-on marketing course for executives and marketes, SMM ,
                  SEO, context and web analytics
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row py-5">
          <div class="col-lg-12 text-center">
            <button class="btn v-btn-danger text-white py-2 px-5">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
    <!-- end -->

    <!-- contact us section -->
    <section>
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-lg-12 text-center">
            <div class="h1 font-weight-bold">
              Contact <span class=" v-text-warning">Us</span>
            </div>
            <div class=" text-muted">We would like to here you</div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-lg-12 d-flex justify-content-center">
            <div class=" w-50">
              <div class=" form-group">
                <input
                  type="email"
                  placeholder="email@email.com"
                  class=" form-control "
                />
              </div>
              <div class=" form-group">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  class=" form-control "
                >
Your text here...</textarea
                >
              </div>
              <div class="form-group text-center">
                <button class=" btn v-btn-danger text-white px-5 py-2">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end -->
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    "app-header": () => import("@/components/utils/Navbar"),
  },
};
</script>
