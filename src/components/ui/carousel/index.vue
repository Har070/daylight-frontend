<template>
    <Carousel class="custom-carousel" :items-to-show="show" :wrap-around="wrap">
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
        show: {
          required: true,
        },
        wrap: {
          required: true,
        },
        data: {
            required: true,
        },
        component: {
            required: true,
        },
    },
}
</script>