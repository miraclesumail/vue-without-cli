<template>
    <div id="test">
        <div>{{text}}</div>
        <router-link to="/study">Go to Study</router-link>

        <transition mode="out-in">
			<keep-alive>
			    <router-view ></router-view>
			</keep-alive>
    	</transition>
    	
    
    </div>
</template>

<script>
    export default {
        data(){
            return{
              text: '闰土大de此处叔'
            }
            
        }
    }
</script>

<style lang="scss" scoped>
#test{
    font-size:12px;
    color:green;
}
</style>