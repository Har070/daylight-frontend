<template>
    <div class="position-relative banner">
        <div class="welcome">
            <div class="row w-100">
                <div class="welcome-content col-5 text-white" data-aos="fade-right">
                    <span class="color-orange-red">Welcome To Daylight Pharmacy</span>
                    <h1>The Pharmacy You Trust</h1>
                    <p>We are committed to meeting or exceeding the needs of our patients and customers by providing
                        fast, efficient services in an environment that encourages excellence.</p>
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
    background-image: url("@/assets/images/welcome/welcome-banner.jpg");
    height: 900px;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
}
.welcome {
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

.welcome-content span {
    font-style: italic;
    font-size: 30px;
}

.welcome-content h1 {
    font-style: italic;
    font-size: 50px;
}

.welcome-content p {
    font-style: italic;
}

.color-orange-red {
    color: orangered;
}
</style>