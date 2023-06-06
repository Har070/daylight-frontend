<template>
    <div>
        <app-banner :title="title" :subTitle="subTitle" :image="image" :description="description"/>
        <department />
        <about />
        <faq />
        <comment />
    </div>
</template>

<script>
import Faq from '@/components/faq';
import Comment from '@/components/comment';
import About from '@/components/about/content';
import Department from '@/components/department';

export default {
    name: "about-page",
    components: {
        Faq,
        About,
        Comment,
        Department,
    },
    data() {
        return {
            subTitle: 'A pharmacy that you can trust blindly',
            title: 'More than just a shop',
            image: require("@/assets/images/about/banner/about-banner.png"),
            description: 'We are committed to meeting or exceeding the needs of our patients and customers by providing fast, efficient services in an environment that encourages excellence.'
        }
    },
}
</script>