<template>
    <section id="welcome">
        <content data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"/>
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