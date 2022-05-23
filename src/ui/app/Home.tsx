import * as React from 'react';
import { Link } from 'react-router-dom';

const Home = ({}) => {
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    fetch('https://my-json-server.typicode.com/wishrd/awesome-figma-plugin-db/events', {
      method: 'GET',
      headers: {
        accept: 'application/json',
      }
    })
      .then(res => res.json())
      .then(result => setEvents(result), err => console.error('Ups! error fetching the event list', err))
  }, []);

  return (
    <div>
      <h1>Our events!</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
