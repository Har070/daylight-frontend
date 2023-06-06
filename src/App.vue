<template>
    <div class="app">
        <app-header/>
        <router-view class="overflow-hidden mt-5"/>
        <app-footer/>
    </div>
</template>

<script>
export default {
    name: "App",
}
</script>