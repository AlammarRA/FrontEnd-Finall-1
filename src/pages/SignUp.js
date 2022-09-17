import { Input } from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react'
import {
  ChakraProvider,
  Flex,
  theme,
  Box,
  FormControl,
  FormLabel,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
        <ChakraProvider theme={theme}>
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
         <Text fontSize={'lg'} color={'gray.600'}>
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={100}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Full Name</FormLabel>
                  <Input type="text"/>
                </FormControl>
              </Box>
            </HStack>
            <HStack>

              <Box>
                <FormControl id="username" isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input type="text"/>
                </FormControl>
              </Box>
              </HStack>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <HStack>
              <Box>
                <FormControl id="major" isRequired>
                  <FormLabel>Major</FormLabel>
                  <Input type="text"/>
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder='xxxx@hotmail.com' />
            </FormControl>
            <HStack>
              <Box>
                <FormControl id="phoneNumber" isRequired>
                  <FormLabel>Phone Number</FormLabel>
                  <Input type="text"  placeholder='05xxxxx'/>
                </FormControl>
              </Box>

            </HStack>
            <RadioGroup defaultValue='2'>
               <Stack spacing={5} direction='row'>
              <Radio colorScheme='red' value='1'>
                     HR
                   </Radio>
             <Radio colorScheme='green' value='2'>
                 Custmer
                 </Radio>
                 </Stack>
               </RadioGroup>

            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </ChakraProvider>
  );
}