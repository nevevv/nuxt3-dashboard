<template>
    <section class="programs__page">

        <HeadVue text="Transfer Credits" subtitle="/ Students" />

        <div class="main__programs-content">
            <div class="users-content-head">
                <h3 class="users-content-title">Transferred Students</h3>
                <div class="main__all-btn">
                    <button class="main__programs-content-btn modalBtn">
                        <img src="images/plus.png" alt="" />

                        Add Transferred Student
                    </button>
                </div>
            </div>
            <div class="main__programs-content-block">
                <div class="main__content-block-head">
                    <h3 class="main__block-head-title">All Students</h3>
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

                <div class="table-responsive-md">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">
                                    <li class="main__programs-items">
                                        <label for="">Student ID</label>
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
                                        <label for="">Phone number</label>
                                        <i class="bi bi-filter"></i>

                                    </li>
                                </th>
                                <th scope="col">
                                    <li class="main__programs-items">
                                        <label for="">Start Date</label>
                                        <i class="bi bi-filter"></i>

                                    </li>
                                </th>
                                <th scope="col">
                                    <li class="main__programs-items">
                                        <label for="">Department</label>
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
                                <td>{{ list.id }}</td>
                                <td>{{ list.email }}</td>
                                <td>{{ list.firstName }}</td>
                                <td>{{ list.lastName }}</td>
                                <td>{{ list.number }}</td>
                                <td>{{ list.date }}</td>
                                <td>{{ list.department }}</td>
                                <td>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>{{ list.select }}</option>
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
            lists: [
                {
                    id: '20M013',
                    email: 'a.akhmedjanov@akfauniversity.org',
                    firstName: 'Azamat',
                    lastName: 'Akhmedjanov',
                    number: '+998 90 122 33 44',
                    date: '2020',
                    department: 'Medical School',
                    select: 'Select'
                },
                {
                    id: '20M013',
                    email: 'a.akhmedjanov@akfauniversity.org',
                    firstName: 'Azamat',
                    lastName: 'Akhmedjanov',
                    number: '+998 90 122 33 44',
                    date: '2020',
                    department: 'Medical School',
                    select: 'Select'
                },
                {
                    id: '20M013',
                    email: 'a.akhmedjanov@akfauniversity.org',
                    firstName: 'Azamat',
                    lastName: 'Akhmedjanov',
                    number: '+998 90 122 33 44',
                    date: '2020',
                    department: 'Medical School',
                    select: 'Select'
                },
                {
                    id: '20M013',
                    email: 'a.akhmedjanov@akfauniversity.org',
                    firstName: 'Azamat',
                    lastName: 'Akhmedjanov',
                    number: '+998 90 122 33 44',
                    date: '2020',
                    department: 'Medical School',
                    select: 'Select'
                },
                {
                    id: '20M013',
                    email: 'a.akhmedjanov@akfauniversity.org',
                    firstName: 'Azamat',
                    lastName: 'Akhmedjanov',
                    number: '+998 90 122 33 44',
                    date: '2020',
                    department: 'Medical School',
                    select: 'Select'
                },
                {
                    id: '20M013',
                    email: 'a.akhmedjanov@akfauniversity.org',
                    firstName: 'Azamat',
                    lastName: 'Akhmedjanov',
                    number: '+998 90 122 33 44',
                    date: '2020',
                    department: 'Medical School',
                    select: 'Select'
                },

            ]
        }
    }
}

</script>

