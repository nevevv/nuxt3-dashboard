<template>
    <div class="login-page">
        <div class="login-page-content">
            <p class="login-page-title">
                COPYRIGHT© AKFA UNIVERSITY ALL RIGHTS RESERVED.
            </p>
            <div class="login">
                <div class="login__head">
                    <div class="login__head-img">
                        <img src="@/static/images/logo-icon.png" alt="" />
                        <img src="@/static/images/logo-text.png" alt="" />
                    </div>
    
                </div>
                <form class="login__form">
                    <input type="text" placeholder="ID" />
                    <input type="password" placeholder="Password" />
                </form>
                <div class="login__foot">
                    <a href="#!" class="login__foot-forgot">Forgot password?</a>
                    <a href="#!" class="login__foot-btn">Submit</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

definePageMeta({
    layout: "log",
});

</script>

<style scoped>
.create-acc {
    color: blue;
    font-size: 1rem;
    cursor: pointer;

}
</style>