<script>
export default {
    name: 'NavBarComponent'
}
</script>

<style scoped>
@import "../assets/styles.css";
</style>

<template>
 <div class="navbar">
            <div class="icon">
                <h2 class="logo">W.Tech.</h2>
            </div>
            <div class="menu">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">COURSE MATERIALS</a></li>
                    <li><a href="#">ASSESSMENT</a></li>
                    <li><a href="#">CONTACT US</a></li>
                </ul>
            </div>
            <div class="search">
                <input class="srch" type="search" name="" placeholder="Type To Find">
                <a href="#"> <button class="btn">Find</button></a>
            </div>
        </div>
        </template>
