<template>
    <section class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-lg-4">
                <div class="login-panel bg-white text-left">
                    <div class="alert alert-primary" role="alert">
                        Login successfully. <small>Waiting for redirect.</small>
                    </div>
                    <!-- <h1 class="display-3 font-weight-bold">Login</h1> -->
                    <img src="../assets/nairobi-sausages.png" class="logo-image" alt="logo"/>
                    <br>
                    <form action="">
                        <div class="form-group">
                            <label for="email" class="input-label">Enter your email address</label>
                            <input type="email" class="form-control" placeholder="Email Address"/>
                        </div>
                        <div class="form-group">
                            <label for="password" class="input-label">Enter your Password</label>
                            <input type="password" class="form-control" placeholder="Password"/>
                        </div>
                        <br>
                        <div class="form-group d-flex justify-content-center">
                            <button class="btn btn-primary w-25" @click="login">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script></script>

<style lang="scss">
   .login-panel {
    padding: 250px 0;
    position: relative;

    .input-label {
        padding-top: 30px;
    }

    .logo-image {
       margin-left: 100px;
    }

    .form-control {
        height: 48px;
    }

    .alert {
        position: absolute;
        top: 100px;
        width: 100%;
        
        &.alert-primary {
            background-color: #007BFF;
            color: #fff;
            border: none;
            font-size: 18px;
        }
    }
   }
</style>
