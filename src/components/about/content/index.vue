<template>
    <section id="about" class="pt-pb-50">
        <div class="container">
            <div class="row gx-5 align-items-center">
                <left-side data-aos="zoom-in-right"/>
                <right-side data-aos="zoom-in-left"/>
            </div>
        </div>
    </section>
</template>

<script>
import LeftSide from '@/components/about/content/left';
import RightSide from '@/components/about/content/right';

export default {
    name: "index",
    components: {
        LeftSide,
        RightSide,
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
        padding-bottom: 50px !important;
    }
}
</style>
