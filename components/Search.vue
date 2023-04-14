<template>
    <div class="main__block-head-item">
        <div class="main__block-head-input">
            <div class="input-group">
                <input type="search" class="form-control rounded form-search" :placeholder="$t('search')"
                    aria-label="Search" aria-describedby="search-addon" />
                <button type="button" class="btn btn-outline-primary">
                    <i class="bi bi-search search-icon"></i>
                </button>
            </div>
        </div>
        <div class="d-flex gap-1">
            <button>
                <i class="bi bi-funnel fs-6"></i>
                Filter
            </button>
            <button>
                <i class="bi bi-calendar fs-6"></i>
                Filter
            </button>
        </div>
    </div>
</template>

<style>
.form-search {
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
}
</style>