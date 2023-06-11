<template>
    <section id="comment" class="pt-pb-50">
        <content data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"/>
    </section>
</template>

<script>
import Content from '@/components/comment/content/index';

export default {
    name: "index",
    components: {
        Content,
    },
}
</script>

<style scoped>
.pt-pb-50 {
    padding-top: 50px;
    padding-bottom: 50px;
}

@media screen and (max-width: 992px) {
    .pt-pb-50 {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
    }
}
</style>