<template>
   <div>
     really
     <input type="text"  ref="qwe" @input="search()">

     <div v-if="info"></div>
   </div>
</template>

<script>
import * as _ from 'lodash';
import io from 'socket.io-client';
import Vue from 'vue';

export default {
    data () {
        return {
            text: 'really',
            info: null,
            socket: null
        };
    },
    beforeRouteEnter (to, from, next) {
        console.log('beforeqqqq');
        console.log(to, from);
        next();
    },

    created () {
        console.log(_.debounce);
        console.log(Echo);
        console.log(Vue.myGlobalMethod());

        // this.$ajax.get('http://localhost:8000/test')
        // .then(response => console.log(response))

        // this.search = _.debounce(() => {
        //        console.log('dddd')
        //        console.log(this.$refs.qwe.value)
        //         this.$ajax.get(`http://localhost:8000/test/${this.$refs.qwe.value}?qq=ww`)
        //         .then(response => console.log(response))
        // },2000)

        Echo.channel('news')
            .listen('News', (e) => {
                console.log(e.message);
            });
        // this.socket = io.connect('http://localhost:8000/')
        // this.socket.on('open', () => {
        //      console.log('open')
        // })
    },

    methods: {

    }
};
</script>
