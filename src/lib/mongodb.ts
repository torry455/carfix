// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI!;
// if (!uri) throw new Error("Please add your MongoDB URI to .env.local");

// const options = {};

// let client: MongoClient;
// let clientPromise: Promise<MongoClient>;

// // Гарантуємо єдиний клієнт у development
// const g = globalThis as typeof globalThis & { _mongoClientPromise?: Promise<MongoClient> };

// if (process.env.NODE_ENV === "development") {
//   if (!g._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     g._mongoClientPromise = client.connect();
//   }
//   clientPromise = g._mongoClientPromise;
// } else {
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// export default clientPromise;

// import { NextResponse } from "next/server";

// interface RequestItem {
//   id: string;
//   name: string;
//   phone: string;
//   comment: string;
//   status: string;
//   createdAt: string;
// }

// // Для простоти — зберігаємо заявки в масиві (у реальності підключай базу)
// const requests: RequestItem[] = [];

// export async function GET() {
//   // Віддаємо всі заявки
//   return NextResponse.json(requests);
// }

// export async function POST(request: Request) {
//   try {
//     const data = await request.formData();

//     const name = data.get("name")?.toString() || "";
//     const phone = data.get("phone")?.toString() || "";
//     const comment = data.get("comment")?.toString() || "";
//     const photo = data.get("photo"); // Blob або null

//     const newRequest = {
//       id: Date.now().toString(),
//       name,
//       phone,
//       comment,
//       status: "new",
//       createdAt: new Date().toISOString(),
//     };

//     requests.push(newRequest);

//     // Відправка повідомлення в Телеграм (як у твоєму коді)

//     const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
//     const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

//     const message = `
// Нова заявка:
// Ім'я: ${name}
// Телефон: ${phone}
// Коментар: ${comment}
//     `;

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

//     // Відправка фото (якщо є)
//     if (photo && photo instanceof Blob) {
//       const buffer = Buffer.from(await photo.arrayBuffer());
//       const formDataTelegram = new FormData();
//       formDataTelegram.append("chat_id", TELEGRAM_CHAT_ID);
//       formDataTelegram.append("photo", new Blob([buffer], { type: photo.type }), "photo.jpg");
//       formDataTelegram.append("caption", `Фото пошкодження від ${name}`);

//       const telegramPhotoRes = await fetch(
//         `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendPhoto`,
//         {
//           method: "POST",
//           body: formDataTelegram,
//         }
//       );

//       if (!telegramPhotoRes.ok) {
//         console.warn("Не вдалося відправити фото в Телеграм");
//       }
//     }

//     return NextResponse.json(newRequest, { status: 201 });
//   } catch (error) {
//     return NextResponse.json(
//       { error: (error as Error).message || "Серверна помилка" },
//       { status: 500 }
//     );
//   }
// }

// export async function PUT(request: Request) {
//   try {
//     const { id, status } = await request.json();

//     const index = requests.findIndex((r) => r.id === id);
//     if (index === -1) {
//       return NextResponse.json({ error: "Заявка не знайдена" }, { status: 404 });
//     }

//     requests[index].status = status;

//     return NextResponse.json(requests[index]);
//   } catch (error) {
//     return NextResponse.json(
//       { error: (error as Error).message || "Серверна помилка" },
//       { status: 500 }
//     );
//   }
// }

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Додаємо тип для глобальної змінної
interface GlobalWithMongo {
  _mongoClientPromise?: Promise<MongoClient>;
}

const g = globalThis as GlobalWithMongo;

if (process.env.NODE_ENV === "development") {
  if (!g._mongoClientPromise) {
    client = new MongoClient(uri);
    g._mongoClientPromise = client.connect();
  }
  clientPromise = g._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
