<template>
    <div class="col-lg-6">
        <div class="about-content">
            <div class="content-title style1">
                <span>Get To Know Us</span>
                <h2>Do you need help managing your medications?</h2>
                <p>We can help! Our pharmacists are highly trained and experienced in helping people manage
                    their medications. We will work with you to create a personalized plan that makes it easy
                    for you to take your medications correctly.</p>
                <p>We want to help you live a healthier life. Managing your medications is an important part of
                    staying healthy, and we’re here to make it easy for you.</p>
            </div>
            <ul class="content-feature-list list-style style3">
                <li><span><i class="fas fa-check-double"></i></span>Prescription Refills and Transfers</li>
                <li><span><i class="fas fa-check-double"></i></span>Medication Adherence</li>
                <li><span><i class="fas fa-check-double"></i></span>Home Delivery</li>
                <li><span><i class="fas fa-check-double"></i></span>Immunizations</li>
                <li><span><i class="fas fa-check-double"></i></span>Medication Synchronization</li>
            </ul>

        </div>
    </div>
</template>

<script>
export default {
    name: "index"
}
</script>

<style scoped>
.content-title {
    margin-bottom: 25px;
    position: relative;
    margin-top: -2px;
}
.content-title.style1 span {
    color: orangered;
    display: inline-block;
    font-weight: 600;
    margin: 0 0 10px;
    position: relative;
    z-index: 1;
    line-height: 1;
}

.content-title h2 {
    font-weight: 700;
    font-size: 44px;
    line-height: 1.3;
    margin: 0;
    color: #484848;
    font-family: "Roboto Condensed", sans-serif;
}

.section-title p, .content-title p {
    margin: 12px 0 0;
    font-size: 16px;
    line-height: 1.8;
    color: #666666;
}

.content-feature-list {
    margin: 0 0 28px 0;
}

.content-feature-list.style3 li span, .content-feature-list.style4 li span {
    position: absolute;
    top: -4px;
    left: 0;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #F3F4F6;
    text-align: center;
}

.list-style {
    padding: 0;
    list-style: none;
}

.content-feature-list.style3 li {
    font-weight: 600;
    color: #484848;
    font-size: 18px;
    padding-left: 45px;
    margin-bottom: 25px;
    position: relative;
}

.content-feature-list.style3 li span i, .content-feature-list.style4 li span i {
    position: relative;
    color: orangered;
    top: auto;
    left: auto;
    font-size: 20px;
    line-height: 34px;
    margin: 0 auto;
}

@media screen and (max-width: 992px) {
    .content-title {
        text-align: center !important;
    }

    .content-title h2 {
        font-size: 20px !important;
    }
}
</style>