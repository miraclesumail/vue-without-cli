<template>
    <div id="test">{{text}}</div>
</template>

<script>
    export default {
        data(){
            return{
              text: 'test'
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