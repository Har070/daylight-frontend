<template>
    <div class="col-lg-6"
         data-mdb-toggle="animation"
         data-mdb-animation="slide-in-left"
         data-mdb-animation-start="onScroll"
         data-mdb-animation-on-scroll="repeat">
        <div class="about-img-wrap">
            <img class="about-img-one" src="@/assets/images/about/content/image-1.jpg" alt="Image">
            <img class="about-img-two" src="@/assets/images/about/content/image-2.jpg" alt="Image">
            <div class="about-promo-text">
                <h5><span>10+</span> Years Of Experience</h5>
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
.about-img-wrap {
    position: relative;
    padding-top: 80px;
}

.about-img-one {
    margin: auto 0 0 auto;
    max-width: calc(100% - 100px);
    display: block;
}

.about-img-two {
    position: absolute;
    top: 0;
    left: 0;
    border-right: 8px solid #fff;
    border-bottom: 8px solid #fff;
}

.about-promo-text {
    position: absolute;
    min-width: 220px;
    padding: 20px 10px 30px;
    background-color: #020058;
    text-align: center;
    bottom: 60px;
    right: 0;
    border-radius: 60px;
}

.about-promo-text h5 {
    margin: 0;
    color: orangered;
    font-size: 16px;
    font-weight: 400;
}

.about-promo-text h5 span {
    font-size: 40px;
    font-weight: 600;
    display: block;
}
</style>