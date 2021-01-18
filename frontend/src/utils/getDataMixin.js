import api from "@/utils/api";

export default {
    /**
     * @param {url} endpoint of api
     * TODO : create a global function for GET request
     * * return a response of GET request of an endpoint
     */

    data() {
        return {
            getReqData: "",
        };
    },
    methods: {
        async getData(url) {
            const res = await api.get(url);

            this.getReqData = res.data;
        },
    },
};
