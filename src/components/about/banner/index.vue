<template>
    <section id="about-banner" class="position-relative banner pt-pb-50">
        <div class="about">
            <div class="row w-100">
                <div class="about-content col-5 text-white" data-aos="fade-right">
                    <span class="color-orange-red">More than just a shop</span>
                    <h1>A pharmacy that you can trust blindly</h1>
                    <p>We are committed to meeting or exceeding the needs of our patients and customers by providing
                        fast, efficient services in an environment that encourages excellence.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "index"
}
</script>

<style scoped>
.pt-pb-50 {
    padding-top: 50px;
    padding-bottom: 50px;
}

.banner {
    background-image: url("https://www.guild.org.au/__data/assets/image/0024/115476/insights-thumb.png");
    height: 900px;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
}

.about {
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

.about-content span {
    font-style: italic;
    font-size: 30px;
}

.about-content h1 {
    font-style: italic;
    font-size: 50px;
}

.about-content p {
    font-style: italic;
}

.color-orange-red {
    color: orangered;
}
</style>