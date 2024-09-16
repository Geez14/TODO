"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export type TodoType = {
  id: string;
  userId: number;
  title: string;
  completed: boolean;
  description?: string;
};

export type card_view_props = {
  todos: TodoType[];
};

export const CardView: React.FC<card_view_props> = ({ todos }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>ID</TableHeader>
          <TableHeader>Title</TableHeader>
          <TableHeader>Completed</TableHeader>
          <TableHeader>Description</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {todos.map((todo) => (
          <TableRow key={todo.id}>
            <TableCell>{todo.id}</TableCell>
            <TableCell>{todo.title}</TableCell>
            <TableCell>{todo.completed ? "Yes" : "No"}</TableCell>
            <TableCell>{todo.description || "no description!"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total Todos: {todos.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};
