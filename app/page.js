import Form from "@/components/form";
import Table from "@/components/table";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form />
      <Table />
    </main>
  );
}
