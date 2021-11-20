<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand d-flex flex-column align-items-center" href="#">
          <img src="@/assets/logo.png" alt="logo" height="60" />
          <span class="logo-text">Каспийский Лотос</span>
        </a>
         
              <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse mt-2" id="navbarSupportedContent">
          <div class="nav-item">
            <span class="nav-link pt-0 pb-0 ps-0"
                >8-927-284-41-93</span
              >
              <span class="nav-link pt-0 pb-0 ps-0">soc_zinovevana@pvrr.ru</span>
              </div>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">Домики</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Мероприятия</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Контакты</a>
            </li>
          </ul>
          <button class="btn_border">Забронировать</button>
        </div>
        
         
              
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
<style scoped>
.navbar_set {
  height: 100px;
}
nav a, span {
  color: white !important;
  font-size: 20px;
}

.logo-text {
  color: #fdd704;
}
.btn_border {
  border: solid 3px #fdd704;
  background: transparent;
  color: white;
  padding: 5px 15px;
  font-size: 20px;
  margin: 0px 10px;
   transition: 0.5s ease;
}
.btn_border:hover {
  border: solid 3px #fdd704;
  background: #fdd704;
  color: #000;
  padding: 5px 15px;
  transition: 0.5s ease;
}
</style>
