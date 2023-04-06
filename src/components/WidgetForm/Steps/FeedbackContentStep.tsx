import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
// import { api } from "../../../lib/api";
import { ScreenshotButton } from "../ScreenshotButton";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  IconButton,
  Image,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";

interface FeedbackTypeStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent,
}: FeedbackTypeStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();

    setIsSendingFeedback(true);

    // await api.post("/feedbacks", {
    //   type: feedbackType,
    //   comment,
    //   screenshot,
    // });

    setIsSendingFeedback(false);
    onFeedbackSent();
  }

  return (
    <>
      <Flex alignItems="center" w='full' justify='center' >
        <IconButton
          aria-label="back"
          colorScheme="gray"
          variant="ghost"
          title="Voltar"
          onClick={onFeedbackRestartRequested}
          size='xs'
          icon={<Icon icon='line-md:chevron-small-left' />}
        />
        <Flex w='full' justify='center' mr={2}>
          <Image
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            boxSize="6"
          />
          <Heading as="h2" size="md" ml={2}>
            {feedbackTypeInfo.title}
          </Heading>
        </Flex>
      </Flex>
      <Flex direction='column' as='form' my='4' w='full' onSubmit={handleSubmitFeedback}>
        <FormControl>
          <Textarea
            placeholder="Conte com detalhes o que está acontecendo..."
            value={comment}
            maxH='150px'
            onChange={(event) => setComment(event.target.value)}
          />
        </FormControl>
        <Flex alignItems="center" gap={2} mt={2} flexWrap={screenshot ? 'wrap' : 'inherit'} >
          {screenshot ? (
            <Box >
              <HStack >
                <IconButton
                  aria-label="delete_screenshot"
                  type="button"
                  onClick={() => setScreenshot(null)}
                  icon={<Icon icon='ph:trash-light' />}
                />
                <Image border='1px solid #ccc' h='10' src={`${screenshot}`} />
              </HStack>
            </Box>
          ) : (
            <ScreenshotButton
              screenshot={screenshot}
              onScreenshotTaken={setScreenshot}
            />
          )}
          <Button
            w='full'
            type="submit"
            colorScheme="red"
            isLoading={isSendingFeedback}
            isDisabled={comment.length === 0 || isSendingFeedback}
          >
            Enviar feedback
          </Button>
        </Flex>
      </Flex>
    </>)
}