<template>
    <div>
        <banner />
        <content />
    </div>
</template>

<script>
import Banner from "@/components/service/banner";
import Content from "@/components/service/content";

export default {
    name: "index",
    components: {
        Banner,
        Content,
    },
}
</script>