import * as React from 'react';
import { Link, useParams } from 'react-router-dom';

const Detail = ({}) => {
  const { eventId } = useParams();
  const [event, setEvent] = React.useState(null);

  React.useEffect(() => {
    fetch('https://my-json-server.typicode.com/wishrd/awesome-figma-plugin-db/events/' + eventId, {
      method: 'GET',
      headers: {
        accept: 'application/json',
      }
    })
      .then(res => res.json())
      .then(result => setEvent(result), err => console.error('Ups! error fetching the event', err))
  }, []);

  return (
    <div>
      <h1><Link to="/">Back</Link> {event?.name}</h1>
      <dl>
        <dt>Name</dt>
        <dd>{event?.name}</dd>
        <dt>Image</dt>
        <dd><img src={event?.image} width="100" height="100" /></dd>
      </dl>
    </div>
  );
};

export default Detail;
