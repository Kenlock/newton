<template>
  <div>
    <admin-dashboard></admin-dashboard>

    <admin-panel
      :studentsAmount="studentsAmount"
      :newsAmount="newsAmount"
    ></admin-panel>

    <div class="container pt-5">
      <div class="row">
        <div class="col-md-12 col-lg-7 mt-2">
          <students-report></students-report>
        </div>
        <div class="col-md-12 col-lg-5 mt-2">
          <news-report></news-report>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <!-- <students-chart></students-chart> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminDashboard from "@/components/admin/AdminDashboard.vue";
import AdminPanel from "@/components/admin/AdminPanel.vue";
import StudentsReport from "@/components/admin/students/StudentsReport.vue";
import NewsReport from "@/components/admin/news/NewsReport.vue";

import Axios from "axios";

export default {
  data() {
    return {
      studentsAmount: "",
      newsAmount: "",
    };
  },
  components: {
    "admin-dashboard": AdminDashboard,
    "admin-panel": AdminPanel,
    "students-report": StudentsReport,
    "news-report": NewsReport,
  },
  created() {
    this.getAmountOfStudents();
    this.getAmountOfNews();
  },
  methods: {
    getAmountOfStudents() {
      Axios.get("/user")
        .then((result) => {
          this.studentsAmount = result.data.length;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getAmountOfNews() {
      Axios.get("/news")
        .then((result) => {
          this.newsAmount = result.data.length;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
