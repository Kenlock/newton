<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class=" table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Nama</th>
                                    <th>Jenis kelamin</th>
                                    <th>Alamat</th>
                                    <th>No.Telp</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>tempat</th>
                                    <th>Tanggal Lahir</th>
                                    <th>Asal Sekolah</th>
                                    <th>Kota</th>
                                    <th>Jurusan</th>
                                    <th>Ijazah</th>
                                    <th>Rapor</th>
                                    <th>Surat Pernyatan</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="p in getReqData" :key="p.id">
                                    <td>{{ p.nama }}</td>
                                    <td>{{ p.jenisKelamin }}</td>
                                    <td>{{ p.alamat }}</td>
                                    <td>{{ p.noTelp }}</td>
                                    <td>{{ p.email }}</td>
                                    <td>{{ p.passowrd }}</td>
                                    <td>{{ p.tempat }}</td>
                                    <td>{{ p.tanggalLahir }}</td>
                                    <td>{{ p.asalSekolah }}</td>
                                    <td>{{ p.kota }}</td>
                                    <td>{{ p.jurusan }}</td>
                                    <td>{{ p.ijazah }}</td>
                                    <td>{{ p.rapor }}</td>
                                    <td>{{ p.suratPernyataan }}</td>
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
import getDataMixin from "@/utils/getDataMixin";

export default {
    mixins: [getDataMixin],
    mounted() {
        this.getData("pmb");
    },
};
</script>

<style></style>
