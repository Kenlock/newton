import api from "@/utils/api";

export default {
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
