<template>
    <nav class="header__nav" :class="{ active: !store.activeSidebar }">
        <div class="header__nav-logo">
            <img src="../assets/images/favicon.webp" alt="" />
        </div>
        <ul class="header__nav-list">
            <template v-for="link in links" :key="link.id">
                <nuxt-link :to="link.to" class="header__nav-blocks" exact-active-class="active" @click="showChild(link)">
                    <div class="header__nav-blocks-item" :class="{ active: !store.activeSidebar }">
                        <i :class=link.icons></i>
                        <p v-if="store.activeSidebar">{{ link.title }}</p>
                    </div>
                </nuxt-link>
                <div v-for="child in link.children" :key="child.title">
                    <template v-if="child">
                        <nuxt-link :to="`${link.to}${child.to}`" class="header__nav-child" exact-active-class="active">
                            {{ child.title }}
                        </nuxt-link>
                    </template>

                </div>
            </template>

        </ul>
    </nav>
    <nav class="header__nav nav-mob" :class="{ active: !store.activeSidebar }">
        <div class="header__nav-logo">
            <img src="../assets/images/favicon.webp" alt="" class="header__nav-logo" style="margin-left: 20px;" />
        </div>
        <div class="header__nav-list">
            <nuxt-link :to="link.to" v-for="link in links" :key="link.id" class="header__nav-blocks" active-class="active"
                @click.prevent="closeMenu()">
                <div class="header__nav-blocks-item">
                    <i :class=link.icons></i>
                    <p>{{ link.title }}</p>
                </div>
            </nuxt-link>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" @click="store.sideToggle"
                class="bi bi-x-lg closeButton" viewBox="0 0 16 16">
                <path
                    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
        </div>
    </nav>
</template>

<script>

import { useMainStore } from '~~/store';

export default {
    setup() {
        const store = useMainStore()
        return { store, }
    },

    data() {
        return {
            child: false,
            links: [
                {
                    title: 'Dashboard',
                    to: '/',
                    icons: 'bi bi-grid-fill'
                },
                {
                    title: 'Permissions',
                    to: '/permissions',
                    icons: 'bi bi-grid'
                },
                {
                    title: 'Users',
                    to: '/users',
                    icons: 'bi bi-people',
                },
                {
                    title: 'Roles',
                    to: '/roles',
                    icons: 'bi bi-person-plus-fill',
                },
                {
                    title: 'Fields Types List',
                    to: '/field_types',
                    icons: 'bi bi-chat-dots',
                },
                {
                    title: 'Data Export',
                    to: '/data',
                    icons: 'bi bi-download'
                },
                {

                    title: 'Options',
                    to: '/options',
                    icons: 'bi bi-gear',
                    children: [
                        {
                            title: 'Settings',
                            to: '/settings'
                        }
                    ]
                },

                {
                    title: 'Services',
                    to: '/services',
                    icons: 'bi bi-calendar',

                },
                {
                    title: 'Course Managements',
                    to: '/course',
                    icons: 'bi bi-bookmark-fill',
                },
            ],
        }
    },

    methods: {
        closeMenu() {
            this.store.activeSidebar = !this.store.activeSidebar;
        },
        showChild(el) {
            if (el.children) {
                this.child = true
            } else {
                this.child = false
            }
        }
    }


}

</script>


<style>
.header__nav-child {
    margin-left: 20px;
    color: var(--black);
}
</style>


