import { useRouter } from "next/router";
export default function ClientProjectsPage() {
  const router = useRouter();
  console.log(router.query);

  function loadProject() {
    const client = { id: "robin", clientprojectid: "ExpressProject" };
    console.log(`/clients/${client.id}/${client.clientprojectid}`);

    router.push(`/clients/${client.id}/${client.clientprojectid}`);
  }

  return (
    <div>
      <h1>The Projects of a Client</h1>
      <button onClick={loadProject}>Load Project A</button>
    </div>
  );
}
