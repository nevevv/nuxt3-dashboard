<template>
    <div class="login-page">
        <div class="login-page-content">
            <p class="login-page-title">
                COPYRIGHT© AKFA UNIVERSITY ALL RIGHTS RESERVED.
            </p>
            <div class="login">
                <div class="login__head">
                    <div class="login__head-img">
                        <img src="images/logo-icon.png" alt="" />
                        <img src="images/logo-text.png" alt="" />
                    </div>
                    <a href="#!">Certificate</a>
                </div>
                <form class="login__form">
                    <input type="text" placeholder="ID" />
                    <input type="password" placeholder="Password" />
                </form>
                <div class="login__foot">
                    <a href="#!" class="login__foot-forgot">Forgot password?</a>
                    <a href="#!" class="login__foot-btn">Login</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'log'
}
</script>