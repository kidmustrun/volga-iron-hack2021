<template>
  <div>
    <h1>Панель администратора</h1>

    <div class="menu">
      <ul class="nav nav-tabs m-3" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Брони
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Номера
          </button>
        </li>
      </ul>
    </div>
<div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <table class="booking m-3">
        <thead>
          <tr>
            <th>ID брони</th>
            <th>ID клиента</th>
            <th>Сумма</th>
            <th>Отменить</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td aria-label="ID брони">8:00-12:00</td>
            <td aria-label="ID клиента">Николай</td>
            <td aria-label="Сумма">Нет</td>
            <td aria-label="Отменить">Ирина сделай кнопку</td>
          </tr>
        </tbody>
      </table>
        </div>
        <div
          class="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
         <table class="booking m-3">
        <thead>
          <tr>
            <th>ID номера</th>
            <th>Описание</th>
            <th>Цена за ночь</th>
            <th>Заблокировать</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td aria-label="ID номера">8:00-12:00</td>
            <td aria-label="Описание">Николай</td>
            <td aria-label="Цена за ночь">Нет</td>
            <td aria-label="Заблокировать">Ирина сделай кнопку</td>
          </tr>
        </tbody>
      </table>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Admin",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Playfair Display", serif;
}
h1,
h2 {
  margin: 1%;
}
a {
  color: black !important;
}
.menu {
  display: flex;
  flex-direction: row;
}
table.booking {
  width: 100%;
  border: 0px;
  border-collapse: collapse;
}
table.booking thead {
  font-weight: bold;
}
table.booking td {
  padding: 0.6rem 1rem;
  border-bottom: 1px solid #e8e9eb;
}
.cont {
  margin: 2%;
}
@media screen and (max-width: 800px) {
  table.booking thead {
    display: none;
  }
  table.booking tr {
    display: block;
    margin-bottom: 1rem;
    border-bottom: 2px solid #e8e9eb;
  }
  table.booking td {
    display: block;
    text-align: right;
  }
  table.booking td:before {
    content: attr(aria-label);
    float: left;
    font-weight: bold;
  }
}
</style>