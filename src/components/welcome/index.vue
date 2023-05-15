<template>
    <section id="welcome" class="background-gray">
        <banner/>
        <content class="mt-3" data-aos="flip-down"
                 data-aos-easing="linear"
                 data-aos-duration="500"/>
    </section>
</template>

<script>
import Banner from "@/components/welcome/banner";
import Content from "@/components/welcome/content";

export default {
    name: "index",
    components: {
        Banner,
        Content,
    },
}
</script>

<style scoped>
.background-gray {
    background: #f9f9f9;
}
</style>