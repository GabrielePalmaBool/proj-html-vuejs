<script>
export default {
  name: 'Banner'
}
</script>

<template>
  <div class="container-fluid section-telephone">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-6">
          <h1>Start Learning to Drive Today</h1>
          <h3>Give us a call to schedule your first driving lesson</h3>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-6">
          <h2>
            <i class="fa-solid fa-phone" style="color: #ffffff"></i
            >1-800-555-555
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
//Scss relativo alla sola sezione di header
@use '../styles/partials/variables' as *;

.section-telephone {
  background-image: url('/public/horizontal-cta-background.jpg');
  color: white;
  height: auto;
  background-size: cover;
  background-position: bottom;
  padding-top: 70px;
  padding-bottom: 70px;

  .row {
    display: flex;
    align-items: center;

    h1 {
      font-size: 40px;
      font-weight: 700;
    }

    h3 {
      font-size: 22px;
      font-weight: 700;
    }

    h2 {
      text-align: end;

      .fa-solid {
        margin-right: 30px;
      }
    }

    @media all and (max-width: 1000px) {
      h2 {
        text-align: start;
      }
    }
  }
}
</style>
