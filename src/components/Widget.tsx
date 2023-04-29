import { Box, IconButton, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverTrigger, Portal, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { WidgetForm } from './WidgetForm'
import { Icon } from '@iconify/react'
import { FormEvent } from 'react'

export function Widget({onSubimitFeedback}:{onSubimitFeedback: (event: FormEvent) =>  Promise<void>}) {
  const { toggleColorMode } = useColorMode()
  
  const icon = useColorModeValue('line-md:sunny-filled-loop-to-moon-filled-loop-transition',
    'line-md:moon-filled-to-sunny-filled-loop-transition')
    
  return (  
    <Popover placement='top-start'>
      <PopoverTrigger>
        <IconButton
          aria-label='feedback-button'
          borderRadius="full"
          colorScheme='red'
          variant='outline'
          icon={<Icon icon='ic:outline-feedback' />}
        />
      </PopoverTrigger>
      <Portal>
        <PopoverContent
          rounded="2xl"
          boxShadow="2xl"
          border='none'
        >
          <PopoverCloseButton
            aria-label='close_form_feedback'
            title="Fechar formulário de feedback"
            mt={1}
            mr={1}
          />
          <PopoverBody>
            <WidgetForm onSubimitFeedback={onSubimitFeedback}/>
          </PopoverBody>
          <PopoverFooter>
            <Box mt="auto" textAlign="center">
              <Text fontSize="xs">
                Feito com ♥ por{" "}
                <Box as="a" href="https://rocketseat.com.br" textDecoration="underline" >
                  Mauricio
                </Box>
                <IconButton
                  aria-label='togle_color'
                  title='Troque o modo de luz'
                  onClick={toggleColorMode}
                  size='xs'
                  variant='ghost'
                  ml={2}
                  icon={<Icon icon={icon} />}
                />
              </Text>
            </Box>
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover >
  )
}
