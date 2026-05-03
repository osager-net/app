const deviceWidth = window.innerWidth;
const deviceHeight = window.innerHeight;
const content = document.GetElementById('content');

if (deviceHeight > deviceWidth) {
  content.innerHTML = "
    <!DOCTYPE html>
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="UTF-8">
        <link rel="icon" href="favicon.ico" type="image/x-icon">
        <link rel="icon" type="image/png" sizes="120x120" href="icons/favicon-120x120.png">
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-touch-icon-120x120.png">
        <link rel="manifest" href="manifest.json">
        <title>
          Osager — Твоя Страничка Блога
        </title>
      </head>
      <body style="
        background: #111111;
        color: #FFFFFF;
        font-family: system-ui, Arial, sans-serif;
        padding: 20px;
      ">
        <div align="center">
          <h1>
            Osager <img src="icons/page-icon.png" alt="Osager" style="width: 20px; height: 20px;"><br>
            Твоя страничка блога
          </h1>
          <p>
            Пожалуйста, перед использованием сайта ознакомьтесь с <a href="https://osager-net.github.io/app/instruction.html" style="
              color: #FFFFFF;
            ">
              его инструкцией
            </a>
            , а также используйте <a href="https://osager-net.github.io/app/forma.html" style="
              color: #FFFFFF;
            ">
              сайт для форм, чтобы взаимодействовать с соцсетью
            </a>
          </p>
        </div>
        <hr>
        <p>
          Osager: онлайн — пространство, которое создано для тех, кто творит и любит творчество. Публикуйте свои работы, получайте живые отклики в комментариях и находите единомышленников с помощью удобных тегов. На Osager каждый пост — это шаг к новому открытию. Покажите себя миру и откройте для себя других!
        </p>
        <hr>
        <h1>
          Хештеги и посты
        </h1>
        <h3>
          # Сладкая Кулинария
        </h3>
        <p>
          <a href="https://osager-net.github.io/app/posts/deserti.html" style="
            color: #FFFFFF;
          ">
            Десерты
          </a>
        </p>
        <br>
        <h3>
          # Семейный Ужин
        </h3>
        <p>
          Ещё нету постов
        </p>
        <br>
        <h3>
          # Моя Работа
        </h3>
        <p>
          Ещё нету постов
        </p>
        <br>
        <h3>
          # Домашняя Кухня
        </h3>
        <p>
          Ещё нету постов
        </p>
        <br>
        <h3>
          # Рецепты Для Семьи
        </h3>
        <p>
          Ещё нету постов
        </p>
        <br>
        <h3>
          # Мясные Деликатесы
        </h3>
        <p>
          Ещё нету постов
        </p>
      </body>
    </html>
  "
