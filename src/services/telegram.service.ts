class TelegramService {
  apiBase = 'https://api.telegram.org/bot';

  constructor() {
    const telegramToken = process.env.TELEGRAM_KEY as string;
    this.apiBase += telegramToken;
  }
  sendMessage(chat_id: string, text: string, parse_mode = undefined) {
    return fetch(`${this.apiBase}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id,
        text,
        parse_mode
      })
    }).then(r => r.json())
  }
  setWebhook(url: string) {
    return fetch(`${this.apiBase}/setWebhook`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url,
        drop_pending_updates: true
      })
    })
  }
  sendPhoto(chat_id: string, photo_url: string, caption = '') {
    return fetch(`${this.apiBase}/sendPhoto`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id,
        photo: photo_url,
        caption,
      })
    })
  }
  deleteMessage(chat_id: string, message_id: string) {
    return fetch(`${this.apiBase}/deleteMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id,
        message_id,
      })
    })
  }
  editMessageText(chat_id: string, message_id: string, text: string) {
    return fetch(`${this.apiBase}/editMessageText`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id,
        message_id,
        text,
      })
    })
  }
}

export default TelegramService;
