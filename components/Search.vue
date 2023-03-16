<template>
    <div class="main__block-head-item">
        <div class="main__block-head-input">
            <i class="bi bi-search"></i>
            <input class="form-control mr-sm-2" type="search" :placeholder="`${$t('search')}`" aria-label="Search">
        </div>
        <div  class="d-flex gap-1">
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