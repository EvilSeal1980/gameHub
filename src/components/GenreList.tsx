import React from "react";
import useGenres from "../hooks/useGenres";
import { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [];
  for (let i=0; i<20; i++) {
    skeletons.push(i);
  }

  if (error) {
    return null;
  }

  return (
    <>
      <List>
        {isLoading && skeletons.map((skeleton) => 
        <ListItem key={skeleton} paddingY={'5px'}>
          <GenreListSkeleton />
        </ListItem>
        )}
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={'5px'}>
            <HStack>
                <Image boxSize={'32px'} borderRadius={8} src = {getCroppedImageUrl(genre.image_background)}/>
                <Text fontSize={'lg'}>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
