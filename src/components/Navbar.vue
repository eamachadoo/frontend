<template>
    <div id = "navbar">
        <router-link to = "/" id="logo-url">
            <img :src = "logo" :alt = "alt" id="logo">
        </router-link>
        <router-link to = "/">Home</router-link>
        <router-link to = "/user">User</router-link>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    props: ["logo", "alt"]
}
</script>

<style>
    #navbar {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 10px;
        background-color: #f4f4f4;
    }
    #logo {
        width: 50px;
        height: 50px;
    }
    #logo-url {
        margin:auto;
        margin-left: 0;;
    }
    #navbar a {
        text-decoration: none;
        color: black;
        padding: 10px;
        transition: .5s;
    }
    #navbar a:hover {
        background-color: #e4e4e4;
    }
</style>

