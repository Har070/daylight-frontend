<template>
    <div class="image-flip">
        <div class="mainflip flip-0">
            <div class="frontside">
                <div class="card">
                    <div class="card-img">
                        <i :class="data.image" style="color: #020058;"></i>
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">
                            {{ data.title }}
                        </h4>
                    </div>
                </div>
            </div>
            <div class="backside">
                <div class="card">
                    <div class="card-body text-center">
                        <h4 class="card-title">
                            {{ data.title }}
                        </h4>
                        <p class="card-text">
                            {{ data.description }}
                        </p>
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <a class="social-icon text-xs-center" target="_blank"
                                       href="https://www.fb.com/">
                                        <i class="fab fa-facebook"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="social-icon text-xs-center" target="_blank"
                                       href="https://www.instagram.com/">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="social-icon text-xs-center" target="_blank"
                                       href="https://www.twitter.com/">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="social-icon text-xs-center" target="_blank"
                                       href="https://www.linkedin.com/">
                                        <i class="fab fa-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "service-card",
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style scoped>
.card {
    border: none;
    text-align: center;
    background: #ffffff;
    -webkit-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
    -moz-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
    box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
}

.image-flip:hover .backside,
.image-flip.hover .backside {
    -webkit-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
    -o-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    transform: rotateY(0deg);
    border-radius: .25rem;
}

.image-flip:hover .frontside,
.image-flip.hover .frontside {
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
    transform: rotateY(180deg);
}

.mainflip {
    -webkit-transition: 1s;
    -webkit-transform-style: preserve-3d;
    -ms-transition: 1s;
    -moz-transition: 1s;
    -moz-transform: perspective(1000px);
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transition: 1s;
    transform-style: preserve-3d;
    position: relative;
}

.frontside {
    position: relative;
    -webkit-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    z-index: 2;
    margin-bottom: 30px;
}

.backside {
    position: absolute;
    top: 0;
    left: 0;
    background: white;
    -webkit-transform: rotateY(-180deg);
    -moz-transform: rotateY(-180deg);
    -o-transform: rotateY(-180deg);
    -ms-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
}

.frontside,
.backside {
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transition: 1s;
    -webkit-transform-style: preserve-3d;
    -moz-transition: 1s;
    -moz-transform-style: preserve-3d;
    -o-transition: 1s;
    -o-transform-style: preserve-3d;
    -ms-transition: 1s;
    -ms-transform-style: preserve-3d;
    transition: 1s;
    transform-style: preserve-3d;
}

.frontside .card,
.backside .card {
    min-height: 312px;
}

.backside .card .card-body {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
}

.backside .card a {
    font-size: 18px;
    color: #020058 !important;
}

.frontside .card .card-title,
.backside .card .card-title {
    text-align: center;
    color: #020058 !important;
}

.card-text {
    color: #808080 !important;
}

.list-inline-item .social-icon:hover {
    color: orangered !important;
}

.card-img img {
    max-height: 245px !important;
    width: -webkit-fill-available;
    object-fit: contain;
}

.card-img {
    width: 400px;
    margin-top: 40px;
}

.card-img i {
    font-size: 160px;
}

.card-body {
    margin-top: 35px;
}
</style>