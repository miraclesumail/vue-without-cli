import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

const state = {
	myHobby: '斗地主',
	myList:[
		{name:'qqqqqqq'},
		{name:'wwwwwww'},
		{name:'eeeeeee'},
		{name:'fffffff'},
		{name:'ggggggg'},
		{name:'hhhhhhh'}
	]
}

export default new Vuex.Store({
    state,
    actions,
})

