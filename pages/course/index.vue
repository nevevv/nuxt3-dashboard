<template>
    <section class="programs__page">

        <HeadVue text="Course Managements" subtitle="/ Students" />

        <div class="main__programs-content">
            <div class="users-content-head">
                <h3 class="users-content-title">Courses</h3>
                <div class="main__all-btn">
                    <button class="main__programs-content-btn modalBtn">
                        <img src="images/plus.png" alt="" />

                        Create a New Course
                    </button>
                </div>
            </div>
            <div class="main__programs-content-block">
                <div class="main__content-block-head">
                    <h3 class="main__block-head-title">All Courses</h3>
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
                            <th class="th">Code</th>
                            <th class="th">Min Credits</th>
                            <th class="th">Department</th>
                            <th class="th">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="list in lists" :key="list.credits">
                            <td>{{ list.title }}</td>
                            <td>{{ list.code }}</td>
                            <td>{{ list.credits }}</td>
                            <td>{{ list.program }}</td>
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
                            <option value="">10</option>
                        </select>
                        <h3>Items per page</h3>
                        <p>1-2 of 2 items</p>
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
export default {
    components: {
        HeadVue
    },
    data() {
        return {
            lists: [
                {
                    title: 'Biochemistry & Lab',
                    code: 'MBKD103',
                    credits: '4',
                    program: 'Medical School',
                    action: 'Select'
                },
                {
                    title: 'Biochemistry & Lab',
                    code: 'MBKD103',
                    credits: '4',
                    program: 'Medical School',
                    action: 'Select'
                },
                {
                    title: 'Biochemistry & Lab',
                    code: 'MBKD103',
                    credits: '4',
                    program: 'Medical School',
                    action: 'Select'
                },
                {
                    title: 'Biochemistry & Lab',
                    code: 'MBKD103',
                    credits: '4',
                    program: 'Medical School',
                    action: 'Select'
                },
                {
                    title: 'Biochemistry & Lab',
                    code: 'MBKD103',
                    credits: '4',
                    program: 'Medical School',
                    action: 'Select'
                },

            ]
        }
    }


}
</script>
