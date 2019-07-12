const mutations = {
    SET_USER: (state, user) => {
        state.user = user;
    },
    SET_TOKEN: (state, token) => {
        state.token = token;
    },
    ADD_ROUTER: (state, addRouter) => {
        state.addRouter = addRouter;
    },
    SET_COLLAPSE: (state, isCollapse) => {
        state.isCollapse = isCollapse;
    },
    SET_IMG1: (state, img1) => {
        state.img1 = img1;
    },
    SET_IMG2: (state, img2) => {
        state.img2 = img2;
    },
    SET_IMG3: (state, img3) => {
        state.img3 = img3;
    },
    SET_IMG4: (state, img4) => {
        state.img4 = img4;
    },
    SET_IMG5: (state, img5) => {
        state.img5 = img5;
    },
    SET_IMG6: (state, img6) => {
        state.img6 = img6;
    }
}
export default mutations;