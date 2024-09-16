import EventList from "../../components/events/EventList";
import { getAllEvents } from "../../data/dummy-data";
import EventsSearch from "../../components/events/EventsSearch";
import { useRouter } from "next/router";
export default function EventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function findFillteredEvents(year, month) {
    const fullPath = `/events/${year}/${month}`;
    
    router.push(fullPath);
  }
  return (
    <>
      <EventsSearch onSearch={findFillteredEvents} />
      <EventList events={events} />
    </>
  );
}
