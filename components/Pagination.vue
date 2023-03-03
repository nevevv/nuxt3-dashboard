<template>
    <div class="main__programs-sub">
        <div class="main__programs-sub-item">
            <p>{{ arr.to }} of {{ arr.total }} items</p>
        </div>
        <nav aria-label="Page navigation example" class="d-flex gap-1">
            <ul class="pagination d-flex d-sm-none">
                <li class="page-item" v-for="link in arr.links" :key="link.id">
                    <a class="page-link" :class="{ 'green disabled': link.active }" v-if="!Number((link.label))"
                        style="cursor:pointer ;" @click="changePage(link)" v-html="link.label">
                    </a>
                </li>

            </ul>
            <ul class="pagination mob-pagination">
                <li class="page-item" v-for="link in arr.links" :key="link.id">
                    <a class="page-link" :class="{ 'green disabled': link.active }" style="cursor:pointer ;"
                        @click="changePage(link)" v-html="link.label">
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    emits: ['pageChange'],
    props: ['arr'],
    setup(props, ctx) {
        const changePage = (e) => {
            if (e.url) {
                const params = new URL(e.url).searchParams;
                ctx.emit('pageChange', params.get('page'))
            }
        }
        return { changePage }
    }

}

</script>


<style>
.green {
    background: #008838 !important;
    color: white !important;
}

.page-link {
    color: #008838;
}

@media(max-width:575px) {
    .mob-pagination {
        display: none !important;
    }
}
</style>
