<template>
  <div class="hero d-flex">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md equipment p-3 me-5">
          
          <div class="about">
              <h1 class="text-center">Аренда снаряжения</h1>
            <h4 class="text-center">
              Аренда удочек и рыболовного снаряжения! Наш сервис предоставляет
              возможность поехать на рыбалку с качественное снаряжение
            </h4>
          </div>
          <h1 class="text-center">Аренда снаряжения</h1>
        </div>
        <div class="col-md bathhouse p-3">
         
           <div class="about">
               <h1 class="text-center">Бани и сауны</h1>
           </div>
            <h1 class="text-center">Бани и сауны</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md grill p-3 me-5">
          
          <div class="about">
              <h1 class="text-center">Приготовление трофеев</h1>
          </div>
          <h1 class="text-center">Приготовление трофеев</h1>
        </div>
        <div class="col-md hunting p-3">
            
            <div class="about">
          <h1 class="text-center">Охота на дичь</h1>
            </div>
            <h1 class="text-center">Охота на дичь</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",
};
</script>
<style scoped>
.row-flex {
  display: flex;
  flex-flow: row wrap;
}
.hero {
  background: #2c3c43;
  height: 100vh;
  color: white;
}
.equipment {
  background: url("~@/assets/equipment.png") no-repeat center;
  height: 40vh;
  margin: 5vh 0;
  cursor: pointer;
  position: relative;
}

.about{
    position: absolute;
    opacity: 0;
    margin: 20px;
    height: calc(100% - 80px);
    width: calc(100% - 80px);
    background: rgba(255, 255, 255, 0.5);
    color: #000;
    transition: 0.5s ease;
}
.about:hover{
    opacity: 1;
    transition: 0.5s ease;
}
.about:hover + h1{
    opacity: 0;
}
.grill {
  background: url("~@/assets/grill.png") no-repeat center;
  height: 40vh;
  margin: 5vh 0;
   cursor: pointer;
   position: relative;
}
.hunting {
  background: url("~@/assets/hunting.png") no-repeat center 20%;
  background-size: cover;
  height: 40vh;
  margin: 5vh 0;
   cursor: pointer;
   position: relative;
}
.bathhouse {
  background: url("~@/assets/bathhouse.png") no-repeat center;
  height: 40vh;
  margin: 5vh 0;
   cursor: pointer;
   position: relative;
}
</style>
