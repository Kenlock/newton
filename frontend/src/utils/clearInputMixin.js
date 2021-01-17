export default {
    methods: {
        clearInput(props) {
            for (let i in props) {
                props[i] = "";
            }
        },
    },
};
