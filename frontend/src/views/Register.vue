<template>
    <div>
        <div class="jumbotron jumbotron-fluid bg-white">
            <div class="container pt-5">
                <div class="row">
                    <div
                        class="col-sm-12 col-md-12 col-lg-6"
                        data-aos="fade-right"
                    >
                        <div class=" h1 font-weight-bold text-purple">
                            Sign Up
                        </div>
                        <p class=" text-muted">
                            Join Us In Vocation High School
                        </p>
                        <div class="form-row">
                            <div class="col-lg-6 pt-4">
                                <label for="">NISN</label>
                                <input
                                    type="number"
                                    id="nisn"
                                    v-model="registerData.nisn"
                                    class="form-control border-left-0 border-top-0 border-right-0"
                                />
                            </div>
                            <div class="col-lg-6 pt-4">
                                <label for="">Nama</label>
                                <input
                                    type="text"
                                    id="nama"
                                    v-model="registerData.nama"
                                    class="form-control border-left-0 border-top-0 border-right-0"
                                />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-lg-6 pt-4">
                                <label for="">Kelas</label>
                                <select
                                    name=""
                                    id=""
                                    v-model="registerData.kelas"
                                    class="form-control border-left-0 border-top-0 border-right-0"
                                >
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </div>
                            <div class="col-lg-6 pt-4">
                                <label for="">Jurusan</label>
                                <select
                                    id="jurusan"
                                    v-model="registerData.jurusan"
                                    class="form-control border-left-0 border-top-0 border-right-0"
                                >
                                    <option value="TKJ"
                                        >Teknologi Komputer & Jaringan</option
                                    >
                                    <option value="AK">Akuntansi</option>
                                    <option value="PM">Pemasaran</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group pt-4">
                            <label for="">Alamat</label>
                            <input
                                type="text"
                                id="alamat"
                                v-model="registerData.alamat"
                                class="form-control border-left-0 border-top-0 border-right-0"
                            />
                        </div>
                        <div class="form-group pt-4">
                            <label for="">Telp</label>
                            <input
                                type="number"
                                id="telp"
                                v-model="registerData.telp"
                                class="form-control border-left-0 border-top-0 border-right-0"
                            />
                        </div>
                        <div class="form-group pt-4">
                            <label for="">Email</label>
                            <input
                                type="Email"
                                id="email"
                                v-model="registerData.email"
                                class="form-control border-left-0 border-top-0 border-right-0"
                            />
                        </div>
                        <div class="form-group pt-4">
                            <label for="">Password</label>
                            <input
                                type="password"
                                id="password"
                                v-model="registerData.password"
                                class="form-control border-left-0 border-top-0 border-right-0"
                            />
                        </div>
                        <div class="form-group pt-4">
                            <label for="">Angkatan</label>
                            <input
                                type="number"
                                id="angkatan"
                                v-model="registerData.angkatan"
                                class="form-control border-left-0 border-top-0 border-right-0"
                            />
                        </div>
                        <div class="form-group pt-4">
                            <label for="">Status</label>
                            <select
                                id="status"
                                v-model="registerData.status"
                                class="form-control border-left-0 border-top-0 border-right-0"
                            >
                                <option value="siswa">Siswa</option>
                            </select>
                        </div>
                        <div class="form-group pt-4">
                            <label for="">Aktif</label>
                            <select
                                id="aktif"
                                v-model="registerData.aktif"
                                class="form-control border-left-0 border-top-0 border-right-0"
                            >
                                <option value="y">Ya</option>
                            </select>
                        </div>
                        <div class="form-grop">
                            <button
                                @click="register()"
                                class="btn text-white btn-purple col-3"
                            >
                                Sign Up
                            </button>
                            <router-link
                                to="/login"
                                tag="button"
                                class="btn btn-outline-purple col-3 ml-3"
                            >
                                Sign In
                            </router-link>
                        </div>
                    </div>
                    <div
                        class="col-sm-12  col-md-12 col-lg-6"
                        data-aos="fade-left"
                    >
                        <img
                            src="@/assets/img/login_banner.jpg"
                            alt=""
                            class="rounded shadow-lg img-fluid"
                        />
                    </div>
                </div>
            </div>
        </div>

        <app-footer></app-footer>

        <app-copyright></app-copyright>
    </div>
</template>

<script>
import api from "@/utils/api";
import clearInputMixin from "@/utils/clearInputMixin";

export default {
    mixins: [clearInputMixin],
    data() {
        return {
            registerData: {
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
    components: {
        "app-footer": () => import("@/components/utils/Footer"),
        "app-copyright": () => import("@/components/utils/Copyright"),
    },
    methods: {
        async register() {
            const res = await api.post("user", this.registerData);

            alert("Register Success");

            this.clearInputs(this.registerData);

            this.$router.push("/login");
        },
    },
};
</script>
