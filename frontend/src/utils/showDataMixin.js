import api from "@/utils/api";

export default {
    methods: {
        async showData(url) {
            const res = await api.get(url);
            return res.data;
        },
    },
};
