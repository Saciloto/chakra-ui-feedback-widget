import { FC, FormEvent } from 'react';
import { Box } from '@chakra-ui/react';
import { Widget } from './components/Widget';

const MyComponent: FC = () => {

  async function handleSubmit(data:FormEvent){
    //wait 3 seconds
    await new Promise(resolve => setTimeout(resolve, 3000))
    console.log(data)
  }

  return (
    <Box position={'relative'} w='100vw' h='100vh'>
      <Box
        position="absolute" right={24} bottom={5} zIndex={11}
      >
        <Widget onSubmitFeedback={handleSubmit}/>
      </Box>
    </Box>
  );
};

export default MyComponent;
