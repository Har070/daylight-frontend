<template>
    <section id="banner" class="position-relative banner pt-pb-50"
             v-bind:style="{ 'background-image': 'url(' + image + ')' }">
        <div class="banner-content">
            <div class="row w-100">
                <div class="content col-md text-white" data-aos="fade-right">
                    <span class="color-orange-red">{{ title }}</span>
                    <h1>{{ subTitle }}</h1>
                    <p v-if="description">{{ description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "app-banner",
    props: {
        title: String,
        image: String,
        subTitle: String,
        description: String,
    },
}
</script>

<style scoped>
.pt-pb-50 {
    padding-top: 50px;
    padding-bottom: 50px;
}

.banner {
    height: 900px;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
}

.banner-content {
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

.content span {
    font-style: italic;
    font-size: 30px;
}

.content h1 {
    font-style: italic;
    font-size: 50px;
}

.content p {
    font-style: italic;
}

.color-orange-red {
    color: orangered;
}

@media screen and (max-width: 992px) {
    .banner {
        height: 400px !important;
    }

    .content span {
        font-size: 20px !important;
    }

    .content h1 {
        font-size: 40px !important;
    }

    .content p {
        display: none !important;
    }

    .pt-pb-50 {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
    }
}
</style>