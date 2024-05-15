import React, { useEffect, useState } from "react";
import {
  Heading,
  List,
  ListItem,
  UnorderedList,
  Card,
  Text,
  Image,
} from "@chakra-ui/react";

export const EventDetail = ({ event }) => {
  return (
    <>
      <Card minWidth="400px" maxWidth="400px" padding={3}>
        <Text> {event.title}</Text>
        <Text>{event.description}</Text>
        <Image src={event.image} alt={event.title} />
        <Text> {event.startTime} </Text>
        <Text> {event.endTime}</Text>
        <Text> {event.categoryIds}</Text>
      </Card>
    </>
  );
};
