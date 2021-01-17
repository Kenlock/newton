<template>
    <div>
        <!-- <app-header :login="true"></app-header> -->

        <!-- <admin-dashboard></admin-dashboard> -->

        <div class="container" :class="{ 'd-none': isAdd }">
            <div class="row">
                <div class="col-lg-12">
                    <button
                        class="btn v-btn-danger text-white"
                        @click="isAdd = !isAdd"
                    >
                        Add Students
                    </button>
                </div>
            </div>
        </div>
        <div class="container d-none" :class="{ 'd-block': isAdd }">
            <div class="row">
                <div class="col-lg-12">
                    <div class="form-group">
                        <div class=" form-row">
                            <div class="col">
                                <label for="nisn">NISN</label>
                                <input
                                    type="number"
                                    id="nisn"
                                    class=" form-control"
                                    v-model="newUser.nisn"
                                />
                            </div>
                            <div class="col">
                                <label for="nama">Nama</label>
                                <input
                                    type="text"
                                    id="nama"
                                    class=" form-control"
                                    v-model="newUser.nama"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col">
                                <label for="kelas">Kelas</label>
                                <select
                                    name="kelas"
                                    id="kelas"
                                    class="form-control"
                                    v-model="newUser.kelas"
                                >
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </div>
                            <div class="col">
                                <label for="jurusan">Jurusan</label>
                                <select
                                    name="jurusan"
                                    id="jurusan"
                                    class="form-control"
                                    v-model="newUser.jurusan"
                                >
                                    <option value="PM">PM</option>
                                    <option value="AK">AK</option>
                                    <option value="TKJ">TKJ</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col">
                                <label for="alamat">Alamat</label>
                                <textarea
                                    name="alamat"
                                    id="alamat"
                                    cols="30"
                                    rows="5"
                                    class="form-control"
                                    v-model="newUser.alamat"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col">
                                <label for="telp">No.Telp</label>
                                <input
                                    name="telp"
                                    type="numer"
                                    id="telp"
                                    class="form-control"
                                    v-model="newUser.telp"
                                />
                            </div>
                            <div class="col">
                                <label for="email">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    id="email"
                                    class="form-control"
                                    v-model="newUser.email"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col">
                                <label for="password">Password</label>
                                <input
                                    name="passowrd"
                                    type="password"
                                    id="password"
                                    class="form-control"
                                    v-model="newUser.password"
                                />
                            </div>
                            <div class="col">
                                <label for="angkatan">Angkatan</label>
                                <input
                                    name="angkata"
                                    type="number"
                                    id="angkatan"
                                    class="form-control"
                                    v-model="newUser.angkatan"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col">
                                <label for="status">Status</label>
                                <select
                                    name="status"
                                    id="status"
                                    class="form-control"
                                    v-model="newUser.status"
                                >
                                    <option value="admin">Admin</option>
                                    <option value="siswa">Siswa</option>
                                </select>
                            </div>
                            <div class="col">
                                <label for="aktif">Aktif</label>
                                <select
                                    name="aktif"
                                    id="aktif"
                                    class="form-control"
                                    v-model="newUser.aktif"
                                >
                                    <option value="y">Ya</option>
                                    <option value="n">Tidak</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col">
                                <button
                                    class="btn btn-primary mr-3"
                                    @click="store()"
                                >
                                    Create
                                </button>
                                <button
                                    class="btn btn-danger"
                                    @click="clearInput(newUser)"
                                >
                                    Cancle
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container pt-3" :class="{ 'd-none': isAdd }">
            <div class="row">
                <div class="col-lg-12">
                    <div class=" table-responsive">
                        <table class=" table">
                            <thead>
                                <tr>
                                    <th>NISN</th>
                                    <th>Nama</th>
                                    <th>Kelas</th>
                                    <th>Jurusan</th>
                                    <th colspan="2" class="text-center">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="s in getReqData" :key="s.id">
                                    <td>{{ s.nisn }}</td>
                                    <td>{{ s.nama }}</td>
                                    <td>{{ s.kelas }}</td>
                                    <td>{{ s.jurusan }}</td>
                                    <td>
                                        <button class="btn btn-warning">
                                            Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            class="btn btn-danger"
                                            @click="destroy('user', s.id)"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from "@/utils/api";

import getDataMixin from "@/utils/getDataMixin";
import destroyMixin from "@/utils/destroyMixin";
import clearInputMixin from "@/utils/clearInputMixin";

export default {
    mixins: [getDataMixin, destroyMixin, clearInputMixin],
    data() {
        return {
            isAdd: null,
            newUser: {
                nisn: "",
                nama: "",
                kelas: "",
                jurusan: "",
                alamat: "",
                telp: "",
                email: "",
                password: "",
                angkatan: "",
                status: "",
                aktif: "",
            },
        };
    },
    mounted() {
        this.getData("user");
    },
    methods: {
        async store() {
            const res = await api.post("user", this.newUser);
            if (res.data.msg === "1 Data recored") {
                this.clearInput(this.newUser);
                this.getData("user");
                this.isAdd = !null;
            }
        },
    },
};
</script>

<style></style>
