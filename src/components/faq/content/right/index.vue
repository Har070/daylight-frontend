<template>
    <div class="col-lg-6">
        <div class="faq-content">
            <div class="content-title faq-style">
                <span>People Also Ask</span>
                <h2>Frequently Asked Questions</h2>
            </div>
            <div class="accordion" id="accordion-one">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <span>
                                <i class="fas fa-chevron-down down"></i>
                                <i class="fas fa-chevron-up up"></i>
                            </span>
                            What services do you provide?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                         data-bs-parent="#accordion-one">
                        <div class="accordion-body">
                            <div class="single-product-text">
                                <ul>
                                    <li class="grey-text">Medication Services</li>
                                    <li class="grey-text">Over The Counter</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <span>
                               <i class="fas fa-chevron-down down"></i>
                               <i class="fas fa-chevron-up up"></i>
                            </span>
                            Where are you located?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse " aria-labelledby="headingTwo"
                         data-bs-parent="#accordion-one">
                        <div class="accordion-body">
                            <p class="grey-text">
                                Our pharmacy is located at 14841 Burbank Blvd, Sherman Oaks, CA 91411
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <span>
                                <i class="fas fa-chevron-down down"></i>
                                <i class="fas fa-chevron-up up"></i>
                            </span>
                            How Quickly will my Prescriptions be ready?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse " aria-labelledby="headingThree"
                         data-bs-parent="#accordion-one">
                        <div class="accordion-body">
                            <p class="grey-text">At Daylight Pharmacy most prescriptions are filled within 5 minutes.
                                Compounds depend on
                                complexity and availability, and range between couple hours to two business days. Please
                                stop by the pharmacy for an accurate timeline.</p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <span>
                                 <i class="fas fa-chevron-down down"></i>
                               <i class="fas fa-chevron-up up"></i>
                            </span>
                            Is there a Charge for Prescription Delivery?
                        </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                         data-bs-parent="#accordion-one">
                        <div class="accordion-body">
                            <p class="grey-text">Daylight Pharmacy will deliver most prescription medications the same
                                day and at NO cost
                                for our neighborhood customers. For customers living outside the neighborhood please
                                contact us at (818) 877-7788 for details on delivery availability. Medications which are
                                not kept in stock may take an additional day to deliver.</p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFive">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            <span>
                               <i class="fas fa-chevron-down down"></i>
                               <i class="fas fa-chevron-up up"></i>
                            </span>
                            Can I receive all my Travel Immunizations at this Pharmacy?
                        </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse " aria-labelledby="headingFive"
                         data-bs-parent="#accordion-one">
                        <div class="accordion-body">
                            <p class="grey-text">Daylight Pharmacy proudly offers travel immunizations. Please call your
                                trusted
                                pharmacists to inquire about immunizations which will help protect you during your
                                travels. We have resources which can help ease your mind and help you concentrate on
                                enjoying your vacation, wherever it may take you.</p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingSix">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            <span>
                               <i class="fas fa-chevron-down down"></i>
                               <i class="fas fa-chevron-up up"></i>
                            </span>
                            Are the prices competitive?
                        </button>
                    </h2>
                    <div id="collapseSix" class="accordion-collapse collapse " aria-labelledby="headingSix"
                         data-bs-parent="#accordion-one">
                        <div class="accordion-body">
                            <p class="grey-text">Daylight Pharmacy tends to have the lowest prices when compared in the
                                neighborhood and
                                will be happy to match prescription prices whenever possible. We are proud to keep our
                                prices low and our quality the highest for our neighborhood. Quality and Care does not
                                have to come with a large price tag.</p>
                        </div>
                    </div>
                </div>
            </div>
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

.content-title.faq-style span {
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

.accordion-item:first-of-type {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
}

.accordion-item {
    border: none;
    margin: 0 0 15px;
    background: transparent;
}

.accordion-item .accordion-header {
    font-weight: 700;
    line-height: 1.4;
    color: #484848;
    font-family: "Roboto Condensed", sans-serif;
}

.accordion-item .accordion-header .accordion-button.collapsed {
    color: #484848;
    border: 1px solid rgba(2, 45, 93, 0.3);
}

.accordion-item .accordion-header .accordion-button:not(collapsed) {
    border: 1px solid rgba(255, 93, 57, 0.28);
}

.accordion-item .accordion-header .accordion-button {
    border-radius: 5px 5px 0 0;
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    border-radius: 5px;
    color: #484848;
    text-align: left;
    align-items: center;
    padding: 15px 65px 15px 20px;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    background-color: transparent;
    border: 1px solid rgba(255, 93, 57, 0.28);
    box-shadow: none;
}

.accordion-item:first-of-type .accordion-button {
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
}

.accordion-button {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem 1.25rem;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    background-color: #fff;
    border: 0;
    border-radius: 0;
    overflow-anchor: none;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out, border-radius .15s ease;
}

.accordion-item .accordion-header .accordion-button span {
    display: inline-block;
    min-width: 50px;
    text-align: center;
    position: absolute;
    top: 29px;
    right: 4px;
    border-radius: 5px;
}

.accordion-item .accordion-header .accordion-button.collapsed span i {
    color: #484848;
}

.accordion-item .accordion-header .accordion-button:not(collapsed) span i {
    color: orangered;
}

.accordion-button:not(.collapsed) span i.down {
    visibility: hidden;
    opacity: 0;
}

.accordion-item .accordion-header .accordion-button span i.up {
    visibility: hidden;
    opacity: 0;
}

.accordion-button:not(.collapsed) span i.up {
    visibility: visible !important;
    opacity: 1 !important;
}

.accordion-item .accordion-header .accordion-button span i {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    line-height: 0.8;
    color: #000;
}

.accordion-item .accordion-header .accordion-button:not(.collapsed) {
    background: transparent !important;
    border-bottom: none;
}

.accordion-button::after {
    display: none;
}

.accordion-item .accordion-collapse .accordion-body {
    border: 1px solid rgba(255, 93, 57, 0.28);
    border-top: none;
    padding: 0 20px 20px;
}

.accordion-collapse {
    border: none;
}

.grey-text {
    margin: 0;
    font-size: 16px;
    line-height: 1.8;
    color: #666666;
}

.accordion-body {
    padding: 1rem 1.25rem;
}

.accordion-item .accordion-body {
    border: none;
    padding: 20px 20px 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.accordion-item .accordion-collapse .accordion-body {
    border: 1px solid rgba(255, 93, 57, 0.28);
    border-top: none;
    padding: 0 20px 20px;
}
</style>