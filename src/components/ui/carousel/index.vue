<template>
    <Carousel class="custom-carousel" :items-to-show="show" :wrap-around="wrap" @before-init="handleBeforeInit">
        <Slide v-for="slide in data" :key="slide">
            <div class="carousel__item">
                <component :is="component" :data='slide'/>
            </div>
        </Slide>
    </Carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import {Carousel, Slide} from 'vue3-carousel';

export default {
    name: "ui-carousel",
    components: {
        Slide,
        Carousel,
    },
    props: {
        wrap: {
          required: false,
        },
        data: {
            required: true,
        },
        component: {
            required: true,
        },
    },
    data: () => ({
            show: 4,
    }),
    methods: {
        handleBeforeInit() {
            if (window.innerWidth >= 280 && window.innerWidth <= 772 ) {
                this.show = 1;
            } else if (window.innerWidth >= 772 && window.innerWidth <= 992) {
                this.show = 2;
            }
        },
    },
}
</script>