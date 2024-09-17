import { useRouter } from "next/router";
import { getFilteredEvents } from "../../data/dummy-data";

export default function FilteredEventsPage() {
  const router = useRouter();
  console.log(router.query);

  const {
    slug: [year, month],
  } = router.query;

  const filteredEvents = getFilteredEvents(year, month);
  console.log(filteredEvents);

  return (
    <div>
      <h1>Filtered Events</h1>
    </div>
  );
}
