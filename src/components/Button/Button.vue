<template>
    <div class="best-view-button">
        Button Component
    </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        long: {
            type: Boolean,
            default: false
        }
    }
};
</script>
