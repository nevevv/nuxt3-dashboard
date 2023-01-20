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
                            <th class="th">ID</th>
                            <th class="th">mail</th>
                            <th class="th">Name</th>
                            <th class="th">Surname</th>
                            <th class="th">Phone</th>
                            <th class="th">Department</th>
                            <th class="th">Action</th>
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
                                    <option selected>Action</option>
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

definePageMeta({
    middleware: ['guest'],
})
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
                    content: "ID";
                }

                &:nth-child(2):before {
                    content: "Mail";
                }

                &:nth-child(3):before {
                    content: "Name";
                }

                &:nth-child(4):before {
                    content: "Surname";
                }

                &:nth-child(5):before {
                    content: "Number";
                }

                &:nth-child(6):before {
                    content: "Department";
                }

                &:nth-child(7):before {
                    content: "Action";
                }
            }
        }
    }
}
</style>