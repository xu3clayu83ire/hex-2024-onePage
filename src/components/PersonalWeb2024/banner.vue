<template>
    <div class="banner bg-black">
        <div class="container">
            <div class="row d-flex align-items-center">
                <div class="col-6">
                    <img src="../../assets/images/PersonalWeb2024/people.png" class="img-fluid">
                </div>
                <div class="col-lg-6">
                    <h1 class="text-white">
                        Hi<br>
                        I’m a front-end<br>
                        developer
                        <p class="name text-end text-pr-primary">William</p>
                    </h1>
                    <div class="text-end">
                        <button class="btn btn-light rounded-5 fs-6 py-3 px-6 border-0">contact me
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_2_112" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                    width="24" height="24">
                                    <rect width="24" height="24" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_2_112)">
                                    <path d="M6.4 18L5 16.6L14.6 7H6V5H18V17H16V8.4L6.4 18Z" fill="#1C1B1F" />
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
    .banner {
        padding-top: 72px;
        padding-bottom: 32px;
    }

    .banner h1 {
        font-size: 64px;
        line-height: 1.5;
    }

    .banner h1>.name {
        font-size: 128px;
    }
</style>