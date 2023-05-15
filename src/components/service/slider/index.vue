<template>
    <section id="services-slider" class="background-gray pt-pb-30" data-aos="flip-down" data-aos-easing="linear"
             data-aos-duration="500">
        <div class="container">
            <div class="text-center color-orange-red"><span>Happy to serve</span></div>
            <h1 class="text-center color-gray">The right pharmacy is right here</h1>
            <ui-carousel :component="'service-slider-card'" :wrap="true" :show="3" :data="services"/>
        </div>
    </section>
</template>

<script>
export default {
    name: "index",
    data: () => ({
        services: [
            {
                title: 'Prescription Refills',
                image: require("@/assets/images/service/content/card/prescription-refills.jpg"),
                description: 'If you\'re looking for a trusted source for prescription refills, look no further than Daylight Pharmacy.',
            },
            {
                title: 'Immunizations',
                image: require("@/assets/images/service/content/card/immunization.jpg"),
                description: 'We offer shots for both children and adults, so that everyone in your family can be protected.',
            },
            {
                title: 'Vitamins & Multivitamins',
                image: require("@/assets/images/service/content/card/vitamins.jpg"),
                description: 'Vitamins and supplements are an essential part of keeping your body healthy and Daylight Pharmacy has all the bases covered.',
            },
            {
                title: 'Vaccinations',
                image: require("@/assets/images/service/content/card/vaccination.jpg"),
                description: 'We offer a wide range of vaccinations to help protect you and your family from potentially deadly diseases.',
            },
            {
                title: 'Medical Equipment',
                image: require("@/assets/images/service/content/card/medical-equipment.jpg"),
                description: 'Daylight Pharmacy is here to provide you with top-quality medical equipment that you can trust.',
            },
        ],
    }),
}
</script>

<style scoped>
.pt-pb-30 {
    padding-top: 30px;
    padding-bottom: 50px;
}

.background-gray {
    background: #f9f9f9;
}

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
