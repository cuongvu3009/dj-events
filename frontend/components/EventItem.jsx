import styles from '@/styles/EventItem.module.css';
import Image from 'next/image';
import Link from 'next/link';

const EventItem = ({ e }) => {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          alt='image-event'
          width={250}
          height={150}
          src={e.image ? e.image : '/image/event-default.png'}
        />
      </div>

      <div className={styles.info}>
        <span>
          {e.date} at {e.time}
        </span>
        <h3>{e.name}</h3>
      </div>

      <div className={styles.link}>
        <Link href={`/events/${e.slug}`}>
          <a className='btn'>Check it out</a>
        </Link>
      </div>
    </div>
  );
};

export default EventItem;
