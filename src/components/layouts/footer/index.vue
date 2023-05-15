<template>
    <!-- Footer -->
    <footer
        class="text-center text-lg-start text-white footer-bg-color">
        <div class="container p-4 pb-0">
            <section class="">
                <div class="row">
                    <div class="col-md-3 col-lg-3 col-xl-3 mt-3">
                        <h6 class="text-uppercase mb-4 font-weight-bold">
                            Daylight Pharmacy
                        </h6>
                        <p>
                            Daylight Pharmacy is committed to providing high-quality pharmacy services that result in
                            optimal medication outcomes.
                        </p>
                    </div>
                    <div class="col-md-2 col-lg-2 col-xl-4 mt-3">
                        <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                        <p><i class="fas fa-print mr-3"></i> 818.616.2700</p>
                        <p><i class="fas fa-phone mr-3"></i> 818.600.0700</p>
                        <p><i class="fas fa-envelope mr-3"></i> daylightfarmacyinc@gmail.com</p>
                        <p><i class="fas fa-home mr-3 text-nowrap"></i> 14841 Burbank Blvd, Sherman Oaks, CA 91411</p>
                    </div>
                    <div class="col-md-4 col-lg-4 col-xl-3 mt-3">
                        <h5 class="text-uppercase mb-4">Opening hours</h5>
                        <table class="table text-center text-white">
                            <tbody class="fw-normal">
                            <tr>
                                <td>Mon - Thu:</td>
                                <td>8am - 9pm</td>
                            </tr>
                            <tr>
                                <td>Fri - Sat:</td>
                                <td>8am - 1am</td>
                            </tr>
                            <tr>
                                <td>Sunday:</td>
                                <td>9am - 10pm</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-2 mt-3">
                        <h6 class="text-uppercase mb-4 font-weight-bold">Follow us</h6>
                        <a class="btn text-white m-1 rounded-circle" style="background-color: #3b5998"
                           target="_blank" href="https://www.facebook.com/">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a class="btn text-white m-1 rounded-circle" style="background-color: #ac2bac"
                           target="_blank" href="https://www.instagram.com/">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a class="btn text-white m-1 rounded-circle" style="background-color: #55acee"
                           target="_blank" href="https://www.twitter.com/">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a class="btn text-white m-1 rounded-circle" style="background-color: #0082ca"
                           target="_blank" href="https://https://www.linkedin.com/">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
        <div
            class="text-center p-3"
            style="background-color: rgba(0, 0, 0, 0.2)"
        >
            © 2023 Daylight Pharmacy. All Rights Reserved
<!--            <a target="_blank" class="text-white" href="https://daylightpharmacy.org/">-->
<!--                daylightpharmacy.org-->
<!--            </a>-->
        </div>
    </footer>
    <!-- /Footer -->
</template>

<script>
export default {
    name: "app-footer"
}
</script>

<style scoped>
.footer-bg-color {
    background-color: #484848;
}
</style>