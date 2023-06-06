<template>
    <section id="welcome" class="background-gray">
        <content data-aos="flip-down"
                 data-aos-easing="linear"
                 data-aos-duration="500"/>
    </section>
</template>

<script>
import Content from "@/components/welcome/content";

export default {
    name: "index",
    components: {
        Content,
    },
}
</script>

<style scoped>
.background-gray {
    background: #f9f9f9;
}
</style>