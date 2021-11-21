<template>
  <div>
    <Title title="Мероприятия" image="events_hero.jpg" />
    
  
    <h1 class="text-center mt-5 mb-5">
      Рекомендуемый досуг для вашего идеального отдыха
    </h1>
    <Cards />
    <div class="position-relative">
        <img src="@/assets/line_1.svg" class="position-absolute svg-back" style="z-index: -1; width: 100vw"/>
    <div class="container">
      <h3 class="mt-5 mb-5 text-center">Аренда оборудования</h3>
      <div class="row align-items-center justify-content-center">
        <div class="col-md d-flex justify-content-center">
          <img class="w-50" src="@/assets/events_equip.png" />
        </div>
        <div class="col-md">
          <div class="events_desc p-5">
            <p>
              Наша база отдыха предоставляет различное оборудование для вашего
              комфортного отдыха: прокат удочек, оснастков, садков и многое
              другое. Мы выдаём на прокат только самое лучшее снаряжение,
              которое поможет завладеть самым лучшим трофеем.
            </p>
            <p>
              Вы можете также арендовать рыболовных снасти, котелки, шезлонги,
              зонты, шампуры.
            </p>
          </div>
        </div>
      </div>
      <h3 class="mt-5 mb-5 text-center">Баня и сауна</h3>
      <div class="row align-items-center justify-content-center">
       
        <div class="col-md" :class="{ 'order-last': this.width <= 768 }">
          <div class="events_desc p-5">
            <p>
              Огромная польза, приносимая нашему организму баней, была открыта
              много веков назад, а актуальность этой процедуры не устратилась до
              сих пор.
            </p>
            <p>
              Мы знаем, как после насыщенного приключениями дня охота хорошо
              прогреться и насладиться расслаблением всего тела. Вы можете
              провести там время с небольшой дружной компанией до 6 человек.
            </p>
          </div>
        </div>
         <div class="col-md d-flex justify-content-center">
          <img class="w-50" src="@/assets/events_bath.png" />
        </div>
      </div>
    </div>
     <img src="@/assets/line_2.svg" class="position-absolute svg-back" style="z-index: -1; width: 100vw"/>
    <div class="container">
      <h3 class="mt-5 mb-5 text-center">Приготовление трофеев</h3>
      <div class="row align-items-center justify-content-center">
        <div class="col-md d-flex justify-content-center">
          <img class="w-50" src="@/assets/events_food.png" />
        </div>
        <div class="col-md">
          <div class="events_desc p-5">
            <p>
              На нашей базе отдыха вы всегда можете воспользоваться
              дополнительной услугой по обработке (чистка и засолка рыбы и т.д.)
              и разделыванию трофеев или улова.
            </p>
            <p>
              Приготовить мясо или рыбу Вы можете самостоятельно, или поручите
              это нашим профессиональным поварам, которые приготовят рыбу
              домашнего копчения, уху и многое другое!
            </p>
          </div>
        </div>
      </div>
      <h3 class="mt-5 mb-5 text-center">Охота на водоплавующую дичь</h3>
      <div class="row align-items-center justify-content-center">
        
        <div class="col-md" :class="{ 'order-last': this.width <= 768 }">
          <div class="events_desc p-5">
            <p>
              Мы также занимаемся организацией охоты на водоплавующую дичь. Охота
              на птицу — удовольствие для истинных ценителей.
            </p>
            <p>
              Пернатую дичь стреляли еще наши предки, но с тех пор способы охоты
              не сильно изменились. Наши инструкторы расскажут всё о правилах
              охоты на разные виды пернатых животных. Под чутким руководством
              профессионалов Вы принесёте домой лучший трофей.
            </p>
          </div>
        </div>
        <div class="col-md d-flex justify-content-center">
          <img class="w-50" src="@/assets/events_hunting.png" />
        </div>
      </div>
    </div>
  </div>
    </div>
</template>

<script>
import Title from "../components/Title.vue";
import Cards from "../components/Cards.vue";
export default {
  name: "Events",
  components: {
    Title,
    Cards,
  },
  data() {
    return { width: null };
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
  },
  created() {
    window.addEventListener("resize", this.updateWidth);
    this.updateWidth();
  },
};
</script>

<style scoped>
.events_desc {
  background-color: #32454c;
  color: #fff;
}
.svg-back {
  z-index: -100;
  width: 100vw;
}
@media screen and (max-width: 768px) {
    .col-md img{
        width: 100vw;
        object-fit: cover;
    }
}

</style>
