import Image from "next/image";
import Link from "next/link";

export default function EventItem(event) {
  const { id, title, date, image, location } = event;

  const modifyDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const modifyLocation = location?.replace(", ", "\n");
  const modifyLink = `/events/${id}`;

  return (
    <li>
      <img src={"/" + image} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{modifyDate}</time>
          </div>
          <div>
            <address>{modifyLocation}</address>
          </div>
        </div>
        <div>
          <Link href={modifyLink}>Explore Events</Link>
        </div>
      </div>
    </li>
  );
}
