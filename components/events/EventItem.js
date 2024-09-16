import Link from "next/link";
import styles from "./EventItem.module.css";
import Button from "../customUI/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

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
    <li className={styles.item}>
      <img src={"/" + image} alt={title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{modifyDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{modifyLocation}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={modifyLink}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
