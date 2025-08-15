"use client";

import React, { useState } from "react";
import { RequestItem } from "./card"; // або звідки у тебе інтерфейс

interface EditRequestModalProps {
  request: RequestItem;
  onClose: () => void;
  onSave: (updated: Partial<RequestItem> & { id: string }) => void;
}

export const EditRequestModal: React.FC<EditRequestModalProps> = ({ request, onClose, onSave }) => {
  const [priority, setPriority] = useState("medium"); // default середній
  const [assignee, setAssignee] = useState(request.assignee || "");
  const [masterComment, setMasterComment] = useState(request.masterComment || ""); // нове поле
  const [dateTime, setDateTime] = useState(new Date(request.createdAt).toISOString().slice(0, 16));
  // const [photo, setPhoto] = useState<File | null>(null);

  const handleSave = () => {
    onSave({
      id: request.id,
      assignee,
      // priority,
      masterComment,
      createdAt: new Date(dateTime).toISOString(),
      // photo,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#1c1e22] rounded-lg p-6 w-96 text-white shadow-lg">
        <h3 className="text-xl font-bold mb-4">Редагувати заявку</h3>

        {/* Пріоритет */}
        <label className="block mb-2">Пріоритет:</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full p-2 mb-4 rounded-md bg-gray-900 text-yellow-400"
        >
          <option value="low">Низький</option>
          <option value="medium">Середній</option>
          <option value="high">Високий</option>
        </select>

        {/* Відповідальна особа */}
        <label className="block mb-2">Відповідальна особа:</label>
        <input
          type="text"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          placeholder="Ім'я"
          className="w-full p-2 mb-4 rounded-md bg-gray-900 text-yellow-400"
        />

        {/* Коментар майстра */}
        <label className="block mb-2">Коментар майстра:</label>
        <textarea
          value={masterComment}
          onChange={(e) => setMasterComment(e.target.value)}
          placeholder="Внутрішній коментар майстра"
          className="w-full p-2 mb-4 rounded-md bg-gray-900 text-gray-300"
        />

        {/* Дата/час */}
        <label className="block mb-2">Дата та час:</label>
        <input
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          className="w-full p-2 mb-4 rounded-md bg-gray-900 text-yellow-400"
        />

        {/* Фото */}
        <label className="block mb-2">Фото:</label>
        <input
          type="file"
          accept="image/*"
          // onChange={(e) => setPhoto(e.target.files ? e.target.files[0] : null)}
          className="w-full mb-4"
        />

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-600 rounded-md hover:bg-gray-700">Відмінити</button>
          <button onClick={handleSave} className="px-4 py-2 bg-yellow-600 text-black rounded-md hover:bg-yellow-500">Зберегти</button>
        </div>
      </div>
    </div>
  );
};
