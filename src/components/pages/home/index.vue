<template>
    <div>
        <welcome />
        <about />
        <service-slider />
        <faq />
        <comment />
    </div>
</template>

<script>
import Faq from '@/components/faq';
import Welcome from '@/components/welcome';
import Comment from '@/components/comment';
import About from "@/components/about/content";
import ServiceSlider from "@/components/service/slider";

export default {
    name: "home-page",
    components: {
        Faq,
        About,
        Welcome,
        Comment,
        ServiceSlider,
    },
}
</script>