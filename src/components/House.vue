<template>
    <div class="wrapper">
        <div class="block_info">
            <p class="d-flex align-items-center">База отдыха «Каспийский лотос» предлагает отдых с рыбалкой и
проживанием в домиках вблизи раскатов Каспия.</p>
        </div>
        <div class="container">
            <div class="row">
               <div class="col-sm">
                  <img src="@/assets/room1.jpeg" />
               </div>
              <div class="col-sm">
                 <img src="@/assets/room2.jpeg" />
              </div>
          </div>
          <div class="d-flex justify-content-center">
             <router-link class="btn_border align-right mt-3" to="/booking">
               Забронировать
           </router-link>
      </div>
      <div class="block_descriprion">
          <h3>Сезон работы базы:</h3>
          <p class="season">Апрель, август-ноябрь.</p>
          <h3>Проживание включает:</h3>
          <p>•	для
комфортного прибывания база отдыха предлагает домики с 2-х местными
 номерами со всеми удобствами (санузел, сплит-система);</p>
 <p>•	номера оборудованы кухней с холодильником, электроплитой, набором посуды;</p>
 <p>•	охраняемая территория и стоянка для автомобилей;</p>
 <p>•	
трансферт до базы 2 раза в неделю (гибкий график);</p>
 <p>•	пользование у каждого домика беседкой с костровой площадкой и мангалами.</p>
 <h3>Дополнительные услуги:</h3>
  <p>•	аренда катера (North Silver PRO (мотор Suzuki 60); BUSTER MAGNUM (мотор Suzuki 225);</p>
 <p>•	пользование электрооборудованием для хранения трофеев;</p>
 <p>•	прокат рыболовных снастей, котелков, шезлонгов, зонтов, шампуров;</p>
 <p>•	использование собственного флота, услуги хранения, спуска лодок на воду;</p>
 <p>•	и многое другое.</p>
      </div>
    </div>
</div>
</template>
<style scoped>
.block_info{
    display: flex;
    align-items: center;
    width: 100%;
    height: 23vh;
    background-color: #C9B158;
}
.block_info p{
    text-align: center;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    color: white;
    font-size: max(1em, min(2em, calc(70vw * 4 / 75)));
}
.container{
    margin-top: 5vh;
}
.row{
    display: flex;
    align-items: center;
    row-gap: 3vh;
}
img {
  margin:auto auto;
  max-width: 100%;
  height: auto;
  max-height: 70%;
  display: block;
}
.btn_border {
  padding: 12px 37px;
  border: none;
  color: white;
  background: #C9B158;
  font-size: 24px;
  text-decoration: none;
  transition: ease 0.5s;
}
.btn_border:hover {
  border: none;
  color: #fff;
  background: #322d3a;
  transition: ease 0.5s;
}
.justify-content-center{
    margin-top: 3vh;
}
.block_descriprion{
    margin-top: 4vh;
}
h3{
    font-size: 30px;
    margin-top: 4vh;
    font-weight: bold;
}
.block_descriprion p{
    font-size: 20px;
}
 @media (max-width: 570px){
     h3, .season{
         text-align: center;
     }
 }
</style>