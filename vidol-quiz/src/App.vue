<template>
    <div class="app">
        <h1 class="logo">
            <a :href="link.vidol" target="_blank">
                <img src="@/assets/images/logo.png" alt="vidol">
            </a>
        </h1>
        <div class="logo2">
            <a :href="link.pushin" target="_blank">
                <img src="@/assets/images/logo2.png" alt="埔心牧場">
            </a>
        </div>

        <h2 class="title"><img src="@/assets/images/title.png" alt="埔心牧場春遊趣"></h2>
        <div class="btn"><a href="javascript:;"></a></div>

        <div class="fan">
            <picture>
                <source media="(min-width: 768px)" srcset="@/assets/images/windmill.gif">
                <img src="@/assets/images/fan.png" alt="">
            </picture>
        </div>

        <div class="pig">
            <img src="@/assets/images/pig.gif" alt="">
        </div>

        <a :href="link.animal" target="_blank" class="cow">
            <img src="@/assets/images/cow.png" alt="">
        </a>
        <a :href="link.animal" target="_blank" class="sheep">
            <img src="@/assets/images/sheep.png" alt="">
        </a>
        <a :href="link.animal" target="_blank" class="rabbit">
            <img src="@/assets/images/rabbit.png" alt="">
        </a>
        <a :href="link.animal" target="_blank" class="horse">
            <img src="@/assets/images/horse.png" alt="">
        </a>
        
        <div class="footer">
            <div class="footer__img">
                <img src="@/assets/images/logo2.png" alt="埔心牧場">
            </div>
            <p class="footer__copyright">© 2019 Vidol All Rights Reserved 版權所有 盜用必究</p>
            <div class="footer__link">
                <a href="javascript:;"><img src="@/assets/images/share_fb.png" alt=""></a>
                <a href="javascript:;"><img src="@/assets/images/share_line.png" alt=""></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    computed: {
        link() {
            return {
                animal: 'https://www.pushin-ranch.com/view.aspx',
                vidol: 'https://www.pushin-ranch.com/view.aspx',
                pushin: 'https://www.facebook.com/pushinranch/'
            }
        }
    },
}
</script>

<style lang="scss">
@import '@/assets/sass/reset';
$tablet-width: 768px;
$mobile-bgwidth: 1242;
$desktop-bgwidth: 1920;
@mixin item($top, $left, $width, $bgwidth: $mobile-bgwidth) {
    position: absolute;
    top: $top;
    left: $left;
    width: percentage($width / $bgwidth);
}
@keyframes rotate {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
@keyframes shake {
    50% {
        transform: rotate(0);
    }
    60% {
        transform: rotate(-8deg);
    }
    80% {
        transform: rotate(8deg);
    }
    100% {
        transform: rotate(0);
    }
}
@keyframes run {
    0% {
        left: -20%;
    }
    20% {
        top: 47%;
    }
    40% {
        top: 40%;
    }
    60% {
        top: 43%;
    }
    80% {
        top: 40%;
    }
    90% {
        top: 45%;
    }
    100% {
        left: 100%;
    }
}
.app {
    position: relative;
    overflow-x: hidden;
    margin: 0 auto;
    padding-bottom: calc(4094 / 1242 * 100% + 50px);
    min-width: 320px;
    max-width: 1242px;
    height: 0;
    background: url('~@/assets/images/body-bg-s.jpg') 50% 0/contain no-repeat;
    @media (min-width: 530px) {
        padding-bottom: calc(4094 / 1242 * 100% + 77px);
    }
    @media (min-width: $tablet-width) {
        overflow-y: hidden;
        padding-bottom: calc(1267 / 1920 * 100% + 86px);
        max-width: 1920px;
        background-image: url('~@/assets/images/body-bg.jpg');
    }
}
.logo {
    @include item(1%, 5%, 250);
    position: absolute;
    @media (min-width: $tablet-width) {
        @include item(3%, 5%, 137, $desktop-bgwidth);
        z-index: 1;
    }
    a {
        display: block;
    }
}
.logo2 {
    display: none;
    @media (min-width: $tablet-width) {
        @include item(3%, 14%, 206, $desktop-bgwidth);
        z-index: 1;
        display: block;
    }
    a {
        display: block;
    }
}
.title {
    display: none;
    @media (min-width: $tablet-width) {
        position: absolute;
        top: 11%;
        left: 50%;
        display: block;
        transform: translateX(-50%) scale(1.5);
    }
}
.btn {
    display: none;
    @media (min-width: $tablet-width) {
        position: absolute;
        top: 47%;
        left: 50%;
        z-index: 1;
        display: block;
        width: percentage(418 / 1920);
        transform: translateX(-50%);
    }
    a {
        display: block;
        padding-bottom: percentage(126 / 418);
        background: url('~@/assets/images/btn.png') 50%/contain no-repeat;
        &:hover {
            background-image: url('~@/assets/images/btn-h.png');
        }
        &::before {
            display: none;
            background-image: url('~@/assets/images/btn-h.png'); // preload hover image
            content: '';
        }
    }
}
.fan {
    @include item(26.5%, -5%, 307);
    transform-origin: 52% 52%;
    animation: rotate 3s linear infinite;
    @media (min-width: $tablet-width) {
        @include item(0, 0, 658, $desktop-bgwidth);
        animation: none;
    }
}
.pig {
    display: none;
    @media (min-width: $tablet-width) {
        @include item(40%, -20%, 300, $desktop-bgwidth);
        display: block;
        animation: run 5s linear infinite;
    }
}
.cow {
    @include item(37%, 4%, 723);
    @media (min-width: $tablet-width) {
        @include item(60%, 49%, 427, $desktop-bgwidth);
    }
    &::before {
        position: absolute;
        top: 0;
        right: -230px;
        bottom: 0;
        left: 0;
        content: '';
        @media (min-width: $tablet-width) {
            right: -15px;
        }
    }
    img {
        animation: shake 3s ease infinite;
    }
}
.sheep {
    @include item(50%, 50%, 546);
    @media (min-width: $tablet-width) {
        @include item(61%, 77%, 252, $desktop-bgwidth);
        transform: scaleX(-1);
        img {
            animation: shake 3s ease 1.5s infinite;
        }
    }
    &::before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: -300px;
        content: '';
        @media (min-width: $tablet-width) {
            bottom: -60px;
            left: 0;
        }
    }
}
.rabbit {
    @include item(66%, 25%, 388);
    z-index: 1;
    @media (min-width: $tablet-width) {
        @include item(58%, 34%, 207, $desktop-bgwidth);
        z-index: auto;
        img {
            animation: shake 3s ease 1s infinite;
        }
    }
    &::before {
        position: absolute;
        top: -60px;
        right: -170px;
        bottom: 0;
        left: 0;
        content: '';
        @media (min-width: $tablet-width) {
            top: 0;
            right: 0;
            bottom: -60px;
        }
    }
}
.horse {
    @include item(73%, 42%, 700);
    @media (min-width: $tablet-width) {
        @include item(60%, 10%, 376, $desktop-bgwidth);
    }
    &::before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: -220px;
        content: '';
        @media (min-width: $tablet-width) {
            left: 0;
        }
    }
    img {
        transform: scaleX(-1);
        @media (min-width: $tablet-width) {
            transform: scaleX(1);
            animation: shake 3s ease .5s infinite;
        }
    }
}
.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;
    display: flex;
    padding: 10px 25px 10px 50px;
    width: 100%;
    background-color: rgb(148, 67, 7);
    justify-content: space-between;
    align-items: center;
    @media (min-width: $tablet-width) {
        position: static;
        margin-top: percentage(1267 / 1920);
        padding: 20px percentage(150 / 1920);
    }
    &__img {
        margin-right: 30px;
        flex-grow: 1;
        @media (min-width: $tablet-width) {
            display: none;
        }
    }
    &__copyright {
        display: none;
        @media (min-width: $tablet-width) {
            display: block;
            margin-right: 30px;
            color: #fff;
        }
    }
    &__link {
        display: flex;
        flex-shrink: 1;
        a + a {
            margin-left: 5px;
            @media (min-width: $tablet-width) {
                margin-left: 20px;
            }
        }
    }
}
</style>
