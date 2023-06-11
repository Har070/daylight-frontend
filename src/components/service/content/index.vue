<template>
    <section id="services" class="pt-pb-50" data-aos="zoom-in">
        <div class="container">
            <h5 class="section-title h1">OUR SERVICES</h5>
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-4" v-for="service in services">
                    <service-card :data="service"/>
                </div>
            </div>
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