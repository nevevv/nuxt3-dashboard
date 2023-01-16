<template>
    <section class="programs__page">
        <HeadVue text="Users" subtitle="/ Users" />
        <div class="main__programs-content">
            <div class="users-content-head">
                <h3 class="users-content-title">All users</h3>
                <button class="main__programs-content-btn modalBtn" @click="showModal = !showModal">
                    <i class="bi bi-plus-lg"></i>
                    Create a New User
                </button>
            </div>
            <div class="main__programs-content-block">
                <div class="main__content-block-head">
                    <h3 class="main__block-head-title">All Users</h3>
                    <div class="main__block-head-item">
                        <div class="main__block-head-input">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search" />
                        </div>
                        <button>
                            <i class="bi bi-funnel"></i>
                            Filter
                        </button>
                        <button>
                            <i class="bi bi-calendar"></i>
                            Filter
                        </button>
                    </div>
                </div>

                <div class="table-responsive-md">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">
                                    <li class="main__programs-items">
                                        <label for="">Username</label>
                                        <i class="bi bi-filter"></i>
                                    </li>
                                </th>
                                <th scope="col">
                                    <li class="main__programs-items">
                                        <label for="">Email</label>
                                        <i class="bi bi-filter"></i>
                                    </li>
                                </th>
                                <th scope="col">
                                    <li class="main__programs-items">
                                        <label for="">First Name</label>
                                        <i class="bi bi-filter"></i>

                                    </li>
                                </th>
                                <th scope="col">
                                    <li class="main__programs-items">
                                        <label for="">Last Name</label>
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
                        <tbody>
                            <tr v-for="list in lists" :key="list.credits">
                                <td>{{ list.username }}</td>
                                <td>{{ list.email }}</td>
                                <td>{{ list.firstName }}</td>
                                <td>{{ list.lastName }}</td>
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

                <div class="main__programs-sub">
                    <div class="main__programs-sub-item">
                        <select name="" id="">
                            <option value="">10</option>
                        </select>
                        <h3>Items per page</h3>
                        <p>12 of 200 items</p>
                    </div>
                    <div class="main__programs-sub-item">
                        <select name="" id="">
                            <option value="">1</option>
                        </select>
                        <p>of 10 pages</p>

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
            showModal: false,
            createTitle: 'Create new User',
            username: 'Username',
            email: 'Email',
            firstName: 'First Name',
            lastName: 'Last Name',
            lists: [
                {
                    username: 'a.akhmedjanov',
                    email: 'a.akhmedjanov@akfauniversity.org',
                    firstName: 'Azamat',
                    lastName: 'Akhmedjanov',
                    action: 'Select'
                },
                {
                    username: 'a.akhmedjanov',
                    email: 'a.akhmedjanov@akfauniversity.org',
                    firstName: 'Azamat',
                    lastName: 'Akhmedjanov',
                    action: 'Select'
                },
                {
                    username: 'a.akhmedjanov',
                    email: 'a.akhmedjanov@akfauniversity.org',
                    firstName: 'Azamat',
                    lastName: 'Akhmedjanov',
                    action: 'Select'
                },
                {
                    username: 'a.akhmedjanov',
                    email: 'a.akhmedjanov@akfauniversity.org',
                    firstName: 'Azamat',
                    lastName: 'Akhmedjanov',
                    action: 'Select'
                },
                {
                    username: 'a.akhmedjanov',
                    email: 'a.akhmedjanov@akfauniversity.org',
                    firstName: 'Azamat',
                    lastName: 'Akhmedjanov',
                    action: 'Select'
                },
                {
                    username: 'a.akhmedjanov',
                    email: 'a.akhmedjanov@akfauniversity.org',
                    firstName: 'Azamat',
                    lastName: 'Akhmedjanov',
                    action: 'Select'
                },
                {
                    username: 'a.akhmedjanov',
                    email: 'a.akhmedjanov@akfauniversity.org',
                    firstName: 'Azamat',
                    lastName: 'Akhmedjanov',
                    action: 'Select'
                },
                {
                    username: 'a.akhmedjanov',
                    email: 'a.akhmedjanov@akfauniversity.org',
                    firstName: 'Azamat',
                    lastName: 'Akhmedjanov',
                    action: 'Select'
                },
                {
                    username: 'a.akhmedjanov',
                    email: 'a.akhmedjanov@akfauniversity.org',
                    firstName: 'Azamat',
                    lastName: 'Akhmedjanov',
                    action: 'Select'
                },

            ]
        }
    },


}

</script>

