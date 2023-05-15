<template>
    <div class="container">
        <div class="text-center color-orange-red"><span>Happy to serve</span></div>
        <h1 class="text-center color-gray">The right pharmacy is right here</h1>
        <ui-carousel class="mt-3" :component="'welcome-card'" :wrap="true" :show="3" :data="services"/>
    </div>
</template>

<script>
export default {
    name: "index",
    data: () => ({
        services: [
            {
                title: 'Medicine Delivery',
                image: require("@/assets/images/welcome/delivery.jpg"),
                description: 'We offer We offer free delivery within 10 miles of the pharmacy. Contact us for details or to schedule your free delivery.'
            },
            {
                title: 'Over The Counter',
                image: require("@/assets/images/welcome/over-the-counter.jpg"),
                description: 'We offer a wide range of compounding services, including veterinary and hormone replacement therapy.'
            },
            {
                title: 'Immunizations',
                image: require("@/assets/images/welcome/immunization.jpg"),
                description: 'We offer a variety of vaccines to keep you and your family healthy. Contact us to learn more about our immunizations.'
            },
        ],
    }),
}
</script>

<style scoped>
.color-orange-red {
    color: orangered;
}

.color-gray {
    color: #484848;
}

.color-orange-red span {
    display: inline-block;
    font-weight: 600;
}
</style>