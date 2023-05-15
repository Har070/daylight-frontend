<template>
    <div class="post-slide">
        <div class="post-img">
            <img class="img-fluid" :src="data.image">
        </div>
        <div class="post-content">
            <h3 class="post-title">
                <p>{{ data.title }}</p>
            </h3>
            <p class="post-description lh-sm text-start">
                {{ data.description }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "welcome-card",
    props: {
        data: {
            type: Object,
            required: true,
        },
    }
}
</script>

<style scoped>
.post-slide {
    background: #fff;
    margin: 20px 15px 20px;
    border-radius: 15px;
    padding-top: 1px;
    box-shadow: 0px 14px 22px -9px #bbcbd8;
}

.post-img {
    position: relative;
    overflow: hidden;
    max-height: 210px;
    border-radius: 10px;
    margin: -12px 15px 8px 15px;
    margin-left: -10px;
}

.post-img img {
    transform: scale(1, 1);
    transition: transform 0.2s linear;
}

.post-slide:hover .post-img img {
    transform: scale(1.1, 1.1);
}

.post-content {
    background: #fff;
    padding: 2px 20px 15px;
    border-radius: 15px;
}

.post-title p {
    font-size: 20px;
    font-weight: bold;
    color: #484848;
    text-transform: uppercase;
    transition: all 0.3s ease 0s;
}

.post-title a:hover {
    text-decoration: none;
    color: #3498db;
}

.post-description {
    color: #808080;
}

@media only screen and (max-width: 1280px) {
    .post-content {
        padding: 0px 15px 25px 15px;
    }
}
</style>