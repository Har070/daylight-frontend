<template>
    <section id="faq" class="pt-pb-50">
        <div class="container">
            <div class="row gx-5 align-items-center">
                <left-side data-aos="zoom-in-right"/>
                <right-side data-aos="zoom-in-left"/>
            </div>
        </div>
    </section>
</template>

<script>
import LeftSide from '@/components/faq/content/left';
import RightSide from '@/components/faq/content/right';

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
</style>
