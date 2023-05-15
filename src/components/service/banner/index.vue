<template>
    <div class="position-relative banner">
        <div class="service-banner">
            <div class="row w-100">
                <div class="service-banner-content col-5 text-white" data-aos="fade-right">
                    <span class="color-orange-red">Welcome To Daylight Pharmacy Services</span>
                    <h1>The ideal pharmacy</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "index"
}
</script>

<style scoped>
.banner {
    height: 900px;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-image: url("@/assets/images/service/banner/service-banner.jpg");
}

.service-banner {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000096;
    display: flex;
    align-items: flex-end;
    padding: 40px;
}

.service-banner-content span {
    font-style: italic;
    font-size: 30px;
}

.service-banner-content h1 {
    font-style: italic;
    font-size: 50px;
}

.color-orange-red {
    color: orangered;
}
</style>