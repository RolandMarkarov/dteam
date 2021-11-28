import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [],
    user: {}
  },
  mutations: {
    setUsers(state, pl) {
      state.users = pl
    },
    setUser(state, pl) {
      state.user = pl
    },

  },
  actions: {
    setLocalStorage({commit}, pl) {
      localStorage.setItem('users', JSON.stringify(pl))
      commit('setUsers', pl)
    },
    SET_USERS({commit, dispatch}, pl) {
      let tempUsers = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
      tempUsers.push(pl)
      localStorage.setItem('users', JSON.stringify(tempUsers))
      dispatch('setLocalStorage', tempUsers)

    },
    UPDATE_USER({commit, dispatch, state}, pl) {
      let tempUsers = state.users.map(el => el.id === pl.id ? {...el, ...pl} : {...el})
      console.log(tempUsers, 'tempUsers')
      dispatch('setLocalStorage', tempUsers)

    },

    DELETE_USER({commit, dispatch}, pl) {
      let tempUsers = JSON.parse(localStorage.getItem('users'))
      tempUsers = tempUsers.filter(el => el.id !== pl
      )
      dispatch('setLocalStorage', tempUsers)

    }
  },
  getters: {
    getUsers: state => state.users,
    getUser: state => state.user
  },
  modules: {}
})
