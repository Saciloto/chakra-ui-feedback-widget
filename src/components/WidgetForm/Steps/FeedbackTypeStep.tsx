import { FeedbackType, feedbackTypes } from "..";
import { Button, Flex, HStack, Image, Text, useColorModeValue } from "@chakra-ui/react";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
  return (
    <>
      <Flex justify="space-between" align="center" w='full'>
        <Text w='full' fontSize="xl" fontWeight="semibold" textAlign='center'>Deixe seu feedback</Text>
      </Flex>

      <HStack py={6} gap={2} flexWrap="wrap">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <Button
              key={key}
              h='full'
              borderRadius="lg"
              py={4}
              px={2}
              w={24}
              flex={1}
              flexDir="column"
              alignItems="center"
              gap={2}
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            >
              <Image src={value.image.source} alt={value.image.alt} />
              <Text>{value.title}</Text>
            </Button>
          )
        })}
      </HStack>
    </>
  )
}
