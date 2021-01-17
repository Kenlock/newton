import api from "@/utils/api";
import getDataMixin from "@/utils/getDataMixin.js";

export default {
    /**
     * @param { url } endpoint of api
     * @param { id } id for delete request
     * TODO : create a global function for DELETE / DESTROY request
     * * return a response DELETE of request of an endpoint
     */

    mixin: [getDataMixin],

    methods: {
        // async getData(url) {
        //     const res = await api.get(url);
        //     this.data = res.data;
        // },
        async destroy(url, id) {
            const res = await api.destroy(url, id);
            if (res.data === "1 Data Deleted") {
                this.getData(url);
            }
        },
    },
};
