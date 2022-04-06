<template>
    <div class="wrapper">
        <h2 class="library-title">Best View Demo</h2>

        <div class="title">Button</div>
        <div class="content">
            <Button long />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Demo'
};
</script>

<style lang="less" scoped>
.wrapper {
    padding: 0 20px;

    .library-title {
        font-size: 20px;
        background-image: -webkit-linear-gradient(bottom, rgba(251, 84, 62, 1), rgba(245, 134, 89, 1));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .title {
        font-size: 14px;
        text-align: left;
        font-weight: bold;
    }

    .content {
        margin: 20px 0;
        text-align: left;
    }
}
</style>
