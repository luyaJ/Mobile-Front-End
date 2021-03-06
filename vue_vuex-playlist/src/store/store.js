import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  // 设置属性
  state: {
    products: [
      { name: "马云", price: 200 },
      { name: "马化腾", price: 140 },
      { name: "马冬梅", price: 80 },
      { name: "马甲", price: 20 }
    ],
  },
  getters: {
    saleProducts: state => {
      let saleProducts = state.products.map(product => {
        return {
          name: `★${product.name}★`,
          price: product.price / 2
        }
      })
      return saleProducts
    }
  },
  mutations: {
    reducePrice: (state, payload) => {
      // setTimeout(function() {
        state.products.forEach(product => {
          product.price -= payload
        })
      // }, 3000)
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(function() {
        context.commit('reducePrice', payload)
      }, 2000)
    }
  }
})
