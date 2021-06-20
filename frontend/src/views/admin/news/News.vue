<template>
  <div>
    <div class="container" :class="{ 'd-none': isAdd }">
      <div class="row">
        <div class="col-lg-12">
          <button class="btn btn-primary text-white" @click="isAdd = !isAdd">
            Add news
          </button>
        </div>
      </div>
    </div>
    <div class="container" :class="{ 'd-none': !isAdd }">
      <div class="row">
        <div class="col-lg-12">
          <div class="form-group">
            <div class="form-row">
              <div class="col">
                <label for="Judul Berita">Judul Berita</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="newNews.news_title"
                />
              </div>
              <div class="col">
                <label for="Sub Judul">Sub Judul</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="newNews.news_title"
                />
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="form-row">
              <div class="col">
                <label for="Isi Berita">Isi Berita</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="newNews.news_title"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container pt-3">
      <div class="row">
        <div class="col-lg-12" v-for="n in getReqData" :key="n.id">
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  :src="'http://localhost:8000/news_img/' + n.news_img"
                  class="card-img"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">
                    {{ n.judul_berita }}
                  </h5>
                  <p class="card-text">
                    {{ n.isi_berita }}
                  </p>
                  <p class="card-text">
                    <small class="text-muted"
                      >Last updated {{ n.updated_at }}</small
                    >
                  </p>
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
import getDataMixin from "@/utils/getDataMixin";
import clearInputMixin from "@/utils/clearInputMixin";

export default {
  mixins: [getDataMixin, clearInputMixin],
  mounted() {
    this.getData("news");
  },
  data() {
    return {
      isAdd: false,
    };
  },
};
</script>

<style></style>
