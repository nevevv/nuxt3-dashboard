<template>
    <section class="programs__page">

        <HeadVue text="Data Export" subtitle="/ Students" />


        <div class="export__content">
            <h2 class="export__content-title">Export</h2>

            <div class="export__content-block">
                <div class="export__content-item">
                    <div>
                        <h3 class="export__item-title">File</h3>
                        <p class="export__item-text">Deans</p>
                    </div>

                    <div class="export__content-upl">
                        <img src="@/static/images/Upload-white.png">
                        <p class="export__content-sub">Export XLSX</p>
                    </div>

                </div>
                <div class="export__content-item">
                    <div>
                        <h3 class="export__item-title">File</h3>
                        <p class="export__item-text">Staff</p>
                    </div>

                    <div class="export__content-upl">
                        <img src="@/static/images/Upload-white.png">
                        <p class="export__content-sub">Export XLSX</p>
                    </div>

                </div>
                <div class="export__content-item">
                    <div>
                        <h3 class="export__item-title">File</h3>
                        <p class="export__item-text">Departments</p>
                    </div>

                    <div class="export__content-upl">
                        <img src="@/static/images/Upload-white.png">
                        <p class="export__content-sub">Export XLSX</p>
                    </div>

                </div>
                <div class="export__content-item">
                    <div>
                        <h3 class="export__item-title">File</h3>
                        <p class="export__item-text">All Students</p>
                    </div>

                    <div class="export__content-upl">
                        <img src="@/static/images/Upload-white.png">
                        <p class="export__content-sub">Export XLSX</p>
                    </div>

                </div>
                <div class="export__content-item">
                    <div>
                        <h3 class="export__item-title">File</h3>
                        <p class="export__item-text">All Courses</p>
                    </div>

                    <div class="export__content-upl">
                        <img src="@/static/images/Upload-white.png">
                        <p class="export__content-sub">Export XLSX</p>
                    </div>

                </div>
                <div class="export__content-item">
                    <div>
                        <h3 class="export__item-title">File</h3>
                        <p class="export__item-text">Assigned Courses</p>
                    </div>

                    <div class="export__content-upl">
                        <img src="@/static/images/Upload-white.png">
                        <p class="export__content-sub">Export XLSX</p>
                    </div>

                </div>

            </div>
        </div>

    </section>
</template>

<script>

definePageMeta({
    middleware: ['guest'],
    pageTransition: {
        name: 'page'
    }
})


import HeadVue from '~~/components/Head.vue';

export default {
    components: {
        HeadVue
    }
}


</script>


