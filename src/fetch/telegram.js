import axios from 'axios';

const TOKEN = '6292015552:AAHSUgoQ-cOP3487YaEU2henTvZNXNXbRfE';
const CHAT_ID = -1001881833593;
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

export const sendFeedback = message => {
  axios.post(URI_API, {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: message,
  });
};
