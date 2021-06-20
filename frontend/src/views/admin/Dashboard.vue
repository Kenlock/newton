<template>
  <div>
    <!-- panel info -->
    <!-- passing a props of info -->
    <admin-panel :info="info"></admin-panel>

    <!-- main  -->
    <div class="container pt-4">
      <div class="row">
        <div class="col-lg-12">
          <!-- students report -->
          <admin-student-report></admin-student-report>
        </div>
        <!-- <div class="col-lg-5">
                    
                    <admin-news-report></admin-news-report>
                </div> -->
      </div>
      <div class="row pt-4">
        <div class="col-lg-12">
          <!-- staff report -->
          <admin-staff-report></admin-staff-report>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getDataMixin from "@/utils/getDataMixin";

export default {
  mixins: [getDataMixin],

  data() {
    return {
      info: {
        students: "",
        news: "",
        staff: "",
      },
    };
  },
  components: {
    "admin-panel": () => import("@/components/admin/AdminPanel"),
    "admin-student-report": () =>
      import("@/components/admin/students/StudentsReport"),
    "admin-news-report": () => import("@/components/admin/news/NewsReport"),
    "admin-staff-report": () => import("@/components/admin/staff/StaffReport"),
  },
  created() {
    this.getInfo();
  },
  methods: {
    async getInfo() {
      this.info.students = await this.getData("user", true);
      this.info.news = await this.getData("news", true);
      this.info.staff = await this.getData("staff", true);
    },
  },
};
</script>

<style></style>
