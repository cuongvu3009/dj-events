import EventItem from '@/components/EventItem';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { API_URL } from '@/config/index';

export default function HomePage({ events }) {
  return (
    <Layout>
      <h1>Upcoming events</h1>
      {events.length === 0 && <h3>No Events to show</h3>}
      {events.map((e) => {
        return <EventItem e={e} key={e.id} />;
      })}
      {events.length > 0 && (
        <Link href='/events'>
          <a className='btn-secondary'>See all events</a>
        </Link>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events: events.slice(0, 3) },
    revalidate: 1,
  };
}
