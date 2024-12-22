import Note from "@/components/Note";
import Form from "./components/Form";
import type { Todo } from "@/lib/types";

export default function Home() {
  const todos: Todo[] = [
    {
      content:
        "white made settle familiar both plus unit judge surface duty vegetable sweet won fuel doing leaf ordinary anyway mysterious percent stranger type beginning productGo to gym at 5am organization roll expect development meet poor angle next storm unless seen solar topic hardly examine newspaper base yesterday root about social shall job drove",
      createdAt: new Date("10-20-2023")
    },
    {
      content:
        "Go to gym at 5am organization roll expect development meet poor angle next storm unless seen solar topic hardly examine newspaper base yesterday root about social shall job drove",
      createdAt: new Date("10-20-2023")
    },
    {
      content:
        "Go to gym at 5am organization roll expect development meet poor angle next storm unless seen solar topic hardly examine newspaper base yesterday root about social shall job drove",
      createdAt: new Date("10-20-2023")
    },
    {
      content:
        "Go to gym at 5am organization roll expect development meet poor angle next storm unless seen solar topic hardly examine newspaper base yesterday root about social shall job drove",
      createdAt: new Date("10-20-2023")
    },
  ];

  return (
    <div className="p-4 w-screen h-screen">
      <div className="flex flex-col items-center bg-white/10 min-h-[80vh] p-8 gap-8">
        <Form />
        {todos.map((todo: Todo, index: number) => (
          <Note content={todo.content} createdAt={todo.createdAt} key={index} />
        ))}
      </div>
    </div>
  );
}