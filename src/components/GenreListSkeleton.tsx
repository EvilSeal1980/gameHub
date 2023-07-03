import { HStack, Skeleton, SkeletonText, Text } from '@chakra-ui/react'

const GenreListSkeleton = () => {
  return (
    <>
    <HStack>
        <Skeleton boxSize={'32px'} borderRadius={8}  />
        <Skeleton>
        <span>ExampleText</span>
        </Skeleton>
    </HStack>
    </>
  )
}

export default GenreListSkeleton