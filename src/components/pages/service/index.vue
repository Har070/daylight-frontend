<template>
    <div>
        <app-banner :title="title" :subTitle="subTitle" :image="image"/>
        <content />
    </div>
</template>

<script>
import Content from "@/components/service/content";

export default {
    name: "index",
    components: {
        Content,
    },
    data() {
        return {
            subTitle: 'The ideal pharmacy',
            title: 'Welcome To Daylight Pharmacy Services',
            image: require("@/assets/images/service/banner/service-banner.jpg")
        };
    },
}
</script>