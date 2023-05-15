<template>
    <header class="navbar-color fixed-top">
        <div class="container">
            <div class="header-bottom">
                <nav class="navbar navbar-expand-lg navbar-light header-sticky">
                    <div class="color-style">
                        <a role="button" @click="$router.push('/')">
                            <span>
                                <strong>
                                    Daylight Pharmacy
                                </strong>
                            </span>
                        </a>
                    </div>
                    <div class="collapse navbar-collapse justify-content-end">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link color-style" role="button" @click="$router.push('/')">
                                    Home
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link color-style" role="button" @click="$router.push('/services')">
                                    Services
                                </a>
                            </li>
<!--                            <li class="nav-item">-->
<!--                                <a class="nav-link color-style" role="button" @click="$router.push('/blog')">-->
<!--                                    Blog-->
<!--                                </a>-->
<!--                            </li>-->
                            <li class="nav-item">
                                <a class="nav-link color-style" role="button" @click="$router.push('/about')">
                                    About
                                </a>
                            </li>
<!--                            <li class="nav-item">-->
<!--                                <a class="nav-link color-style" role="button" @click="$router.push('/contact')">-->
<!--                                    Contact-->
<!--                                </a>-->
<!--                            </li>-->
                        </ul>
                    </div>
                    <div class="d-flex justify-content-end social-part">
                        <div class="social-icon">
                            <a class="color-style" target="_blank" href="https://www.facebook.com/">
                                <i class="fab fa-facebook"></i>
                            </a>
                        </div>
                        <div class="social-icon">
                            <a target="_blank" href="https://www.instagram.com/" class="color-style">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                        <div class="social-icon">
                            <a target="_blank" href="https://www.twitter.com/" class="color-style">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </div>
                        <div class="social-icon">
                            <a target="_blank" href="https://www.linkedin.com/" class="color-style">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "app-header",
}
</script>

<style scoped>
.navbar-color {
    background-color: #484848;
}

.social-part {
    margin-left: 40px;
}

.social-icon {
    margin-left: 20px;
}

.color-style {
    color: rgba(255, 255, 255, 0.8)
}

.color-style:hover {
    color: orangered;
}
</style>