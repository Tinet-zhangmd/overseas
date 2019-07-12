import ajax from '@utils/config';
//这个action会被传入一个Object，这个Object里面可能有很多的方法和属性，而你只需要commit方法
const actions = {
    SETUSER({ commit }, { user }) {
        commit('SET_USER', user);
    },
    SETTOKEN({ commit }, { token }) {
        commit('SET_TOKEN', token);
    },
    ADDROUTER({ commit }, { addRouter }) {
        commit('ADD_ROUTER', addRouter);
    },
    SETISCOLLAPSE({ commit }, { isCollapse }) {
        commit('SET_COLLAPSE', isCollapse);
    },
    SETIMG1({ commit }, { img1 }) {
        commit('SET_IMG1', img1);
    },
    SETIMG2({ commit }, { img2 }) {
        commit('SET_IMG2', img2);
    },
    SETIMG3({ commit }, { img3 }) {
        commit('SET_IMG3', img3);
    },
    SETIMG4({ commit }, { img4 }) {
        commit('SET_IMG4', img4);
    },
    SETIMG5({ commit }, { img5 }) {
        commit('SET_IMG5', img5);
    },
    SETIMG6({ commit }, { img6 }) {
        commit('SET_IMG6', img6);
    }
}
export default actions;