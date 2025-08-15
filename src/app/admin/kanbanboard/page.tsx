"use client";

import React, { useEffect, useState } from "react";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  
} from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { DraggableCard, RequestItem } from "../dragablecard/card";
import { useDroppable } from "@dnd-kit/core";

type Status = "new" | "in progress" | "done";

interface DroppableColumnProps {
  status: Status;
  items: RequestItem[];
  children?: React.ReactNode;
}

const DroppableColumn: React.FC<DroppableColumnProps> = ({ status, items, children }) => {
  const { setNodeRef, isOver } = useDroppable({ id: status });

  return (
    <div
      ref={setNodeRef}
      className={`flex-1 rounded-lg p-6 min-h-[60vh] border-2 transition-colors duration-200
        ${isOver ? "border-yellow-500 bg-[#1f1f23]" : "border-yellow-600 bg-[#111215]"}`}
    >
      <h3 className="text-2xl font-bold mb-6 text-[#BE7D00] border-b border-[#BE7D00] pb-2">
        {status === "new" ? "Нові заявки" : status === "in progress" ? "В процесі" : "Завершено"}
      </h3>

      <SortableContext items={items.map((item) => item.id)} strategy={verticalListSortingStrategy}>
        {children}
      </SortableContext>
    </div>
  );
};

export const KanbanBoard: React.FC = () => {
  const [requests, setRequests] = useState<RequestItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [newTask, setNewTask] = useState({ name: "", phone: "", comment: "" });

  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
  const [activeId, setActiveId] = useState<string | null>(null);
  const columns: Status[] = ["new", "in progress", "done"];
  

  useEffect(() => { fetchRequests(); }, []);

  async function fetchRequests() {
    setLoading(true);
    try {
      const res = await fetch("/api/requests");
      const data = await res.json();
      const mapped = (data as RequestItem[]).map((r) => ({ ...r, id: r._id.toString() }));
      setRequests(mapped);
    } catch (error) { console.error(error); }
    setLoading(false);
  }

  async function updateStatus(id: string, status: Status) {
    setRequests((prev) => prev.map((r) => r.id === id ? { ...r, status } : r));
    try {
      const res = await fetch("/api/requests", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, status }) });
      if (!res.ok) throw new Error("Update failed");
    } catch (error) { console.error(error); }
  }

  async function handleEdit(updated: Partial<RequestItem> & { id: string }) {
    setRequests((prev) => prev.map((r) => r.id === updated.id ? { ...r, ...updated } : r));
    try {
      const res = await fetch("/api/requests", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(updated) });
      if (!res.ok) throw new Error("Update failed");
    } catch (error) { console.error(error); }
  }

  async function addNewTask(e: React.FormEvent) {
    e.preventDefault();
    if (!newTask.name.trim() || !newTask.phone.trim()) return;
    try {
      const res = await fetch("/api/requests", { method: "POST", body: new URLSearchParams(newTask) });
      if (!res.ok) throw new Error("Create failed");
      const created = await res.json();
      setRequests((prev) => [...prev, { ...created, id: created.id }]);
      setNewTask({ name: "", phone: "", comment: "" });
    } catch (error) { console.error(error); }
  }

const handleDragEnd = (event: DragEndEvent) => {
  const { active, over } = event;
  if (!active || !over) return;

  const activeItem = requests.find(r => r.id === active.id);
  if (!activeItem) return;

  // Дроп на колонку
  if (columns.includes(over.id as Status)) {
    const newStatus = over.id as Status;
    if (activeItem.status !== newStatus) updateStatus(activeItem.id, newStatus);
    return;
  }

  // Дроп на картку в тій же колонці
  const overItem = requests.find(r => r.id === over.id);
  if (!overItem) return;

  if (activeItem.status === overItem.status) {
    const filtered = requests.filter(r => r.status === activeItem.status);
    const oldIndex = filtered.findIndex(r => r.id === active.id);
    const newIndex = filtered.findIndex(r => r.id === over.id);
    const reordered = arrayMove(filtered, oldIndex, newIndex);
    setRequests(prev => [
      ...prev.filter(r => r.status !== activeItem.status),
      ...reordered
    ]);
  } else {
    updateStatus(activeItem.id, overItem.status);
  }
};

  return (
    <div className="p-6  mx-auto bg-[#1c1e22] min-h-screen rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold mb-8 text-[#BE7D00] drop-shadow-md">Дошка заявок</h2>

      <form onSubmit={addNewTask} className="mb-8 flex flex-col sm:flex-row gap-4 items-center">
        <input name="name" value={newTask.name} onChange={(e) => setNewTask({ ...newTask, name: e.target.value })} placeholder="Ім'я" required className="px-4 py-2 rounded-md border border-[#BE7D00] bg-[#111215] text-[#BE7D00] placeholder-[#BE7D00] focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full sm:w-1/4 transition"/>
        <input name="phone" value={newTask.phone} onChange={(e) => setNewTask({ ...newTask, phone: e.target.value })} placeholder="Телефон" required className="px-4 py-2 rounded-md border border-[#BE7D00] bg-[#111215] text-[#BE7D00] placeholder-[#BE7D00] focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full sm:w-1/4 transition"/>
        <input name="comment" value={newTask.comment} onChange={(e) => setNewTask({ ...newTask, comment: e.target.value })} placeholder="Коментар" className="px-4 py-2 rounded-md border border-[#BE7D00] bg-[#111215] text-[#BE7D00] placeholder-[#BE7D00] focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full sm:w-2/4 transition"/>
        <button type="submit" className="bg-[#BE7D00] hover:bg-yellow-600 text-[#17181C] font-semibold px-6 py-2 rounded-md transition shadow-md hover:shadow-xl">Додати заявку</button>
      </form>

      {loading ? (
        <p className="text-center text-[#BE7D00]">Завантаження...</p>
      ) : (
<DndContext
  sensors={sensors}
  onDragStart={(event) => setActiveId(event.active.id as string)}
  onDragEnd={(event) => { handleDragEnd(event); setActiveId(null); }}
>
  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {columns.map((status) => {
      const itemsInColumn = requests.filter((r) => r.status === status);
      return (
        <DroppableColumn key={status} status={status} items={itemsInColumn}>
          <SortableContext
            items={itemsInColumn.map((r) => r.id)}
            strategy={verticalListSortingStrategy}
          >
            {itemsInColumn.map((r) => (
              <DraggableCard
                key={r.id}
                request={r}
                onStatusChange={updateStatus}
                onEdit={handleEdit}
                columnStatus={status}
                onDelete={(id) => setRequests(prev => prev.filter(r => r.id !== id))}
              />
            ))}
          </SortableContext>
        </DroppableColumn>
      );
    })}
  </div>

  <DragOverlay>
    {activeId && (
      <DraggableCard
        request={requests.find(r => r.id === activeId)!}
        onStatusChange={updateStatus}
        onEdit={handleEdit}
        columnStatus={requests.find(r => r.id === activeId)!.status}
        isOverlay={true}
          onDelete={(id) => setRequests(prev => prev.filter(r => r.id !== id))}
      />
    )}
  </DragOverlay>
</DndContext>

      )}
    </div>
  );
};
