<template>
    <div class="container">
        <div class="block_back d-flex">
        <img src="@/assets/back.png" alt="">
        <router-link class="btn align-right mt-3 " to="/view_house">НАЗАД</router-link>
        </div>
        <div class="view">
              <img src="@/assets/room1.jpeg" alt="">
              <div class="desc">
                   <p class="number">№354638</p>
                   <div class="content">
                       <p class="time">3 ночи</p>
                       <p class="period">23 декабря -26 декабря</p>
                       <p class="house">Домик:</p>
                       <div class="choice">
                            <p class="type_house">двухместный</p>
                            <p class="type_price">3000 руб</p>
                       </div>
                       <p class="house">Дополнительные услуги:</p>
                       <div class="choice">
                            <div class="choice_services">
                                <p class="type_house">3-разовое питание</p>
                                <p class="type_house">аренда катера</p>
                            </div>
                            <div>
                                <p class="type_price">200 руб</p>
                                <p class="type_price">1800 руб</p>
                            </div>
                       </div>
                       <p class="outcome">Итог: 5 000 руб.</p>
                   </div>
              </div>
        </div>
        <div class="d-flex justify-content-end">
        <router-link class="btn_border align-right mt-3" to="/booking">
          Оплатить
        </router-link>
      </div>
    </div>
</template>
<style scoped>
.block_back img {
  margin-top: 3vh;
  max-width: 50%;
  height: auto;
  max-height: 70%;
  display: block;
}
.block_back{
    margin-top: 10vh;
    align-items: center;
    width: 10vh;
    justify-content: flex-start;
}
.btn{
    margin: auto auto;
    font-size:1.6rem;
}
.view{
    
    width: 100%;
    align-items: center;
    margin-top: 3vh;
    margin-bottom: 1vh;
    padding-bottom: 3vh;
    display: flex;
    column-gap: 8vh;
}
.view img {
  width: 50%;
  height: auto;

}
.desc{
    padding: 2%;
    border: rgba(50, 69, 76, 0.19) 1px solid;
    height:67vh;
    width: 100%;
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.1);
    background-color: #FBFBFB;
}
.number, .period, .house, .type_price{
    font-size: 1.2rem;
    font-weight: bold;
}
.time{
    font-size: 1.2rem;
    font-weight: bold;
    color: #7E7D8C;
}
.type_house{
    font-size: 1.2rem;
    color: #C9B158;
}
.choice{
    display: flex;
    justify-content: space-between;
}
.content{
    margin-left: 5vh;
}
.outcome{
    font-size: 2rem;
    font-weight: bold;  
}
.btn_border{
    text-align: center;
    width: 82vh;
}
@media (max-width:1090px){
    .view{
        flex-direction: column;
    }
    .view img {
        width: 100%;
}
.btn_border{
    padding: 3% 7%;
}
}
</style>