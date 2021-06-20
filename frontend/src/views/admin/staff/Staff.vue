<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <button class="btn btn-primary text-white" @click="isAdd = !isAdd">
            Add Staff
          </button>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-lg-12"></div>
      </div>
    </div>

    <div class="container pt-3">
      <div class="row">
        <div class="col-lg-12">
          <div class="table-responsive">
            <b-skeleton-wrapper :loading="loading">
              <template #loading>
                <b-skeleton-table :column="8" :rows="8" animation="throb">
                </b-skeleton-table>
              </template>

              <table class="table table-boderdeless table-hover">
                <thead>
                  <tr>
                    <th class="text-muted">NO</th>
                    <th class="text-muted">NAMA</th>
                    <th class="text-muted">ALAMAT</th>
                    <th class="text-muted">TELP</th>
                    <th class="text-muted">EMAIL</th>
                    <th class="text-muted">STATUS</th>
                    <th colspan="2" class="text-center text-muted">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(s, index) in getReqData"
                    :key="s.id"
                    class="c-pointer"
                  >
                    <td>
                      <div class="bg-light-400 rounded text-center">
                        {{ index + 1 }}
                      </div>
                    </td>
                    <td>{{ s.nama }}</td>
                    <td>{{ s.alamat }}</td>
                    <td>{{ s.telp }}</td>
                    <td>{{ s.email }}</td>
                    <td>{{ s.status }}</td>
                    <td>
                      <button class="btn btn-warning" @click="edit(s)">
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        class="btn btn-danger"
                        @click="danger('staff', s.id)"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </b-skeleton-wrapper>
          </div>
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
      loading: true,
      isAdd: false,
    };
  },

  mounted() {
    this.startLoading();
  },

  methods: {
    async startLoading() {
      this.loading = true;
      await this.getData("staff");
      this.loading = false;
    },
  },
};
</script>

<style></style>
