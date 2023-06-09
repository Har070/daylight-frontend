<template>
    <footer class="text-white light-gray">
        <div class="container p-4 pb-0">
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
                    <h6 class="text-uppercase mb-4 font-weight-bold">Opening hours</h6>
                    <table class="table">
                        <tbody>
                        <tr>
                            <td class="light-gray text-white">Mon - Thu :</td>
                            <td class="light-gray text-white">8am - 9pm</td>
                        </tr>
                        <tr>
                            <td class="light-gray text-white">Fri - Sat :</td>
                            <td class="light-gray text-white">8am - 1am</td>
                        </tr>
                        <tr>
                            <td class="light-gray text-white">Sunday :</td>
                            <td class="light-gray text-white">9am - 10pm</td>
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
        </div>
        <div class="text-center dark-gray p-3">
            © 2023 Daylight Pharmacy. All Rights Reserved
        </div>
    </footer>
</template>

<script>
export default {
    name: "app-footer"
}
</script>

<style scoped>
.light-gray {
    background-color: #484848;
}

.dark-gray {
    background-color: rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: 992px) {
    .p-4 {
        padding: 0.5rem !important;
    }

    .mb-4 {
        margin-bottom: 1em !important;
    }

    .row div {
        text-align: start !important;
    }

    .row div h6 {
        font-weight: bold;
        font-size: 20px !important;
    }
}
</style>