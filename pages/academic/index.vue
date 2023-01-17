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
                            <i class="bi bi-search"></i>
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        </div>
                        <button>
                            <i class="bi bi-funnel"></i>
                            Filter
                        </button>
                    </div>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th class="th">Title</th>
                            <th class="th">Date</th>
                            <th class="th">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="list in lists" :key="list.credits">
                            <td>{{ list.title }}</td>
                            <td>{{ list.date }}</td>
                            <td>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>

                            </td>
                        </tr>
                    </tbody>
                </table>

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




<style lang="scss" scoped>
$gl-xs : "screen and (max-width: 35.5em)"; // up to 568px

@media #{$gl-xs} {

    table {
        display: block;
        margin-top: 20px;

        >*,
        tr,
        td,
        th {
            display: block
        }

        thead {
            display: none
        }

        tbody tr {
            height: auto;
            padding: 8px 0;

            td {
                padding-left: 45%;
                margin-bottom: 12px;

                &:last-child {
                    margin-bottom: 0
                }

                &:before {
                    position: absolute;
                    font-weight: 700;
                    width: 40%;
                    left: 10px;
                    top: 0
                }

                &:nth-child(1):before {
                    content: "Year";
                }

                &:nth-child(2):before {
                    content: "Date";
                }

                &:nth-child(3):before {
                    content: "Action";
                }

            }
        }
    }
}
</style>