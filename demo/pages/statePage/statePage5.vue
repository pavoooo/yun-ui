<template>
    <div>
        <div class="state-page-container">
            <img class="state-img" src="../../assets/error.svg" />
            <h3 class="yun-text-centet ">操作失败</h3>
            <p class="state-info yun-text-secondary">内容详情，可根据实际需求安排，如果换行则不超过规定
                长度，居中展示</p>
            <div class="row">
                <yun-button type="normal">推荐操作</yun-button>
                <yun-button type="linear">辅助操作</yun-button>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
    }
</script>
<style lang="less">
    .state-page-container{
        padding:1rem 0.24rem 0;
        text-align: center;
        .state-img{
            width:1.6rem;
            margin-bottom: 0.4rem;
        }
        .state-info{
            margin:0.2rem 0;
        }
        .row button{
            margin-top:0.3rem;
        }
    }
</style>