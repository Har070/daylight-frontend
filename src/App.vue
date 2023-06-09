<template>
    <div>
        <app-header/>
        <router-view class="overflow-hidden"/>
        <app-footer/>
    </div>
</template>

<script>
export default {
    name: "App",
}
</script>