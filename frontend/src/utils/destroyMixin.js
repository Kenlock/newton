import api from "@/utils/api";

export default {
    /**
     * @param { url } endpoint of api
     * @param { id } id for delete request
     * todo : create a global function for delete request
     * * return a response of request
     */

    methods: {
        async getData(url, props) {
            const res = await api.get(url);
            return res.data;
        },
        async destroy(url, id) {
            const res = await api.destroy(url, id);
            return res.data;
        },
    },
};
