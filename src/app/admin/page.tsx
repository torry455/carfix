"use client";

import React from "react";
import { KanbanBoard } from "./kanbanboard/page";

const AdminPage = () => {
  return (
    <div>
      <h1>Адмінка</h1>
      <p>Вітаю у панелі управління!</p>
      <KanbanBoard />
    </div>
  );
};

export default AdminPage;