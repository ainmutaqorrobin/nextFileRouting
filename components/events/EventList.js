import EventItem from "./EventItem";

export default function EventList({ events }) {
  return (
    <ul>
      {events.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          date={event.date}
          image={event.image}
          location={event.location}
        />
      ))}
    </ul>
  );
}
