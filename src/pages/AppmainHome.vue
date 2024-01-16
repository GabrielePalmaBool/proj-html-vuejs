<script>
export default {
    name: "AppmainHome"
}
</script>

<template>
  <main>
    <!-- Classe jumbo -->
    <div class="jumbo">

      <div class="container">
        <h1>Drive with Avada</h1>
        <h4>We offer the finest driving tuition money can buy</h4>
      </div>
  
    </div>
<!-- Primo container -->
    <div class="container first">

      <div class="row">

        <div class="col left"> 

          <h2>Get Behind the Wheel</h2>

          <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus.
             Aliquam maximus turpis in vehicula semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br><br>

             Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper. Fusce et ultrices libero, at suscipit lacus.
             Sed vitae fringilla nibh. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper. Fusce et ultrices libero, at suscipit lacus. Sed vitae fringilla nibh.
          </p>

        </div>

        <div class="col right">

          <div class="box">

            <h2>First Lesson Free!</h2>

            <p>when you make a block booking with us your first lesson is included free.</p>

            <input type="text">
            <input type="text">
            <input type="text">

          </div>

        </div>

      </div>
    </div>
</main>
</template>

<style lang="scss" scoped>
//Scss relativo alla sola sezione di header
@use '../styles/partials/variables' as *;

.jumbo{
  background-image: url("..\assets/homepage-main-background.jpg");
  height: 500px;
  background-size: cover;
  color: $primary;
  padding-top: 50px;

  h1{
    font-size: 70px;
  }
}

.first {

  .row{

    .left{
      display: flex;
      flex-direction: column;
      padding: 50px;
      h2{
        color: $terziary;
        text-align: center;
      }
      p{
        text-align: left;
      }
    }
    .right{
      margin-top: -40px;
      display: flex;
      flex-direction: column;
      .box{
        border-radius: 10px;
        width: 475px;
        height: 500px;
        text-align: center;
        padding: 20px;
        background-color: $primary;
        box-shadow: 0px 25px 20px 0px  #c7c7c7;

        h2{
          margin-top: 20px;
          color: $quaternary;
        }
        
      }
    }
  }
}

</style>