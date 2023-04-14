<template>
    <nav class="header__nav" :class="{ active: !store.activeSidebar }">
        <div class="header__nav-logo " :class="{ 'm-0': !store.activeSidebar }">
            <img src="../assets/images/favicon.webp" alt="" />
        </div>
        <ul class="header__nav-list">
            <template v-for="(link, i) in links" :key="i">
                <Nuxt-link :to="link.to" class="header__nav-blocks" v-if="!link.children"
                    :class="{ 'active': $route.matched.some(({ path }) => path.startsWith(link.to)) && i !== 0, 'adaptive-p': !store.activeSidebar }"
                    @click="showChild(link)">
                    <div class="header__nav-blocks-item" :class="{ active: !store.activeSidebar }">
                        <i :class=link.icons></i>
                        <p v-if="store.activeSidebar">{{ link.title }}</p>
                    </div>
                </Nuxt-link>
                <div class="accordion accordion-flush " id="accordionFlushExample" v-else @click="openFullSidebar()">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed header__nav-blocks header__nav-blocks-item"
                                type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                aria-expanded="false" aria-controls="flush-collapseOne" id="accord-button"
                                :class="{ 'pl-0': !store.activeSidebar, 'adaptive-p': !store.activeSidebar, 'active': $route.matched.some(({ path }) => path.startsWith(link.to)) }">
                                <i :class=link.icons></i>
                                <p v-if="store.activeSidebar" style="height: 14px;">{{ link.title }}</p>
                                <i class="bi bi-chevron-down" v-if="store.activeSidebar" style="padding-left: 0;"></i>
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body d-flex flex-column gap-2" v-if="store.activeSidebar">
                                <nuxt-link class="text-black" :to="'/options' + item.to"
                                    v-for="(item, idx) in link.children" :key="idx"
                                    :class="{ 'exact-active': $route.matched.some(({ path }) => path.startsWith(item.to, 8)) }">
                                    {{ item.title }}
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </ul>
    </nav>
    <nav class="header__nav nav-mob" :class="{ active: !store.activeSidebar }">
        <div class="header__nav-logo">
            <img src="../assets/images/favicon.webp" alt="" class="header__nav-logo" />
        </div>
        <div class="header__nav-list">
            <nuxt-link :to="link.to" v-for="link in links" :key="link.id" class="header__nav-blocks" active-class="active"
                @click.prevent="closeMenu()">
                <div class="header__nav-blocks-item accordion-block">
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

<script setup>
import { useMainStore } from '~~/store';
import { useI18n } from 'vue-i18n';

const child = ref(false)
const store = useMainStore()
const links = computed(() => [
    {
        title: useI18n().t('dashboard'),
        to: '/',
        icons: 'bi bi-grid-fill'
    },
    {
        title: useI18n().t('users'),
        to: '/users',
        icons: 'bi bi-people',
    },
    {
        title: useI18n().t('role'),
        to: '/roles',
        icons: 'bi bi-person-plus-fill',
    },
    {
        title: useI18n().t('options'),
        to: '/options',
        icons: 'bi bi-gear',
        children: [
            {
                title: useI18n().t('settings'),
                to: '/settings'
            }
        ]
    },
    {
        title: useI18n().t('services'),
        to: '/services',
        icons: 'bi bi-calendar',
    },
])

const openFullSidebar = () => {
    if (!store.activeSidebar) {
        store.sideToggle();
        document.querySelector('#flush-collapseOne').classList.add('show')
    }
}

const closeMenu = () => {
    store.activeSidebar = !store.activeSidebar
}

const showChild = (el) => {
    const accordionBtn = document.querySelector('.accordion-button')
    const flush = document.querySelector('#flush-collapseOne')

    accordionBtn.classList.add("collapsed");
    flush.classList.remove("show");

    if (el.children) {
        child.value = true
    } else {
        child.value = false
    }
}





</script>


<style>
.adaptive-p {
    padding-left: 10px;
    padding-top: 3px;
    padding-right: 10px;
    padding-bottom: 3px;
}

.adaptive-p .header__nav-blocks-item i {
    padding-left: 0;
}

.header__nav-child {
    margin-left: 20px;
    color: var(--black);
}

.accordion-button::after {
    display: none;
}

.accordion-header:hover .accordion-button i {
    color: white !important;
}

.accordion-header:hover .accordion-button p {
    color: white !important;
}

.accordion-button i {
    height: 30px;
}

.pl-0 i {
    padding-left: 0;
}
</style>


