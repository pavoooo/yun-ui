<template>
    <div>
        <div class="middleCenter state-page-container">
            <img class="state-img" src="../../assets/state-img-1.png" />
            <p class="yun-text-center yun-text-secondary ">服务器异常</p>
        </div>
    </div>
</template>
<script>
    export default{
        data () {
            return {
                msg: 'hello vue'
            }
        },
        created () {
            console.log('test loaded')
        },
        components: {}
    }
</script>
<style lang="less">
    .state-page-container{
        text-align: center;
        .state-img{
            width:1.6rem;
            margin-bottom: 0.4rem;
        }
    }
</style>