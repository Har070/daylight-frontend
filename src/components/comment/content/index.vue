<template>
    <div class="container">
        <div class="row">
            <div class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                <div class="content-title text-center mb-30">
                    <span>Comments</span>
                    <h2>We assure customer satisfaction with personal care</h2>
                </div>
            </div>
        </div>
        <div class="mt-3">
            <ui-carousel :component="'comment-card'" :wrap="true" :show="cardCount" :data="comments"/>
        </div>
    </div>
</template>

<script>
export default {
    name: "index",
    data: () => ({
        cardCount: 3,
        comments: [
            {
                user: {
                    name: 'Henry M.',
                    image: require("@/assets/images/avatar/avatar.png"),
                },
                created_at: 'Feb 2023',
                text: '“They provide the best customer service to their patients and treat them like family. They make every transaction smooth and easy and not to mention but they also know what they are talking about. Very professional staff and I wouldn’t go anywhere else. I highly recommend Daylight Pharmacy to everyone.”',
            },
            {
                user: {
                    name: 'Anya T.',
                    image: require("@/assets/images/avatar/avatar.png"),
                },
                created_at: 'Jan 2023',
                text: '“The team is great and they fill your prescription promptly. They have been supporting this area of Burbank successfully for years. With convenient parking and prompt service. Highly recommend Daylight Pharmacy to everyone.”',
            },

            {
                user: {
                    name: 'Mery A.',
                    image: require("@/assets/images/avatar/avatar.png"),
                },
                created_at: 'Jan 2023',
                text: '“I\'ve been coming to this pharmacy for almost the past five years, and they are always so gracious. It\'s so much nicer than going to a big chain pharmacy.”',
            },
        ],
    }),
    mounted() {
        if (window.innerWidth >= 280 && window.innerWidth <= 772 ) this.cardCount = 1;
        if (window.innerWidth >= 772 && window.innerWidth <= 992 ) this.cardCount = 2;
    }
}
</script>

<style scoped>
.content-title {
    position: relative;
}

.mb-30 {
    margin-bottom: 30px !important;
}

.content-title span {
    color: orangered;
    display: inline-block;
    font-weight: 600;
    margin: 0 0 10px;
    position: relative;
    z-index: 1;
    line-height: 1;
}

.content-title h2 {
    font-size: 40px;
    margin: 0;
    line-height: 1.3;
    color: #484848;
    font-weight: 700;
    font-family: "Roboto Condensed", sans-serif;
}

@media screen and (max-width: 992px) {
    .content-title {
        text-align: center !important;
        margin-bottom: 0 !important;
    }

    .content-title h2 {
        font-size: 20px !important;
    }
}
</style>