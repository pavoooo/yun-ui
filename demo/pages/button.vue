<template>
    <div>
        <div class="title">
            <h3 class="yun-h3">按钮 Button</h3>
            <p>我们提供常用的按钮以便统一体验。</p>
        </div>
        <div class="content button-container">
            <yun-button type="normal">默认按钮</yun-button>
            <yun-button type="linear">线性按钮</yun-button>
            <yun-button disabled>禁用按钮</yun-button>
            <yun-button size="large">large 撑满按钮</yun-button>
            <yun-button size="middle">middle 中等按钮</yun-button>
            <yun-button size="small">small 小按钮</yun-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'yun-button-demo',
        props: {},
        created () {
            console.log('button demo loaded')
        },
        methods: {}
    }

</script>

<style lang="less">

</style>
