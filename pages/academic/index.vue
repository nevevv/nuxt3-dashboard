<template>
    <section class="programs__page">
        <Headvue text="Academic years" subtitle="/ Students" />
        <div class="main__programs-content">
            <div class="users-content-head justify-content-end">
                <div class="main__all-btn">
                </div>
            </div>
            <div class="main__programs-content-block">
                <div class="main__content-block-head">
                    <h3 class="main__block-head-title">Academic Years</h3>
                    <div class="main__block-head-item">
                        <div class="main__block-head-input">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search" />
                        </div>
                        <button>
                            <i class="bi bi-funnel"></i>
                            Filter
                        </button>
                    </div>
                </div>

                <div class="user__content-lists d-grid" style="grid-template-columns: 1.4fr 2.8fr 0.4fr">
                    <div class="user__content-list">
                        <li class="user__content-item">
                            <div class="main__programs-items-check user-items-check">
                                <img src="images/check.png" alt="" />
                            </div>
                            Year
                            <i class="bi bi-filter"></i>
                        </li>


                        <li class="user__content-item" v-for="list in lists" :key="list.id" style="color: #6e7079;
                      text-decoration: underline !important;
                    ">
                            <div class="main__programs-items-check user-items-check">
                                <img src="images/check.png" alt="" />
                            </div>
                            {{ list.title }}
                        </li>

                    </div>
                    <div class="user__content-list">
                        <li class="user__content-item">
                            Date of Admission
                            <i class="bi bi-filter"></i>
                        </li>
                        <li class="user__content-item" style="color: #6e7079" v-for="list in lists" :key="list.id">
                            {{ list.date }}
                        </li>
                    </div>
                    <div class="user__content-list" style="margin-right: 25px">
                        <li class="user__content-item">
                            Action
                            <i class="bi bi-filter"></i>

                        </li>
                        <li class="user__content-item" v-for="list in lists" :key="list.id">
                            <select name="" id="">
                                <option value="">{{ list.action }}</option>
                            </select>
                        </li>
                    </div>
                </div>

                <div class="main__programs-sub">
                    <div class="main__programs-sub-item">
                        <select name="" id="">
                            <option value="">3</option>
                        </select>
                        <h3>Items per page</h3>
                        <p>1-3 of 3 items</p>
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
import Headvue from '~~/components/Head.vue';

export default {
    components: {
        Headvue
    },
    data() {
        return {
            lists: [
                {
                    title: '2018',
                    date: 'Sept. 1, 2018',
                    action: 'Select'
                },
                {
                    title: '2019',
                    date: 'Sept. 1, 2018',
                    action: 'Select'
                },
                {
                    title: '2020',
                    date: 'Sept. 1, 2018',
                    action: 'Select'
                },
                {
                    title: '2021',
                    date: 'Sept. 1, 2018',
                    action: 'Select'
                },
            ]
        }
    }
}
</script>