<template>
    <section id="services" class="pt-pb-50" data-aos="zoom-in">
        <div class="container">
            <h5 class="section-title h1">OUR SERVICES</h5>
            <div class="row">
                <template v-for="service in services">
                    <service-card :data="service" />
                </template>
            </div>
        </div>
    </section>
</template>

<script>
import ServiceCard from "@/components/service/content/card";

export default {
    name: "index",
    components: {
        ServiceCard,
    },
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
.pt-pb-50 {
    padding-top: 50px;
    padding-bottom: 50px;
}

.section-title {
    text-align: center;
    margin-bottom: 50px;
    text-transform: uppercase;
    color: orangered !important;
}
</style>