 <template>
    <header class="header">
        <div class="container">
        <nav class="navbar">
            <div class="navbar-start">
                <div class="navbar-item">
                    <a class="navbar-item has-text-grey" href="">Sample</a>
                </div>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <a href="">ログイン</a>
                    <a href="">新規登録</a>
                </div>
            </div>
        </nav>
        </div>
    </header>

</template>

<script>

</script>

<style lang="scss" scoped>
.header{
    height: 30px;
    background-color: grey;
}
.container{
    line-height: 30px;
    width: 960px;
    margin:0 auto;
}
.navbar{
    display: flex;
    justify-content: space-between;
}
.navbar-item{
    color:black;
    a{
    margin-right: 8px;
    color:black;
    text-decoration: none;
    }
    
}
</style>