<template>
    <section class="programs__page">

        <HeadVue text="Undergraduate programs" subtitle="/ Undergraduate programs list" />
        <div class="main__programs-content">
            <div class="main__programs-content-head">
                <button class="main__programs-content-btn modalBtn" @click="showModal = !showModal">
                    <i class="bi bi-plus-lg"></i>
                    Create a New Program
                </button>
            </div>
            <div class="main__programs-content-block">
                <div class="main__content-block-head">
                    <h3 class="main__block-head-title">
                        Undergraduate programs list
                    </h3>
                    <div class="main__block-head-item">
                        <div class="main__block-head-input">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        </div>
                        <div style="display: flex; gap: 12px">
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
                </div>
                <table>
                    <thead>
                        <tr>
                            <th class="th">Course Title</th>
                            <th class="th">Program</th>
                            <th class="th">Degree</th>
                            <th class="th">Min Credits</th>
                            <th class="th">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- <tr>
                            <td>CES-9000</td>
                            <td>50mt</td>
                            <td>9mm</td>
                            <td>1/2"</td>
                            <td>Kangal / Coil</td>
                        </tr> -->
                        <tr v-for="list in lists" :key="list.credits">
                            <td>{{ list.title }}</td>
                            <td>{{ list.program }}</td>
                            <td>{{ list.degree }}</td>
                            <td>{{ list.credits }}</td>
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
        <Modal v-if="showModal" :modalTitle="createTitle">
            <input type="text" :placeholder="modalTitle" v-if="modalTitle" v-model="input1" />
            <input type="text" :placeholder="minCredits" v-if="minCredits" v-model="input2" />
            <input type="text" :placeholder="program" v-if="program" v-model="input3" />
            <input type="text" :placeholder="degree" v-if="degree" v-model="input4" />
            <div>
                <button @click="showModal = !showModal" class="modal-programs-closeBtn">Cancel</button>
                <button @click.prevent="addNote" class="modal-programs-createBtn">Create</button>
            </div>
        </Modal>
    </section>
</template>

<script>
import HeadVue from '~~/components/Head.vue'
import Modal from '~~/components/Modal.vue'

export default {
    data() {
        return {
            input1: '',
            input2: '',
            input3: '',
            input4: '',
            showModal: false,
            createTitle: 'Create new Program',
            modalTitle: "Course Title",
            minCredits: "Min Credits",
            program: "Program",
            degree: "Degree",
            lists: [
                {
                    title: 'Medical School',
                    program: 'Bachelor of Medicine',
                    degree: 'Doctor of Medicine',
                    credits: '88',
                    select: 'Select'
                },
                {
                    title: 'Accounting and Finance Department',
                    program: 'BSc in Accounting and Finance',
                    degree: 'BSc',
                    credits: '145',
                    select: 'Select'

                }
            ]
        }
    },

    components: {
        HeadVue,
        Modal
    },
    methods: {
        addNote() {
            this.showModal = !this.showModal
            this.lists.push({
                title: this.input1,
                program: this.input2,
                degree: this.input3,
                credits: this.input4,
                select: 'Select'
            })
            this.input1 = ''
            this.input2 = ''
            this.input3 = ''
            this.input4 = ''
        }
    }


}

</script>
<style  lang="scss">
$gl-ms : "screen and (max-width: 23.5em)"; // up to 360px
$gl-xs : "screen and (max-width: 35.5em)"; // up to 568px
$gl-sm : "screen and (max-width: 48em)"; // max 768px
$gl-md : "screen and (max-width: 64em)"; // max 1024px
$gl-lg : "screen and (max-width: 80em)"; // max 1280px

// table style

table {
    border-spacing: 1;
    border-collapse: collapse;
    background: white;
    border-radius: 6px;
    overflow: hidden;
    width: 100%;
    position: relative;
    // margin-left: 27px;

    * {
        position: relative
    }

    td,
    th {
        padding-left: 8px;
        font-weight: 400;
    }

    thead tr {
        height: 60px;
        font-size: 16px;
    }

    tbody tr {
        height: 48px;
        border-bottom: 1px solid rgba(223, 223, 223, 0.409);
        border-top: 1px solid rgba(223, 223, 223, 0.409);
    }

    td,
    th {
        text-align: left;

        &.l {
            text-align: right
        }

        &.c {
            text-align: center
        }

        &.r {
            text-align: center
        }
    }
}


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
                    content: "Course Title";
                }

                &:nth-child(2):before {
                    content: "Program";
                }

                &:nth-child(3):before {
                    content: "Degree";
                }

                &:nth-child(4):before {
                    content: "Min Credits";
                }

                &:nth-child(5):before {
                    content: "Action";
                }
            }
        }
    }
}
</style>