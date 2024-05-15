// EventsPage.js
import React, { useEffect, useState } from "react";
import { useLoaderData,Link } from "react-router-dom";

import {
  Heading,
  List,
  ListItem,
  UnorderedList,
  Card,
  Text,
  Button,
  Center,
  Flex,
} from "@chakra-ui/react";
import { EventDetail } from "../components/EventDetail";
// import { Modal } from "@chakra-ui/react";
import { MyModal } from "../components/Modal";

// export const loader=async()=> {
//   const eventsResponse =await fetch("http://localhost:3000/events");
//   const categoriesResponse =await fetch( "http://localhost:3000/categories")
//   const events =await eventsResponse.json(); 
//   const categories= await categoriesResponse.json ();
// }

// export const fetchEvents=()=>{
//   const {users,post}= useLoaderData();

//   return (

  

// }







export const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:3000/events");
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const eventsData = await response.json();
        setEvents(eventsData);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <Heading>List of events</Heading>
      <UnorderedList>
        {events.map((event) => (
          <EventDetail key={event.id} event={event} />
        ))}
      </UnorderedList>
      <MyModal />
    </>
  );
};
