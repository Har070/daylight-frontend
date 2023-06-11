<template>
    <section id="services-slider" class="pt-pb-30">
        <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
            <div class="text-center color-orange-red"><span>Happy to serve</span></div>
            <h1 class="text-center color-blue">The right pharmacy is right here</h1>
            <ui-carousel class="mt-3" :component="'service-card'" :wrap="true" :data="services"/>
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
                image: 'fa-solid fa-file-prescription',
                description: 'If you\'re looking for a trusted source for prescription refills, look no further than Daylight Pharmacy.',
            },
            {
                title: 'Immunizations',
                image: 'fa-solid fa-syringe',
                description: 'We offer shots for both children and adults, so that everyone in your family can be protected.',
            },
            {
                title: 'Vitamins & Multivitamins',
                image: 'fa-solid fa-capsules',
                description: 'Vitamins and supplements are an essential part of keeping your body healthy and Daylight Pharmacy has all the bases covered.',
            },
            {
                title: 'Vaccinations',
                image: 'fa-solid fa-virus-covid-slash',
                description: 'We offer a wide range of vaccinations to help protect you and your family from potentially deadly diseases.',
            },
            {
                title: 'Medical Equipment',
                image: 'fa-solid fa-stethoscope',
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

.color-orange-red {
    color: orangered;
}

.color-blue {
    color: #020058;
}

.color-orange-red span {
    display: inline-block;
    font-weight: 600;
}
</style>
