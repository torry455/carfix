"use client";

import React, { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { createPortal } from "react-dom";
import { ObjectId } from "mongodb";
import { FaUndo, FaEdit } from "react-icons/fa";
import { EditRequestModal } from "./modal";

type Status = "new" | "in progress" | "done";

export interface RequestItem {
  id: string;
  name: string;
  phone: string;
  comment: string;
  status: Status;
  createdAt: string;
  _id: ObjectId;
    assignee?: string;
    masterComment?: string;
}

interface DraggableCardProps {
  request: RequestItem;
  onStatusChange: (id: string, status: Status) => Promise<void>;
  onEdit?: (updated: Partial<RequestItem> & { id: string }) => void;
  columnStatus?: Status;
  isOverlay?: boolean;
  onDelete?: (id: string) => void; 
}

function getBorderColor(status: Status) {
  switch (status) {
    case "new": return "border-yellow-600";
    case "in progress": return "border-orange-500";
    case "done": return "border-green-500";
    default: return "border-gray-700";
  }
}

export const DraggableCard: React.FC<DraggableCardProps> = ({
  request,
  onStatusChange,
  onEdit,
  columnStatus,
  isOverlay = false,
  onDelete,
}) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useSortable({ id: request.id });
  const [modalOpen, setModalOpen] = useState(false);
  // const [comment, setComment] = useState(request.comment);
  // const [dateTime, setDateTime] = useState(new Date(request.createdAt).toISOString().slice(0, 16));

  // const handleSave = () => {
  //   if (onEdit) {
  //     onEdit({
  //       id: request.id,
  //       comment,
  //       createdAt: new Date(dateTime).toISOString(),
  //     });
  //   }
  //   setModalOpen(false);
  // };

const handleDelete = async (id: string) => {
  try {
    const res = await fetch("/api/requests", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (!res.ok) throw new Error("Delete failed");

    console.log("Картка видалена");

    // Оновлюємо стан у батьківському компоненті
    if (onDelete) onDelete(id);

  } catch (err) {
    console.error(err);
  }
};


  const getPreviousStatus = (status: Status): Status | null => {
  switch (status) {
    case "in progress":
      return "new";
    case "done":
      return "in progress";
    default:
      return null;
  }
};


const renderButtons = () => {
  if (!columnStatus) return null;

  const commonEditButton = (
    <button
      onPointerDown={(e) => e.stopPropagation()}
      onClick={(e) => { e.stopPropagation(); setModalOpen(true); }}
      className="px-3 py-1 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition pointer-events-auto"
    >
      <FaEdit />
    </button>
  );

  const previousStatus = getPreviousStatus(columnStatus);

  switch (columnStatus) {
    case "new":
      return <>
        <button
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => { e.stopPropagation(); onStatusChange(request.id, "in progress"); }}
          className="px-3 py-1 bg-yellow-600 text-black rounded-md hover:bg-yellow-500 transition pointer-events-auto"
        >
          В обробку
        </button>
        {commonEditButton}
      </>;
    case "in progress":
      return <>
        <button
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => { e.stopPropagation(); onStatusChange(request.id, "done"); }}
          className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-500 transition pointer-events-auto"
        >
          Завершити
        </button>

        {previousStatus && (
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); onStatusChange(request.id, previousStatus); }}
            className="px-3 py-1 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition pointer-events-auto"
          >
                <FaUndo />
          </button>
        )}

        {commonEditButton}
      </>;
    case "done":
      return <>
<button
  onPointerDown={(e) => e.stopPropagation()}
  onClick={(e) => {
    e.stopPropagation();
    handleDelete(request.id); // <- обов'язково дужки!
  }}
  className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-500 transition pointer-events-auto"
>
  Видалити
</button>

        {previousStatus && (
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); onStatusChange(request.id, previousStatus); }}
            className="px-3 py-1 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition pointer-events-auto"
          >
                <FaUndo />
          </button>
        )}

        {commonEditButton}
      </>;
    default:
      return null;
  }
};



  return (
    <>
<div
  ref={setNodeRef}
  {...attributes}
  className={`rounded-md p-5 mb-5 select-text border-2 bg-[#1c1e22] text-white
    ${getBorderColor(request.status)}
    ${isDragging || isOverlay ? "shadow-2xl z-50" : "shadow-md"}
    ${isDragging || isOverlay ? "cursor-grabbing" : "cursor-grab"}
    ${isOverlay ? "pointer-events-none" : ""}`}
  style={{
    transform: CSS.Transform.toString(transform),
    transition: isDragging ? undefined : "transform 0.2s ease",
  }}
>
  <div {...(!isOverlay ? listeners : {})}>
    <div className="font-extrabold text-lg mb-2">{request.name}</div>
    <p className="text-gray-400 mt-1">{request.phone}</p>
    {request.comment && <p className="text-gray-300 mt-2">{request.comment}</p>}
  </div>

  <div className="mt-4 flex flex-wrap gap-2 pointer-events-auto">
    {renderButtons()}
  </div>
</div>




      {/* {modalOpen && createPortal(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#1c1e22] rounded-lg p-6 w-96 text-white shadow-lg">
            <h3 className="text-xl font-bold mb-4">Редагувати заявку</h3>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Коментар"
              className="w-full p-2 mb-4 rounded-md bg-gray-900 text-yellow-400"
            />
            <label className="block mb-2">Дата та час:</label>
            <input
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              className="w-full p-2 mb-4 rounded-md bg-gray-900 text-yellow-400"
            />
            <div className="flex justify-end gap-2">
              <button onClick={() => setModalOpen(false)} className="px-4 py-2 bg-gray-600 rounded-md hover:bg-gray-700">Відмінити</button>
              <button onClick={handleSave} className="px-4 py-2 bg-yellow-600 text-black rounded-md hover:bg-yellow-500">Зберегти</button>
            </div>
          </div>
        </div>, document.body
      )} */}
      {modalOpen && createPortal(
  <EditRequestModal
    request={request}
    onClose={() => setModalOpen(false)}
    onSave={onEdit!} // передаємо функцію редагування
  />,
  document.body
)}
    </>
  );
};
