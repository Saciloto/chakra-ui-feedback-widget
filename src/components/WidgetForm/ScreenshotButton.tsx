import html2canvas from 'html2canvas'
import { useState } from "react";
import { Loading } from "../Loading";
import { Box, Button, Flex, IconButton, Image } from '@chakra-ui/react';
import { Icon } from '@iconify/react';

interface FeedbackTypeStepProps {
  onScreenshotTaken: (screenshot: string | null) => void;
  screenshot: string | null;
}

export function ScreenshotButton({ onScreenshotTaken, screenshot }: FeedbackTypeStepProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector('html')!)
    const base64image = canvas.toDataURL('image/png')

    onScreenshotTaken(base64image)
    setIsTakingScreenshot(false)
  }

  return (
    <IconButton
      aria-label='screenshot_button'
      onClick={handleTakeScreenshot}
      icon={isTakingScreenshot ? <Loading /> : <Icon icon='material-symbols:photo-camera-outline' />}
    />
  )
}