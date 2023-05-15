<template>
    <div class="container">
        <div class="row gx-5 align-items-center">
            <left-side data-aos="zoom-in-right"/>
            <right-side data-aos="zoom-in-left"/>
        </div>
    </div>
</template>

<script>

import LeftSide from '@/components/department/content/left';
import RightSide from '@/components/department/content/right';

export default {
    name: "index",
    components: {
        LeftSide,
        RightSide,
    },
}
</script>