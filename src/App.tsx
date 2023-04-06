import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { Widget } from './components/Widget';

const MyComponent: FC = () => {
  return (
    <Box position={'relative'} w='100vw' h='100vh'>
      <Box
        position="absolute" right={24} bottom={5} zIndex={11}
      >
        <Widget />
      </Box>
    </Box>
  );
};

export default MyComponent;
