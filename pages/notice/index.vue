<template>
    <section class="programs__page">

        <HeadVue text="Notice Board" subtitle="/ Notice" />

        <div class="main__programs-content">
            <div class="users-content-head">
                <h3 class="users-content-title">All Notices</h3>
                <div class="main__all-btn">
                    <button class="main__programs-content-btn modalBtn"
                        style="gap: 24px; padding: 8.5px 20px 8.5px 20px">
                        <i class="bi bi-plus-lg"></i>


                        New Notice
                    </button>
                </div>
            </div>
            <div class="main__programs-content-block">
                <div class="main__content-block-head">
                    <h3 class="main__block-head-title">All Notice</h3>
                    <div class="main__block-head-item">
                        <div class="main__block-head-input">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search" />
                        </div>
                        <button>
                            <i class="bi bi-funnel"></i> Filter
                        </button>
                    </div>
                </div>


                <div class="table-responsive-md">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">
                                    <li class="main__programs-items">
                                        <label for="">To</label>
                                        <i class="bi bi-filter"></i>
                                    </li>
                                </th>
                                <th scope="col">
                                    <li class="main__programs-items">
                                        <label for="">Show</label>
                                        <i class="bi bi-filter"></i>
                                    </li>
                                </th>
                                <th scope="col">
                                    <li class="main__programs-items">
                                        <label for="">Title</label>
                                        <i class="bi bi-filter"></i>
                                    </li>
                                </th>
                                <th scope="col">
                                    <li class="main__programs-items">
                                        <label for="">Body</label>
                                        <i class="bi bi-filter"></i>
                                    </li>
                                </th>
                                <th scope="col">
                                    <li class="main__programs-items">
                                        <label for="">Created</label>
                                        <i class="bi bi-filter"></i>
                                    </li>
                                </th>
                                <th scope="col">
                                    <li class="main__programs-items">
                                        <label for="">Action</label>
                                        <i class="bi bi-filter"></i>

                                    </li>
                                </th>
                            </tr>
                        </thead>
                        <tbody v-if="lists.length > 0">
                            <tr v-for="list in lists" :key="list.credits">
                                <td>{{ list.id }}</td>
                                <td>{{ list.email }}</td>
                                <td>{{ list.firstName }}</td>
                                <td>{{ list.lastName }}</td>
                                <td>{{ list.phoneNumber }}</td>
                                <td>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>{{ list.action }}</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p class="notice__content-p" v-if="lists.length <= 0">No data available in table</p>

                <div class="main__programs-sub notice__content-border">
                    <div class="main__programs-sub-item">
                        <select name="" id="">
                            <option value="">0</option>
                        </select>
                        <h3>Items per page</h3>
                        <p>0 of 0 items</p>
                    </div>
                    <div class="main__programs-sub-item">
                        <select name="" id="">
                            <option value="">0</option>
                        </select>
                        <p>of 0 pages</p>

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
export default {
    components: {
        HeadVue
    },
    data() {
        return {
            lists: [
                // {
                //     id: '20M013',
                //     email: 'a.akhmedjanov@akfauniversity.org',
                //     firstName: 'Azamat',
                //     lastName: 'Akhmedjanov',
                //     phoneNumber: '+998 90 122 33 44',
                //     action: 'Select'
                // },
            ]
        }
    }
}

</script>

