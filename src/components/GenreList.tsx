import React from "react";
import useGenres from "../hooks/useGenres";
import { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [];
  for (let i = 0; i < 20; i++) {
    skeletons.push(i);
  }

  if (error) {
    return null;
  }

  return (
    <>
      <List>
        {isLoading &&
          skeletons.map((skeleton) => (
            <ListItem key={skeleton} paddingY={"5px"}>
              <GenreListSkeleton />
            </ListItem>
          ))}
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                fontSize={"lg"}
                variant={"link"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;