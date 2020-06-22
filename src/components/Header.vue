<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="margin-top: 2vh">
            <router-link to='/' class="navbar-brand">StockTrader</router-link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav mr-auto">

                <router-link 
                    to="/portfolio" 
                    class="nav-item"
                    activeClass='active'
                    tag="li"><a class="nav-link">Portfolio</a></router-link>

                <router-link 
                    to='/stocks'
                    activeClass='active'
                    tag="li"><a class="nav-link">Stocks</a></router-link>

            </ul>

        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown" 
                    @click="isDropdownOpen = !isDropdownOpen">
                <a 
                    class="nav-link dropdown-toggle" 
                    href="#" 
                    id="navbarDropdown" 
                    role="button" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false"
                    >Save & Load</a>

                <div class="dropdown-menu" :class="{ show: isDropdownOpen }" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Save</a>
                    <a class="dropdown-item" href="#">Load</a>
                </div>
            </li>
            </ul>
        </div>
        </div>
    </nav>
</template>

<script>
export default {
    data(){
        return {
            isDropdownOpen: false
        }
    }
}
</script>