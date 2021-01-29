<template>
    <div>
        <app-header></app-header>

        <div class="container pt-5">
            <div class="row">
                <div class="col-lg-12">
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col">
                                <label for="nama">Nama</label>
                                <input
                                    id="nama"
                                    type="text"
                                    class="form-control"
                                    v-model="pendaftaran.nama"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col">
                                <div>
                                    <label for="jenis-kelamin"
                                        >Jenis kelamin</label
                                    >
                                </div>
                                <div class="form-check form-check-inline">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        value="laki-laki"
                                        id="laki-laki"
                                        v-model="pendaftaran.jenisKelamin"
                                    />
                                    <label
                                        class="form-check-label"
                                        for="laki-laki"
                                        >Laki-laki</label
                                    >
                                </div>
                                <div class="form-check form-check-inline">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="perempuan"
                                        value="perempuan"
                                        v-model="pendaftaran.jenisKelamin"
                                    />
                                    <label
                                        class="form-check-label"
                                        for="perempuan"
                                        >Perempuan</label
                                    >
                                </div>
                            </div>
                            <div class="col">
                                <label for="alamat">Alamat</label>
                                <textarea
                                    id="alamat"
                                    name="alamat"
                                    cols="10"
                                    rows="5"
                                    class="form-control"
                                    v-model="pendaftaran.alamat"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col">
                                <label for="no-telp">No.Telp</label>
                                <input
                                    id="no-telp"
                                    type="number"
                                    class="form-control"
                                    v-model="pendaftaran.noTelp"
                                />
                            </div>
                            <div class="col">
                                <label for="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    class="form-control"
                                    v-model="pendaftaran.email"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col">
                                <label for="password">Passowrd</label>
                                <input
                                    id="password"
                                    type="password"
                                    class="form-control"
                                    v-model="pendaftaran.password"
                                />
                            </div>
                            <div class="col">
                                <label for="tempat">Tempat</label>
                                <input
                                    id="tempat"
                                    type="text"
                                    class="form-control"
                                    v-model="pendaftaran.tempat"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col">
                                <label for="tanggal-lahir">Tanggal Lahir</label>
                                <input
                                    id="tanggal-lahir"
                                    type="date"
                                    class="form-control"
                                    v-model="pendaftaran.tanggalLahir"
                                />
                            </div>
                            <div class="col">
                                <label for="asal-sekolah">Asal Sekolah</label>
                                <input
                                    id="asal-sekolah"
                                    type="text"
                                    class="form-control"
                                    v-model="pendaftaran.asalSekolah"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col">
                                <label for="kota">Kota</label>
                                <select
                                    name="kota"
                                    id="kota"
                                    class="form-control"
                                    v-model="pendaftaran.kota"
                                >
                                    <option
                                        v-for="k in kota"
                                        :key="k.namaKota"
                                        :value="k.namaKota"
                                        >{{ k.namaKota }}</option
                                    >
                                </select>
                            </div>
                            <div class="col">
                                <label for="Jurusan">Jurusan</label>
                                <select
                                    name="jurusan"
                                    id="jurusan"
                                    class="form-control"
                                    v-model="pendaftaran.jurusan"
                                >
                                    <option
                                        v-for="j in jurusan"
                                        :key="j.namaJurusan"
                                        :value="j.namaJurusan"
                                        >{{ j.namaJurusan }}</option
                                    >
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col">
                                <label for="ijazah">Ijzah</label>
                                <div class="custom-file">
                                    <input
                                        type="file"
                                        class=" custom-file-input"
                                        id="ijazah"
                                        @change="
                                            handleFileUpload($event, 'ijazah')
                                        "
                                    />
                                    <label
                                        class="custom-file-label"
                                        for="customFile"
                                        >Choose file</label
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col">
                                <label for="rapor">Rapor</label>
                                <div class="custom-file">
                                    <input
                                        type="file"
                                        class="custom-file-input"
                                        id="rapor"
                                        @change="
                                            handleFileUpload($event, 'rapor')
                                        "
                                    />
                                    <label
                                        class="custom-file-label"
                                        for="customFile"
                                        >Choose file</label
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col">
                                <label for="surat-pernyataan"
                                    >Surat Pernyataan</label
                                >
                                <div class="custom-file">
                                    <input
                                        type="file"
                                        class="custom-file-input"
                                        id="surat-pernyataan"
                                        @change="
                                            handleFileUpload(
                                                $event,
                                                'suratPernyataan'
                                            )
                                        "
                                    />
                                    <label
                                        class="custom-file-label"
                                        for="customFile"
                                        >Choose file</label
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col">
                                <button
                                    class="btn btn-primary"
                                    @click="submit()"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from "@/utils/api";
import clearInputMixin from "@/utils/clearInputMixin";

export default {
    mixins: [clearInputMixin],
    data() {
        return {
            pendaftaran: {
                nama: "",
                jenisKelamin: "",
                alamat: "",
                noTelp: "",
                email: "",
                password: "",
                tempat: "",
                tanggalLahir: "",
                asalSekolah: "",
                kota: "",
                jurusan: "",
                ijazah: "",
                rapor: "",
                suratPernyataan: "",
            },
            kota: [
                { namaKota: "Pontianak" },
                { namaKota: "Singkawang" },
                { namaKota: "Sintang" },
            ],
            jurusan: [
                { namaJurusan: "Akuntansi" },
                { namaJurusan: "Teknik Komputer Jaringan" },
                { namaJurusan: "Pemasaran" },
            ],
        };
    },
    components: {
        "app-header": () => import("@/components/utils/Navbar"),
    },
    methods: {
        handleFileUpload(e, props) {
            this.pendaftaran[props] = e.target.files[0];
        },
        async submit() {
            const fd = new FormData();

            for (let key in this.pendaftaran) {
                fd.append(key, this.pendaftaran[key]);
            }

            const res = await api.post("pmb", fd);

            alert(res.data.msg);

            this.clearInputs(this.pendaftaran);
        },
    },
};
</script>

<style></style>
