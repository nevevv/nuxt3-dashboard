<template>
    <section class="programs__page">

        <HeadVue text="Finances" subtitle="/ Students" />


        <h2 class="finances__content-head">2020 / Fall</h2>

        <div class="main__programs-content">
            <div class="main__programs-content-block">
                <table class="table table-bordered finances__block-table">
                    <thead>
                        <tr scope="col">
                            <th colspan="1" class="finance-table__head finance-table-title"></th>
                            <th colspan="4" class="finance-table__head finance-table-title">
                                UZS
                            </th>
                            <th colspan="4" class="finance-table__head finance-table-title">
                                USD
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th class="finance-table-title">School and Year</th>
                            <th class="finance-table-title">Total</th>
                            <th class="finance-table-title">Paid</th>
                            <th class="finance-table-title">In Debt</th>
                            <th class="finance-table-title">Debt Amount</th>

                            <th class="finance-table-title">Total</th>
                            <th class="finance-table-title">Paid</th>
                            <th class="finance-table-title">In Debt</th>
                            <th class="finance-table-title">Debt Amount</th>
                        </tr>
                        <tr>
                            <th class="finance-table-text">School and Year</th>
                            <th class="finance-table-text" v-for="list in lists" :key="list.id">{{ list.cash }}</th>

                        </tr>
                        <tr>
                            <th class="finance-table-text">School and Year</th>
                            <th class="finance-table-text" v-for="list in lists" :key="list.id">{{ list.cash }}</th>
                        </tr>
                    </tbody>
                </table>
                <div class="main__programs-sub">
                    <div class="main__programs-sub-item">
                        <select name="" id="">
                            <option value="">3</option>
                        </select>
                        <h3>Items per page</h3>
                        <p>3 of 3 items</p>
                    </div>
                    <div class="main__programs-sub-item">
                        <select name="" id="">
                            <option value="">1</option>
                        </select>
                        <p>of 1 pages</p>

                        <div class="main__programs-sub-chevrons">
                            <i class="fa-solid fa-chevron-left"></i>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import HeadVue from '~~/components/Head.vue';

definePageMeta({
    middleware: ['guest'],
    pageTransition: {
        name: 'page'
    }
})


export default {

    data() {
        return {
            lists: [
                {
                    cash: 0
                },
                {
                    cash: 0
                },
                {
                    cash: 0
                },
                {
                    cash: 0
                },
                {
                    cash: 0
                },
                {
                    cash: 0
                },
                {
                    cash: 0
                },
                {
                    cash: 0
                },
            ]
        };
    },
    components: {
        HeadVue
    }
}

</script>
