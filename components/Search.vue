<template>
    <div class="main__block-head-item">
        <div class="main__block-head-input">
            <i class="bi bi-search"></i>
            <input class="form-control mr-sm-2" type="search" :placeholder="`${$t('search')}`" aria-label="Search">
        </div>
        <div style="display: flex; gap: 12px">
            <button>
                <i class="bi bi-funnel" style="font-size: 15px;"></i>
                Filter
            </button>
            <button>
                <i class="bi bi-calendar" style="font-size: 15px;"></i>
                Filter
            </button>
        </div>
    </div>
</template>