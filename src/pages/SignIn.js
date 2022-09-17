import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChakraProvider,
  Flex,
  theme,
  VStack,
  Text,
  Button,
  HStack,
  Input,
  Image,
  useToast,
  Box,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import logo from './img/logobs.png';
const SginIn=()=> {
    const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const toast = useToast();
  const navigate = useNavigate();

  const login = async () => {
    const request = await fetch('/api/v1/auth/login', {
      method: 'POST',
      headers: {
        authorization: 'Basic ' + btoa(username + ':' + password),
      },
    });

    const data = await request.json();

    if (request.status === 401) {
      toast({
        title: 'Error',
        description: data.message,
        status: 'error',
        duration: 2000,
        isClosable: false,
        position: 'top',
      });
    } else {
      localStorage.setItem('loggedIn', true);
      navigate('/');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('loggedIn')) {
      navigate('/');
    }
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <HStack spacing="0" width="100vw" height="100vh">
        <Flex
          height="100vh"
          width={['100%', '100%', '50%']}
          justifyContent="center"
          alignItems="center"
        >
          <VStack
            mx="auto"
            align="left"
            spacing="5"
            width={['90%', '90%', '458px']}
          >
            <Text fontWeight="bold" fontSize="3rem" color="#121440">
              Sign In 
            </Text>
            <VStack spacing="10">
            <Input
          onChange={e => setUsername(e.target.value)}
          value={username}
          placeholder="Username"
          type='text'
        />
        <Input
          onChange={e => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
          type='password'
        />
            </VStack>
            <Button onClick={login} width="100%">
          Login
        </Button>
          </VStack>
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          display={['none', 'none', 'flex']}
          backgroundColor="#F9F9FC"
          height="100vh"
          width={['0', '0', '50%']}
>
          {/* <Image height="555px" width="493px" src={logo} /> */}
        </Flex>
      </HStack>
    </ChakraProvider>
  );
}

export default SginIn;