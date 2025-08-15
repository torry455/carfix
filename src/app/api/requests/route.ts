
import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

interface RequestItem {
  _id?: ObjectId;
  name: string;
  phone: string;
  comment: string;
  status: string;
  createdAt: string;
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("carfix");

    const requests = await db.collection<RequestItem>("requests").find({}).toArray();

    const serializedRequests = requests.map(r => ({
      ...r,
      _id: r._id?.toString(),
    }));

    return NextResponse.json(serializedRequests);
  } catch (error) {
    console.error("GET /api/requests ERROR:", error);
    return NextResponse.json(
      { error: (error as Error).message || "Серверна помилка" },
      { status: 500 }
    );
  }
}



export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const name = data.get("name")?.toString() || "";
    const phone = data.get("phone")?.toString() || "";
    const comment = data.get("comment")?.toString() || "";
    const photo = data.get("photo");

    const newRequest: RequestItem = {
      name,
      phone,
      comment,
      status: "new",
      createdAt: new Date().toISOString(),
    };

    const client = await clientPromise;
    const db = client.db("carfix");
    const result = await db.collection<RequestItem>("requests").insertOne(newRequest);

    // Telegram
    const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID!;
    const message = `Нова заявка:\nІм'я: ${name}\nТелефон: ${phone}\nКоментар: ${comment}`;

    await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: message }),
    });

    // Фото
    if (photo && photo instanceof Blob) {
      const buffer = Buffer.from(await photo.arrayBuffer());
      const formDataTelegram = new FormData();
      formDataTelegram.append("chat_id", TELEGRAM_CHAT_ID);
      formDataTelegram.append("photo", new Blob([buffer], { type: photo.type }), "photo.jpg");
      formDataTelegram.append("caption", `Фото пошкодження від ${name}`);
      

      await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendPhoto`, {
        method: "POST",
        body: formDataTelegram,
      });
    }

    return NextResponse.json({ id: result.insertedId, ...newRequest }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message || "Серверна помилка" },
      { status: 500 }
    );
  }
}


export async function PUT(request: Request) {
  try {
    const { id, status } = await request.json();

    if (!id || !status) {
      return NextResponse.json({ error: "Не вказано id або status" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("carfix");

    // Оновлюємо статус
    const updateResult = await db
      .collection<RequestItem>("requests")
      .updateOne(
        { _id: new ObjectId(id.toString()) },
        { $set: { status } }
      );

    if (updateResult.matchedCount === 0) {
      return NextResponse.json({ error: "Заявка не знайдена" }, { status: 404 });
    }

    // Беремо оновлений документ
    const updatedRequest = await db
      .collection<RequestItem>("requests")
      .findOne({ _id: new ObjectId(id.toString()) });

    return NextResponse.json(updatedRequest);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message || "Серверна помилка" },
      { status: 500 }
    );
  }
}


export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json(); // отримуємо id з фронтенду

    if (!id) {
      return NextResponse.json({ message: "ID не вказано" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("carfix");
    const collection = db.collection("requests");

    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ message: "Картка не знайдена" }, { status: 404 });
    }

    return NextResponse.json({ message: "Картка видалена" });
  } catch (err) {
    console.error("DELETE /api/requests ERROR:", err);
    return NextResponse.json({ message: "Серверна помилка" }, { status: 500 });
  }
}