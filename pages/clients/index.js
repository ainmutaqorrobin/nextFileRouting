import Link from "next/link";

export default function ClientsPage() {
  const clients = [
    { id: "robin", name: "Ain Mutaqorrobin" },
    { id: "yani", name: "Mariani" },
    { id: "haikal", name: "Muhammad Haikal" },
  ];
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
