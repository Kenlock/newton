export default {
    /**
     * @param {props} object that want to clear
     * TODO : create a global function to clear  all inputs
     *  * will close tabs and clear all inputs
     */

    data() {
        return {
            isAdd: null,
        };
    },

    methods: {
        clearInputs(props) {
            for (let i in props) {
                props[i] = "";
            }
            this.close();
        },
        close() {
            this.isAdd = !this.isAdd;
        },
    },
};
