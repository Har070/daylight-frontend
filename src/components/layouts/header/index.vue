<template>
    <header class="header-dark">
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <router-link class="nav-link color-style" aria-current="page" :to="{ name: 'home' }">
                    <span><strong>Daylight Pharmacy</strong></span>
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-pages"
                        aria-controls="navbar-pages" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="color-style"><i class="fas fa-bars fa-1x"></i></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbar-pages">
                    <div>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <router-link class="nav-link color-style" :class="$route.name === 'home' ? 'active':''"
                                             aria-current="page" :to="{ name: 'home' }">
                                    Home
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link color-style"
                                             :class="$route.name === 'services' ? 'active':''"
                                             aria-current="page" :to="{ name: 'services' }">
                                    Services
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link color-style" :class="$route.name === 'about' ? 'active':''"
                                             aria-current="page" :to="{ name: 'about' }">
                                    About
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="d-flex justify-content-end social-part">
                        <div>
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
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: "app-header",
}
</script>

<style scoped>
.header-dark {
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

.active {
    color: orangered !important;
}

@media screen and (max-width: 992px) {
    .social-part {
        margin-left: 0 !important;
        justify-content: start !important;
    }

    .social-icon {
        margin-left: 10px !important;
    }
}
</style>v