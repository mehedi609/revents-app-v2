import React, { useState } from 'react';
import { Button, FormField, Header, Segment } from 'semantic-ui-react';
import cuid from 'cuid';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent, updateEvent } from '../eventsSlice';
import { Formik, Form, Field } from 'formik';

const EventForm = ({ match, history }) => {
  const dispatch = useDispatch();
  const selectedEvent = useSelector(({ event }) =>
    event.events.find((evt) => evt.id === match.params.id),
  );

  const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   selectedEvent
  //     ? dispatch(updateEvent({ ...selectedEvent, ...values }))
  //     : dispatch(
  //         createEvent({
  //           ...values,
  //           id: cuid(),
  //           hostedBy: 'Mehedi',
  //           attendees: [],
  //           hostPhotoURL: '/assets/user.png',
  //         }),
  //       );
  //   history.push('/events');
  // };

  return (
    <Segment clearing>
      <Header content={selectedEvent ? 'Edit the event' : 'Create new Event'} />

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        <Form className="ui form">
          <FormField>
            <Field name="title" placeholder="Event Title" />
          </FormField>
          <FormField>
            <Field placeholder="Category" name="category" />
          </FormField>
          <FormField>
            <Field name="description" placeholder="Description" />
          </FormField>
          <FormField>
            <Field name="city" placeholder="City" />
          </FormField>
          <FormField>
            <Field name="venue" placeholder="Venue" />
          </FormField>
          <FormField>
            <Field type="date" placeholder="Event Date" name="date" />
          </FormField>

          <Button type="submit" floated="right" positive content="Submit" />
          <Button
            as={Link}
            to="/events"
            type="submit"
            floated="right"
            content="Cancel"
          />
        </Form>
      </Formik>
    </Segment>
  );
};

export default EventForm;
