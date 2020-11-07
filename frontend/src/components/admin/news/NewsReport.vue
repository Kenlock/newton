<template>
  <div>
    <div class="card shadow-lg">
      <div class="card-header">
        <b class="h5">News Report 🧾</b>
      </div>
      <div class="card-body">
        <ul class=" list-group-flush list-group">
          <li class=" list-group-item" v-for="n in news" :key="n.id">
            {{ n.judul_berita }}
          </li>
        </ul>
      </div>
      <div class="card-footer text-center">
        <router-link
          to="/news"
          class="badge badge-primary border-0 py-2 w-25 rounded"
          >View more</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      news: "",
    };
  },
  created() {
    this.getNews();
  },
  methods: {
    getNews() {
      Axios.get("news")
        .then((result) => {
          this.news = result.data;
          console.log(this.news);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
