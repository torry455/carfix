// import { NextResponse } from "next/server";

// export async function POST(request: Request) {
//   try {
//     const data = await request.formData();

//     const name = data.get("name")?.toString() || "";
//     const phone = data.get("phone")?.toString() || "";
//     const comment = data.get("comment")?.toString() || "";

//     // Якщо тобі треба — отримаєш файл як Blob (але для Telegram фото краще надсилати окремим запитом, поки пропустимо)
//     // const photo = data.get("photo") as Blob | null;

//     const message = `
// Новий запит з форми:
// Ім'я: ${name}
// Телефон: ${phone}
// Коментар: ${comment}
// `;

//     const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
//     const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

//     // Відправляємо текстове повідомлення в Телеграм
//     const telegramRes = await fetch(
//       `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           chat_id: TELEGRAM_CHAT_ID,
//           text: message,
//         }),
//       }
//     );

//     if (!telegramRes.ok) {
//       throw new Error("Не вдалося відправити повідомлення в Телеграм");
//     }

//     return NextResponse.json({ ok: true });
//   } catch (error) {
//     return NextResponse.json(
//       { ok: false, error: (error as Error).message || "Помилка сервера" },
//       { status: 500 }
//     );
//   }
// }
