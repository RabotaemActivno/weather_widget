<template>
    <li class="list_item">
        <img class="li_img" src="../assets/burger.svg" alt="burger">
        <p>Moscow</p>
        <img class="li_img" src="../assets/delete.svg" alt="delete">
    </li>
</template>

<script>
export default {
    name: 'ListItem'
}
</script>

<style lang="scss">
.list_item {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    padding: 6px;
    color: rgb(52, 52, 52);
    background-color: rgb(235, 224, 224);
    border-radius: 8px;
    margin-top: 5px;
}

.li_img {
    height: 18px;
}

.closeBtn {
    height: 25px;
    cursor: pointer;
    position: absolute;
    left: 215px;
    top: 8px;
}
</style>