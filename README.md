# Каспийский лотос. Frontend-репозиторий

## Установка зависимостей проекта
```
npm install
```

### Запуск проекта для разработки
```
npm run serve
```

### Сборка Production версии
```
npm run build
```

### Линтер
```
npm run lint
```
### Использование
Проект будет доступен на http://localhost:8080/
Проверьте проект, получается ли авторизоваться на сайте. Если нет, значит выключился временный хостинг, на котором находятся данные. Другого хостинга на данный момент нет, приносим извинения за данные неудобства.

В таком случае, необходимо самостоятельно подключить его к внешнему API. Для этого нужно запустить серверную часть приложения, она запускается по отдельной инструкции, размещенной в репозитории серверной части проекта (ссылка: https://github.com/kartonly/lotos). После чего в папке src/api во всех файлах нужно поменять переменную BASE_URL на 'http://localhost:8120' и запускать приложение локально. Но НЕ РЕКОМЕНДУЕМ этот способ, поскольку может потребоваться дополнительная настройка сервера.

### Основные разделы
На сайте представлена главная страничка с основной информацией, ссылки на контакты, мероприятия, домики турбазы. Так же есть ссылки "Вход" и "Регистрация", нужные для авторизации пользователя. Авторизированный пользователь может забронировать номер и просматривать свой личный кабинет с его данными и созданными бронированиями, неавторизированный пользователь может только просматривать основную информацию. Это сделано для того, чтобы гарантировать обратную связь при бронировании и валидировать входящие заявки. 
После создания бронирования, пользователь может посмотреть его в своем личном кабинете, и, в случае чего, его отменить. 
Также пользователь может выйти из профиля, нажав кнопку "Выход". 

### Панель администратора
В приложении есть удобная функция панели администратора. Для этого необходимо авторизоваться с данными email: "admin@yandex.ru", пароль: "12345678". Чтобы зайти в панель администратора, нужно сначала зайти в свой личный кабинет и нажать там соответствующую ссылку. После этого можно просматривать и управлять данными бронирований, домиков и пользователей.
