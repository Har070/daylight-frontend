<template>
    <div class="post-slide">
        <div class="d-flex align-items-center m-lg-3">
            <img class="rounded-circle shadow-1-strong me-3"
                 :src="data.user.image" alt="avatar" width="60"
                 height="60"/>
            <div class="text-start">
                <h6 class="fw-bold text-primary mb-1">{{ data.user.name }}</h6>
                <p class="text-muted small mb-0">
                    Created: {{ data.created_at }}
                </p>
            </div>
        </div>
        <div class="post-content">
            <h3 class="post-title">
                <p>{{ data.title }}</p>
            </h3>
            <p class="post-description lh-sm text-start">
                {{ data.text }}
            </p>
            <div class="small d-flex justify-content-start">
                <ul class="ratings list-style">
                    <li>
                        <i class="fas fa-star"></i>
                    </li>
                    <li>
                        <i class="fas fa-star"></i>
                    </li>
                    <li>
                        <i class="fas fa-star"></i>
                    </li>
                    <li>
                        <i class="fas fa-star"></i>
                    </li>
                    <li>
                        <i class="fas fa-star-half-alt"></i>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "comment-card",
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style scoped>
.post-slide {
    background: #fff;
    margin: 20px 15px 20px;
    border-radius: 15px;
    padding-top: 1px;
    min-height: 340px;
    box-shadow: 0px 14px 22px -9px #bbcbd8;
}

.post-slide .post-content {
    background: #fff;
    padding: 2px 20px 40px;
    border-radius: 15px;
}

.post-slide .post-title p {
    font-size: 20px;
    font-weight: bold;
    color: #484848;
    text-transform: uppercase;
    transition: all 0.3s ease 0s;
}

.post-slide .post-title a:hover {
    text-decoration: none;
    color: #3498db;
}

.post-slide .post-description {
    color: #808080;
    margin-bottom: 25px;
}

@media only screen and (max-width: 1280px) {
    .post-slide .post-content {
        padding: 0px 15px 25px 15px;
    }
}

.ratings {
    width: 100px;
    margin: 0;
}

.list-style {
    padding: 0;
    list-style: none;
}

.ratings li {
    display: inline-block;
    list-style: none;
}

.ratings li i {
    color: #FEC107;
}
</style>