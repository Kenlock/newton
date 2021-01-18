import api from "@/utils/api";

export default {
    data() {
        return {
            response: "",
        };
    },
    methods: {
        async store(url, data) {
            const res = await api.post(url, data);
            this.response = res.data;
        },
    },
};
