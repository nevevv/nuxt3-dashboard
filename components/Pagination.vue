<template>
    <div class="d-flex mt-3">
        <el-pagination background layout="prev, pager, next" :total="Number(`${pages}0`)" @current-change="setPage"
            :pagerCount="5" hide-on-single-page />
    </div>
</template>

<script>
export default {
    props: ['pages'],
    emits: ['pageChange'],
    setup(props, ctx) {
        const setPage = (val) => {
            ctx.emit('pageChange', val)
        }
        return { setPage }
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

.page-item {
    cursor: pointer;
}



@media(max-width:575px) {
    .mob-pagination {
        display: none !important;
    }
}
</style>
