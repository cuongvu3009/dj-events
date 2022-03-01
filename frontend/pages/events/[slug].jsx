import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import Image from 'next/image';
import styles from '@/styles/Event.module.css';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const EventPage = ({ evt }) => {
  const deleteEvent = (e) => {};

  return (
    <Layout>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/event/edit/${evt.id}`}>
            <a>
              <FaPencilAlt /> Edit Event
            </a>
          </Link>
          <a href='#' className={styles.delete} onClick={deleteEvent}>
            <FaTimes /> Delete Event
          </a>
        </div>

        <span>
          {evt.date} at {evt.time}
        </span>
        <h1>{evt.name}</h1>
        {evt.image && (
          <Image src={evt.image} width={960} height={600} alt='event-img' />
        )}

        <h3>Performer: </h3>
        <p>{evt.performer}</p>
        <h3>Descriptions: </h3>
        <p>{evt.description}</p>
        <h3>Venue: {evt.venue}</h3>
        <p>Address: {evt.address}</p>

        <Link href='/events'>
          <a className={styles.back}>Go Back</a>
        </Link>
      </div>
    </Layout>
  );
};

export default EventPage;

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events/`);
  const events = await res.json();

  const paths = events.map((evt) => ({ params: { slug: evt.slug } }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const events = await res.json();
  return {
    props: { evt: events[0] },
  };
}
