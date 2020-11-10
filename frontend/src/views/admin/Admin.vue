<template>
  <div>
    <app-header :login="true"></app-header>

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
import api from "@/utils/api";

export default {
  data() {
    return {
      studentsAmount: "",
      newsAmount: "",
    };
  },
  components: {
    "admin-dashboard": () => import("@/components/admin/AdminDashboard"),
    "admin-panel": () => import("@/components/admin/AdminPanel"),
    "students-report": () =>
      import("@/components/admin/students/StudentsReport"),
    "news-report": () => import("@/components/admin/news/NewsReport"),
    "app-header": () => import("@/components/utils/Navbar"),
  },
  created() {
    this.getAmountOfStudents();
    this.getAmountOfNews();
  },
  methods: {
    async getAmountOfStudents() {
      const res = await api.get("/user");
      this.studentsAmount = res.data.length;
    },
    async getAmountOfNews() {
      const res = await api.get("/news");
      this.newsAmount = res.data.length;
    },
  },
};
</script>

<style></style>
