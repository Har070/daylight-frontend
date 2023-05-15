<template>
    <section id="department" class="pt-pb-50">
        <department-content/>
    </section>
</template>

<script>
import DepartmentContent from '@/components/department/content/index';

export default {
    name: "index",
    components: {
        DepartmentContent,
    },
}
</script>

<style scoped>
.pt-pb-50 {
    padding-top: 50px;
    padding-bottom: 50px;
}
</style>
