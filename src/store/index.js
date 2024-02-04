import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import SecureLS from 'secure-ls';

const secureLs = new SecureLS({ isCompression: false });

export default createStore({
  state: {
    user: null,
    saltKey: "signup1294380*?6*56"
  },
  getters: {
    _saltKey: state => state.saltKey,
    _isAuthenticated: state => state.user !== null,
    _getCurrentUser(state) {
      const user = state.user;
      delete user?.password;
      return user;
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    logoutUser(state) {
      state.user = null;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => secureLs.get(key),
        setItem: (key, value) => secureLs.set(key, value),
        removeItem: key => secureLs.remove(key),
      },
    }),
  ],
});
