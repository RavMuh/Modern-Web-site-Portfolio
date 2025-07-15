import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const userId = process.env.TELEGRAM_USER_ID;

    if (!botToken || !userId) {
      return NextResponse.json({ error: 'Bot token or user ID not set' }, { status: 500 });
    }

    const text = `📩 Yangi xabar!\n\n👤 Ism: ${name}\n✉️ Email: ${email}\n💬 Xabar: ${message}`;
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const res = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: userId,
        text,
        parse_mode: 'Markdown'
      })
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'Telegram API error' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
} 