import api from "@/utils/api";
import getDataMixin from "@/utils/getDataMixin.js";

export default {
    /**
     * @param { url } endpoint of api
     * @param { id } id for delete request
     * todo : create a global function for delete request
     * * return a response of request
     */

    mixin: [getDataMixin],

    data() {
        return {
            data: "",
        };
    },

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
