import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    Box,
    useBreakpointValue,
  } from '@chakra-ui/react';
import SimpleThreeColumns from './About';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

  
  export default function Home() {

    const navigate = useNavigate();



    return (
        <>
      <Stack minH={'50vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}>
                Freelance
              </Text>
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
                Design Projects
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              The project board is an exclusive resource for contract work. It's
              perfect for freelancers, agencies, and moonlighters.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} justifyContent={'center'} spacing={4}>
              <Button 
              onClick={() => {
                navigate('/signin');
              }} 
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Log in
              </Button>
              <Button onClick={() => {
          navigate('/signup');
        }} rounded={'full'}>Sign up</Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
            <Box boxSize={'ld'}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://pyjamahr.com/wp-content/uploads/2022/04/recruitment-analytic.png'
            }
          />
          </Box>
        </Flex>
      </Stack>
      <Box >
              <SimpleThreeColumns/>
              </Box>

              </>
    );
  }