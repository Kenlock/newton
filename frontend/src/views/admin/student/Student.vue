<template>
  <div>
    <div class="container pt-5">
      <div class="row">
        <div class="col-lg-12">
          <h1>Student CRUD</h1>

          <student-report></student-report>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    "student-report": () =>
      import("@/components/admin/students/StudentsReport"),
  },
};
</script>

<style></style>
