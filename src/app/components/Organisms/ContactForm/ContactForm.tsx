"use client";

import React, { useState, useEffect } from "react";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: "",
    photo: null as File | null,
  });

  const [message, setMessage] = useState<{ text: string; type: "success" | "error" | null }>({ text: "", type: null });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setFormData((prev) => ({ ...prev, photo: e.target.files![0] }));
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formToSend = new FormData();
      formToSend.append("name", formData.name);
      formToSend.append("phone", formData.phone);
      formToSend.append("comment", formData.comment);
      if (formData.photo) {
        formToSend.append("photo", formData.photo);
      }

      const res = await fetch("/api/requests", {
        method: "POST",
        body: formToSend,
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ text: "Форма успішно відправлена!", type: "success" });
        setFormData({ name: "", phone: "", comment: "", photo: null });
      } else {
        setMessage({ text: "Помилка відправки: " + (data.error || "невідома"), type: "error" });
      }
    } catch (err) {
      setMessage({ text: "Помилка мережі", type: "error" });
      console.error(err);
    }
  };

  useEffect(() => {
    if (message.type) {
      const timeout = setTimeout(() => setMessage({ text: "", type: null }), 3000);
      return () => clearTimeout(timeout);
    }
  }, [message]);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#1c1e22] rounded-lg shadow-lg flex flex-col gap-4 relative"
    >
      <h4 className="text-2xl font-[Manrope-ExtraBold] text-[#BE7D00] mb-4">
        Записатись на послугу
      </h4>

      <label className="block">
        <span className="text-[#CFCFCF] mb-1 block">
          Ваше ім&#39;я <span className="text-red-500">*</span>
        </span>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ім'я"
          className="mt-1 block w-full rounded-md bg-[#111215] border border-[#555] text-white px-3 py-2"
          required
        />
      </label>

      <label className="block">
        <span className="text-[#CFCFCF] mb-1 block">
          Телефон <span className="text-red-500">*</span>
        </span>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+380..."
          className="mt-1 block w-full rounded-md bg-[#111215] border border-[#555] text-white px-3 py-2"
          required
        />
      </label>

      <label className="block">
        <span className="text-[#CFCFCF] mb-1 block">Коментар</span>
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          placeholder="Ваш запит або коментар"
          rows={3}
          className="mt-1 block w-full rounded-md bg-[#111215] border border-[#555] text-white px-3 py-2 resize-none"
        />
      </label>
{/* 
      <label className="block relative cursor-pointer select-none">
        <span className="text-[#CFCFCF] mb-1 block">Додайте фото пошкодження</span>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div
          className="
            mt-1
            inline-block
            border-2 border-[#BE7D00]
            text-[#BE7D00]
            font-semibold
            px-6
            py-2
            rounded-lg
            hover:bg-[#BE7D00]
            hover:text-[#17181C]
            transition
            duration-300
            ease-in-out
            select-none
            text-center
            w-max
            shadow-sm
            hover:shadow-md
          "
        >
          Обрати файл
        </div>
        {formData.photo && (
          <p className="mt-2 text-sm text-[#BE7D00] select-text">
            Обрано файл: {formData.photo.name}
          </p>
        )}
      </label> */}

      <button
        type="submit"
        className="mt-4 w-full bg-[#BE7D00] text-[#17181C] font-semibold py-2 rounded-md hover:bg-[#d28f0a] transition-colors"
      >
        Відправити
      </button>

      {message.type && (
        <p
          className={`mt-4 font-semibold text-center select-none ${
            message.type === "success"
              ? "text-[#BE7D00]"
              : "text-[#ff6b6b]"
          }`}
          role="alert"
        >
          {message.text}
        </p>
      )}
    </form>
  );
};
