import React from 'react';
import { Image, List } from 'semantic-ui-react';

const EventListAttendee = ({ attendee }) => {
  return (
    <List.Item>
      <Image size="mini" src={attendee.photoURL} circular />
    </List.Item>
  );
};

export default EventListAttendee;
