import { setCookie, getCookie, COOKIE_NAME } from './helpers/cookie.js';

const d = new Date();
d.setHours(d.getHours() + 1);
const utc = d.toUTCString();

setCookie('text', encodeURIComponent(`tytuł
opis`), 1);
// deleteCookie('text');
console.log(getCookie('text'));