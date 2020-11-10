<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-12">
          <b class="h5 ">Analytics Dashbord 😍</b>
          <div class="text-muted">Vocation High School</div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 pt-4">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <router-link to="/admin" tag="li" class="breadcrumb-item">
                <a class="text-dark">Dashbord</a>
              </router-link>
              <router-link to="/admin/student" tag="li" class="breadcrumb-item">
                <a class="text-dark">Students</a>
              </router-link>
              <router-link to="/news/news" tag="li" class="breadcrumb-item">
                <a class="text-dark">News</a>
              </router-link>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.pt-6 {
  padding-top: 60px;
}
</style>
