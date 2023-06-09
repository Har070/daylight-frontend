<template>
    <div class="col-lg-6">
        <div class="content-title style-department">
            <span>The ideal pharmacy</span>
            <h2>Who we are?</h2>
            <p>Daylight Pharmacy is dedicated to providing high-quality pharmacy services that result in optimal
                medication outcomes. Our pharmacists are highly trained and experienced in providing personalized care,
                and our staff is always available to answer your questions and help you find the best solutions for your
                health. We offer a wide range of products and services, including prescription medications,
                over-the-counter drugs, vitamins and supplements, home medical equipment, and more. We're here to help
                you get the most out of your medication, so you can feel your best.</p>
            <h2 class="mt-2">Our Mission!</h2>
            <p>We provide our community with the ultimate personalized pharmacy experience by promoting healthy living
                through improved medication adaption that's backed up by exceptional quality care for each individual
                person or family in need as well as an appreciation of all things related to being healthier!</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "index"
}
</script>

<style scoped>
.content-title {
    margin-bottom: 25px;
    position: relative;
    margin-top: -2px;
}

.content-title.style-department span {
    color: orangered;
    display: inline-block;
    font-weight: 600;
    margin: 0 0 10px;
    position: relative;
    z-index: 1;
    line-height: 1;
}

.content-title h2 {
    font-weight: 700;
    font-size: 44px;
    line-height: 1.3;
    margin: 0;
    color: #484848;
    font-family: "Roboto Condensed", sans-serif;
}

.section-title p, .content-title p {
    margin: 12px 0 0;
    font-size: 16px;
    line-height: 1.8;
    color: #666666;
}

@media screen and (max-width: 992px) {
    .content-title {
        text-align: center !important;
        margin-top: 10px !important;
    }

    .content-title h2 {
        font-size: 20px !important;
    }
}
</style>