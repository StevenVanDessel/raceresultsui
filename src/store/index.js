import { createStore } from 'vuex'
import RiderService from '@/services/RiderService.js'

export default createStore({
  state: {
    riders: [],
    rider: {}
  },
  mutations: {
    ADD_RIDER(state, rider) {
      state.riders.push(rider)
    },
    SET_RIDER(state, rider) {
      state.rider = rider
    },
    SET_RIDERS(state, riders) {
      state.riders = riders
    }
  },
  actions: {
    createRider({ commit }, rider) {
      RiderService.postEvent(rider)
        .then(() => {
          commit('ADD_RIDER', rider)
        })
        .catch(error => {
          throw(error)
        })
    },
    fetchRiders({ commit }) {
      return RiderService.getRiders()
        .then(response => {
          commit('SET_RIDERS', response.data)
        })
        .catch(error => {
          throw(error)
        })
    },
    fetchRider({ commit, state }, id) {  
      const existingRider = state.riders.find(rider => rider.id === id)
      if (existingRider) {
        commit('SET_RIDER', existingRider)
      } else {
        return RiderService.getRider(id)
          .then(response => {
            commit('SET_RIDER', response.data)
          })
          .catch(error => {
            throw(error)
          })
      }
    }
  },
  modules: {}
})
