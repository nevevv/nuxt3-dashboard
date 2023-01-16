<template>
    <section class="programs__page">

        <HeadVue text="Students Registration" subtitle="/ Students Registration" />
        <div class="main__programs-content">
            <div class="users-content-head">
                <h3 class="users-content-title">All students</h3>
                <div class="main__all-btn">
                    <button class="main__programs-content-btn modalBtn">
                        <i class="bi bi-plus-lg"></i>
                        Create a New User
                    </button>
                </div>
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
                                        <label for="">Phone Number</label>
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
                                <td>{{ list.phoneNumber }}</td>
                                <td>{{ list.department }}</td>
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
            lists: [
                {
                    id: '20M013',
                    email: 'a.akhmedjanov@akfauniversity.org',
                    firstName: 'Azamat',
                    lastName: 'Akhmedjanov',
                    phoneNumber: '+998 90 122 33 44',
                    department: 'Medical School',
                    action: 'Select'
                },
                {
                    id: '20M013',
                    email: 'a.akhmedjanov@akfauniversity.org',
                    firstName: 'Azamat',
                    lastName: 'Akhmedjanov',
                    phoneNumber: '+998 90 122 33 44',
                    department: 'Medical School',
                    action: 'Select'
                },
                {
                    id: '20M013',
                    email: 'a.akhmedjanov@akfauniversity.org',
                    firstName: 'Azamat',
                    lastName: 'Akhmedjanov',
                    phoneNumber: '+998 90 122 33 44',
                    department: 'Medical School',
                    action: 'Select'
                },
                {
                    id: '20M013',
                    email: 'a.akhmedjanov@akfauniversity.org',
                    firstName: 'Azamat',
                    lastName: 'Akhmedjanov',
                    phoneNumber: '+998 90 122 33 44',
                    department: 'Medical School',
                    action: 'Select'
                },
                {
                    id: '20M013',
                    email: 'a.akhmedjanov@akfauniversity.org',
                    firstName: 'Azamat',
                    lastName: 'Akhmedjanov',
                    phoneNumber: '+998 90 122 33 44',
                    department: 'Medical School',
                    action: 'Select'
                },
                {
                    id: '20M013',
                    email: 'a.akhmedjanov@akfauniversity.org',
                    firstName: 'Azamat',
                    lastName: 'Akhmedjanov',
                    phoneNumber: '+998 90 122 33 44',
                    department: 'Medical School',
                    action: 'Select'
                },
                {
                    id: '20M013',
                    email: 'a.akhmedjanov@akfauniversity.org',
                    firstName: 'Azamat',
                    lastName: 'Akhmedjanov',
                    phoneNumber: '+998 90 122 33 44',
                    department: 'Medical School',
                    action: 'Select'
                },
                {
                    id: '20M013',
                    email: 'a.akhmedjanov@akfauniversity.org',
                    firstName: 'Azamat',
                    lastName: 'Akhmedjanov',
                    phoneNumber: '+998 90 122 33 44',
                    department: 'Medical School',
                    action: 'Select'
                },
                {
                    id: '20M013',
                    email: 'a.akhmedjanov@akfauniversity.org',
                    firstName: 'Azamat',
                    lastName: 'Akhmedjanov',
                    phoneNumber: '+998 90 122 33 44',
                    department: 'Medical School',
                    action: 'Select'
                },
            ]
        }
    }
}
</script>

<style >
.students-reg-list {
    grid-template-columns: 1.1fr 1.8fr 0.8fr 0.8fr 1fr 0.8fr 0.5fr;
}

.students-reg-circle {
    width: 11px;
    height: 11px;
    background: #519c66;
    border: 1px solid #f0f0f0;
    border-radius: 50%;
}

.students__content-link {
    color: #5570f1;
    border-bottom: 1px solid #5570f1;
    font-family: var(--int400);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
}

.main__all-text {
    color: #6e7079;
    font-family: var(--int400);
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    display: flex;
    align-items: center;
}

.main__all-text select {
    border: none;
    background: none;
    color: #5570f1;
    font-family: var(--int400);
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    outline: none;
    appearance: none;
    margin-left: 12px;
}

.main__all-text select:not([multiple]) {
    padding-right: 1.8em;
    background-repeat: no-repeat;
    background-position: calc(100% - 0.25em) 0.35em;
    background-size: 0.85em auto;
}
</style>