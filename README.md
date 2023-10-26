# Демо-версия микросайта для SmartTV

Тестовое задание на вакансию Junior Frontend Developer в компанию GetShop.TV.

Ссылка на сайт: https://stacygru.github.io/smart-tv/.

Сайт имеет фиксированное разрешение 1280х720.

## Стек технологий
- React
- TypeScript
- Redux, Redux Thunk
- Tailwind CSS
- Vite
- API: https://apilayer.com/marketplace/number_verification-api

## Функционал

- экран с видео и баннером:
   - воспроизведение видео на заднем плане;
   - появление баннера через 5 секунд после начала воспроизведения видео;
   - автоматическая фокусировка на кнопке перехода на экран ввода номера;
   - приостановление воспроизведения видео при переходе на экран ввода номера;
   - возвращение на страницу с видео при отсутствии взаимодействия пользователя с сайтом на протяжении 10 секунд и возобновление воспроизведения видео;

- экран ввода номера:
   - ввод номера телефона при помощи физической клавиатуры;
   - ввод номера телефона при помощи экранной клавиатуры (по клику или через навигацию стрелками на физической клавиатуре и подтверждение кнопкой "Enter");
   - возможность подтвердить номер телефона только при полностью введённом номере и согласии с обработкой персональных данных;
   - валидация номера телефона при помощи API;

- финальный информационный экран:
   - сообщение об успешном отправлении заявки;
   - автоматическая фокусировка на кнопке закрытия панели.
