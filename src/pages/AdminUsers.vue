<template>
  <div>
    <h1>Панель администратора</h1>
    
    <div class="menu">
        <router-link class="nav-link" to="/admin"
                >Брони</router-link>
        <router-link class="nav-link" to="/adminrooms"
                >Номера</router-link>
        <router-link class="nav-link" to="/adminusers"
                >Пользователи</router-link>
    </div>

    <div class="cont">
        <table class="booking">
            <thead>
                <tr>
                <th>ID</th>
                <th>Номер</th>
                <th>Фамилия</th>
                <th>Удалить</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td aria-label="ID">8:00-12:00</td>
                <td aria-label="Номер">Николай</td>
                <td aria-label="Фамилия">Нет</td>
                <td aria-label="Удалить">Ирина сделай кнопку</td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>

export default {
  name: "AdminUsers",
  
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Playfair Display", serif;
}
h1, h2 {
    margin: 1%;
}
a {
    color:black !important;
}
.menu{
    display: flex;
    flex-direction: row;
}
table.booking {width: 100%; border: 0px; border-collapse: collapse;}
table.booking thead {font-weight: bold;}
table.booking td {padding: 0.6rem 1rem; border-bottom: 1px solid #e8e9eb;}
.cont{
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