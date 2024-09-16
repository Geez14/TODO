"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import { CardView, TodoType } from "@/components/todo-app/card_view";

const Page: React.FC = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    // async function fetchTodos
    async function fetchTodos() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch todos");
        }
        const data: TodoType[] = await response.json();
        setTodos(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    // calling the fetchTodos function
    fetchTodos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h1>Todo App</h1>
      <CardView todos={todos} />
    </>
  );
};

export default Page;
