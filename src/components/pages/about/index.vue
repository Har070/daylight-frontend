<template>
    <div>
        <banner />
        <department />
        <about />
        <faq />
        <comment />
    </div>
</template>

<script>
import Faq from '@/components/faq';
import Comment from '@/components/comment';
import Banner from '@/components/about/banner';
import About from '@/components/about/content';
import Department from '@/components/department';

export default {
    name: "about-page",
    components: {
        Faq,
        About,
        Banner,
        Comment,
        Department,
    },
}
</script>