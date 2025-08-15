"use client";

import React from "react";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { RequestItem } from "../dragablecard/card";

type Status = "new" | "in progress" | "done";

interface DroppableColumnProps {
  status: Status;
  requests: RequestItem[];
  children: React.ReactNode;
}

export const DroppableColumn: React.FC<DroppableColumnProps> = ({
  status,
  requests,
  children,
}) => {
  return (
    <div className="flex-1 flex flex-col rounded-lg p-6 min-h-[60vh] border-2 border-yellow-600 bg-[#111215]">
      <h3 className="text-2xl font-bold mb-6 text-[#BE7D00] border-b border-[#BE7D00] pb-2">
        {status === "new"
          ? "Нові заявки"
          : status === "in progress"
          ? "В процесі"
          : "Завершено"}
      </h3>

      <div className="flex-1 flex flex-col gap-5 overflow-y-auto">
        <SortableContext
          items={requests.map((r) => r.id)}
          strategy={verticalListSortingStrategy}
        >
          {children}
        </SortableContext>
      </div>
    </div>
  );
};

