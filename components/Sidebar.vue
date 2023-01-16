<template>
    <nav class="header__nav" :style="{ width: `${$store.state.sidebarWidth}` }">
        <div class="header__nav-logo">
            <img src="../static/images/logo-icon.png" alt="" />
            <img src="../static/images/logo-text.png" alt="" v-if="$store.state.sidebarActive" />

        </div>
        <div class="header__nav-list">
            <nuxt-link :to="link.to" v-for="link in links" :key="link.id" class="header__nav-blocks"
                active-class="active">
                <div class="header__nav-blocks-item">
                    <i :class=link.icons></i>
                    <p v-if="$store.state.sidebarActive">{{ link.title }}</p>
                </div>
            </nuxt-link>
        </div>
    </nav>
    <nav class="header__nav nav-mob" v-if="$store.state.mobSideActive">
        <div class="header__nav-logo">
            <img src="../static/images/logo-icon.png" alt="" />
            <img src="../static/images/logo-text.png" alt="" v-if="$store.state.sidebarActive" />

        </div>
        <div class="header__nav-list ">
            <nuxt-link :to="link.to" v-for="link in links" :key="link.id" class="header__nav-blocks"
                active-class="active" @click="hideMobSidebar()">
                <div class="header__nav-blocks-item">
                    <i :class=link.icons></i>
                    <p>{{ link.title }}</p>
                </div>
            </nuxt-link>
        </div>
    </nav>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    data() {
        return {
            links: [
                {
                    title: 'Dashboard',
                    to: '/',
                    icons: 'bi bi-grid-fill'
                },
                {
                    title: 'Undergraduate Programs',
                    to: '/programs',
                    icons: 'bi bi-grid'
                },
                {
                    title: 'Users',
                    to: '/users',
                    icons: 'bi bi-people',
                },
                {
                    title: 'Students Registration',
                    to: '/students',
                    icons: 'bi bi-person-plus-fill',
                },
                {
                    title: 'Notice Board',
                    to: '/notice',
                    icons: 'bi bi-chat-dots',
                },
                {
                    title: 'Data Export',
                    to: '/data',
                    icons: 'bi bi-download'
                },
                {
                    title: 'Scholarship and Ranking',
                    to: '/scholarship',
                    icons: 'bi bi-award'
                },
                {
                    title: 'Academic Years',
                    to: '/academic',
                    icons: 'bi bi-calendar'
                },
                {
                    title: 'Course Managements',
                    to: '/course',
                    icons: 'bi bi-bookmark-fill',
                },
                {
                    title: 'Transfer Credits',
                    to: '/transfer',
                    icons: 'bi bi-arrow-down-up',
                },
                {
                    title: 'Finances',
                    to: '/finances',
                    icons: 'bi bi-credit-card-fill',
                },
            ],
        }
    },
    methods: {
        hideMobSidebar() {
            if (window.screen.width < 500) {
                this.hideSidebar()
            }
        },
        ...mapMutations(['hideSidebar'])

    }
}

</script>


