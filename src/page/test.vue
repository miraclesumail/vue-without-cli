<template>
    <div id="test">
       <span>{{text}}</span>
       <div v-bg="color" v-hello>test bg</div>
       <div v-hello>test hello</div>

       <button @click="changeColor">changeColor</button>
       <router-link to="/really">Go to really</router-link>

       <button class="qwe" @click="addBlock">add</button>
        <transition
        v-for="(item,index) in showMoveDot"
         appear
        @after-appear = 'afterEnter'
        @before-appear="beforeEnter" :key="index"
        >
        <span class="move_dot" v-if="item">        </span>
        </transition>
    </div>
</template>

<script>
import bg from '../directives/bgColor';
import hello from '../directives/hello';
export default {
    directives: { bg, hello },
    data () {
        return {
            text: 'test',
            showMoveDot: [1],
            color: 'yellow'
        };
    },
    methods: {
        beforeEnter (el, index) {
            console.log(el);
            el.style.transform = 'translate3d(150px,-200px,0)';
            // el.children[0].style.transform = `translate3d(${this.elLeft - 30}px,0,0)`;
            el.style.opacity = 0;
        },
        afterEnter (el) {
            // el.style.transform = `translate3d(0,0,0)`;
            el.style.transform = `translate3d(0,0,0)`;
            el.style.transition = 'transform .95s cubic-bezier(0.3, -0.25, 0.7, -0.15)';
            // el.children[0].style.transition = 'transform .55s linear';
            // this.showMoveDot = this.showMoveDot.map(item => false);
            el.style.opacity = 1;
            this.showMoveDot = [];
            // el.children[0].addEventListener('transitionend', () => {
            //     this.listenInCart();
            // })
            // el.children[0].addEventListener('webkitAnimationEnd', () => {
            //     this.listenInCart();
            // })
        },
        addBlock () {
            console.log(this.showMoveDot);
            this.showMoveDot.push(1);
        },
        say () {
            console.log('cascade');
        },
        changeColor () {
            this.color = ['orange', 'pink', 'blue'][Math.floor(Math.random() * 3)];
        }
    }
};
</script>

<style lang="scss" scoped>
#test{
    font-size:12px;
    color:green;
}

.move_dot{
             position: fixed;
        bottom: 30px;
        left: 30px;
                width: 30px;
        height: 30px;
        background-color: #262626;
    }
</style>
