<template>
    <section class="dashboard__main">
        <HeadVue text="Dashboard" />
        <div class="main__content">
            <div class="main__content-items">
                <div class="main__content-head">
                    <div class="main__content-icon">
                        <img src="~~/assets/images/main__content-head-1.svg" alt="" />
                    </div>
                    <select>
                        <option value="">2022</option>
                    </select>
                </div>
                <div class="main__content-info">
                    <div>
                        <h3 class="main__content-item">{{ $t('students') }}</h3>
                        <p class="main__content-value">1229 <span>+10.94%</span></p>
                    </div>
                    <div>
                        <h3 class="main__content-item"> {{ $t('volume') }} </h3>
                        <p class="main__content-value">9820</p>
                    </div>
                </div>
            </div>
            <div class="main__content-items">
                <div class="main__content-head">
                    <div class="main__content-icon">
                        <img src="~~/assets/images/main__content-head-2.svg" alt="" />
                    </div>
                    <select>
                        <option value="">2022</option>
                    </select>
                </div>
                <div class="main__content-info">
                    <div>
                        <h3 class="main__content-item">{{ $t('prof') }}</h3>
                        <p class="main__content-value">49 <span>+120.28%</span></p>
                    </div>
                    <div>
                        <h3 class="main__content-item">{{ $t('assis') }}</h3>
                        <p class="main__content-value">24 <span>+45.00%</span></p>
                    </div>
                </div>
            </div>
            <div class="main__content-items">
                <div class="main__content-head">
                    <div class="main__content-icon">
                        <img src="~~/assets/images/main__content-head-3.svg" alt="" />
                    </div>
                    <select>
                        <option value="">2022</option>
                    </select>
                </div>
                <div class="main__content-info">
                    <div>
                        <h3 class="main__content-item">{{ $t('allEvents') }}</h3>
                        <p class="main__content-value">21</p>
                    </div>
                    <div>
                        <h3 class="main__content-item">{{ $t('pending') }}</h3>
                        <p class="main__content-value">18</p>
                    </div>
                    <div>
                        <h3 class="main__content-item">{{ $t('completed') }}</h3>
                        <p class="main__content-value">3 <span>+0.00%</span></p>
                    </div>
                </div>
            </div>
            <div class="main__content-items">
                <div class="main__content-head">
                    <h3 class="main__content-title">{{ $t('studentStatus') }}</h3>
                    <select>
                        <option value="">2022</option>
                    </select>
                </div>
                <div class="main__content-chart">
                    <p class="main__chart-gender"><span></span>{{ $t('males') }}</p>
                    <p class="main__chart-gender"><span></span>{{ $t('females') }}</p>
                </div>
                <img width="200" class="main__chart-img" height="200" src="~~/assets/images/chart-gender.png" alt="" />
            </div>
            <div class="main__content-items">
                <div class="main__content-head">
                    <div class="main__content-icon">
                        <img src="~~/assets/images/main__content-head-4.svg" alt="" />
                    </div>
                </div>
                <div class="main__content-info other-block">
                    <div>
                        <h3 class="main__content-item">{{ $t('mandatoryCourses') }}</h3>
                        <p class="main__content-value">29 <span>+0.00%</span></p>
                    </div>
                    <div>
                        <h3 class="main__content-item">{{ $t('selectiveCourses') }}</h3>
                        <p class="main__content-value">31 <span>+0.00%</span></p>
                    </div>
                </div>
            </div>
            <div class="main__content-items">
                <div class="main__content-head">
                    <div class="main__content-icon">
                        <img src="~~/assets/images/main__content-head-5.svg" alt="" />
                    </div>
                    <select>
                        <option value="">2022</option>
                    </select>
                </div>
                <div class="main__content-info">
                    <div>
                        <h3 class="main__content-item text-danger">
                            {{ $t('debtors') }}
                        </h3>
                        <p class="main__content-value">12% <span>+0.00%</span></p>
                    </div>
                    <div>
                        <h3 class="main__content-item">{{ $t('customers') }}</h3>
                        <p class="main__content-value">0</p>
                    </div>
                </div>
            </div>
            <div class="main__content-items">
                <h3 class="main__content-title">{{ $t('noticeBoard') }}</h3>
                <div class="main__content-notice">
                    <img src="~~/assets/images/iconContainer.png" alt="" />
                    <h3>{{ $t('noNoti') }}</h3>
                    <p>{{ $t('addNewNotiAndInform') }}</p>
                    <button>
                        <i class="fa-solid fa-plus"></i>
                        {{ $t('newNotice') }}
                    </button>
                </div>
            </div>
            <div class="main__content-items">
                <div class="main__content-head">
                    <div class="main__content-sub">
                        <h3 class="main__content-title">{{ $t('summary') }}</h3>
                        <select class="main__content-select">
                            <option>{{ $t('paidContracts') }}</option>
                        </select>
                    </div>
                    <select>
                        <option>2022</option>
                    </select>
                </div>
                <div class="main__content-scale">
                    <div class="main__content-y">
                        <p>100k</p>
                        <p>80k</p>
                        <p>60k</p>
                        <p>40k</p>
                        <p>20k</p>
                    </div>
                    <div class="main__content-x">
                        <div class="main__content-graph">
                            <div></div>
                            <p>Sept 10</p>
                        </div>
                        <div class="main__content-graph">
                            <div></div>
                            <p>Sept 11</p>
                        </div>
                        <div class="main__content-graph">
                            <div></div>
                            <p>Sept 12</p>
                        </div>
                        <div class="main__content-graph">
                            <div></div>
                            <p>Sept 13</p>
                        </div>
                        <div class="main__content-graph">
                            <div></div>
                            <p>Sept 14</p>
                        </div>
                        <div class="main__content-graph">
                            <div></div>
                            <p>Sept 15</p>
                        </div>
                        <div class="main__content-graph">
                            <div></div>
                            <p>Sept 16</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </section>
</template>

<script setup>

definePageMeta({
    middleware: 'guest',
    pageTransition: {
        name: 'page'
    }
})

</script>