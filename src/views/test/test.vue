<template>
    <div>
        <router-link :to="{name:'testTwoIndex',query:{id:'1111111'}}">
            跳转到测试二
        </router-link>
        <router-link :to="{name:'testTwoIndex',query:{id:'333333'}}">
            跳转到测试二
        </router-link>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>
