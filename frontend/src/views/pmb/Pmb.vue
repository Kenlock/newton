<template>
    <div>
        <app-header></app-header>

        <div class="container pt-5">
            <div class="row">
                <div class="col-lg-12">
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col">
                                <label for="">Nama</label>
                                <input
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
                                    <label for="">Jenis kelamin</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio1"
                                        value="laki-laki"
                                        v-model="pendaftaran.jenisKelamin"
                                    />
                                    <label
                                        class="form-check-label"
                                        for="inlineRadio1"
                                        >Laki-laki</label
                                    >
                                </div>
                                <div class="form-check form-check-inline">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio2"
                                        value="perempuan"
                                        v-model="pendaftaran.jenisKelamin"
                                    />
                                    <label
                                        class="form-check-label"
                                        for="inlineRadio2"
                                        >Perempuan</label
                                    >
                                </div>
                            </div>
                            <div class="col">
                                <label for="">Alamat</label>
                                <textarea
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
                                <label for="">No.Telp</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    v-model="pendaftaran.noTelp"
                                />
                            </div>
                            <div class="col">
                                <label for="">Email</label>
                                <input
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
                                <label for="">password</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    v-model="pendaftaran.password"
                                />
                            </div>
                            <div class="col">
                                <label for="">tempat</label>
                                <input
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
                                <label for="">tanggal lahir</label>
                                <input
                                    type="date"
                                    class="form-control"
                                    v-model="pendaftaran.tanggalLahir"
                                />
                            </div>
                            <div class="col">
                                <label for="">Asal Sekolah</label>
                                <input
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
                                <label for="">kota</label>
                                <select
                                    name=""
                                    id=""
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
                                <label for="">Jurusan</label>
                                <select
                                    name=""
                                    id=""
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
                                <div class="custom-file">
                                    <input
                                        type="file"
                                        class=" custom-file-input"
                                        ref="file"
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
                                <div class="custom-file">
                                    <input
                                        type="file"
                                        class="custom-file-input"
                                        id="customFile"
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
                                <div class="custom-file">
                                    <input
                                        type="file"
                                        class="custom-file-input"
                                        id="customFile"
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
            dokumen: "",
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

            alert(res.data);

            this.clearInputs(this.pendaftaran);
        },
    },
};
</script>

<style></style>
