import EventItem from '@/components/EventItem';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';

export default function EventsPage({ events }) {
  return (
    <Layout>
      <h1>All Events</h1>
      {events.length === 0 && <h3>No Events to show</h3>}
      {events.map((e) => {
        return <EventItem e={e} key={e.id} />;
      })}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}
