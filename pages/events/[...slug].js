import { useRouter } from "next/router";
import { getFilteredEvents } from "../../data/dummy-data";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/resultsTitle";
import Button from "../../components/custom-UI/Button";
import ErrorAlert from "../../components/custom-UI/ErrorAlert";

export default function FilteredEventsPage() {
  const router = useRouter();
  console.log(router.query);

  if (!router.query || !router.query.slug) return <p>Loading....</p>;

  const {
    slug: [year, month],
  } = router.query;

  const yearNumber = +year;
  const monthNumber = +month;

  if (
    isNaN(yearNumber) ||
    isNaN(monthNumber) ||
    monthNumber < 1 ||
    monthNumber > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: yearNumber,
    month: monthNumber,
  });

  if (!filteredEvents || filteredEvents.length === 0)
    return (
      <>
        <ErrorAlert>
          <p>No events found for the filter.</p>
        </ErrorAlert>
        <div class="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );

  const date = new Date(yearNumber, monthNumber - 1);
  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  );
}
