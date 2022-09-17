import React from 'react'
//import Sider from '../component/Sider'

import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
  ChakraProvider,
  Box,
  Text,
  VStack,
  Code,
  Grid,
  theme,
  Menu,
  MenuButton,
  MenuItem,
  ChevronDownIcon,
  MenuList,
  HStack
  

  


} from '@chakra-ui/react';
import Sider from '../component/Sider';

const User =()=> {


    
    
  return (
    <HStack spacing="0" width="100vw" height="100vh"> 
    <Flex justifyContent="center"
          alignItems="center"
          display={['none', 'none', 'flex']}
          backgroundColor="#F9F9FC"
          height="100vh"
          width={['0', '0', '30%']}>
      <VStack mx="auto"
            align="left"
            spacing="5"
            width={['90%', '90%', '458px']}>
      <Sider/>
      </VStack>
      </Flex>       
      <Flex  height="100vh"
          width={['100%', '100%', '50%']}
          justifyContent="center"
          alignItems="space-between"
         >
      <VStack  mx="auto"
            align="left"
            spacing="5"
            marginTop="10"
            width={['90%', '90%', '458px']}>
      <Menu>
  <MenuButton as={Button} rightIcon>
    Category
  </MenuButton>
  <MenuList>
    <MenuItem>Helth</MenuItem>
    <MenuItem>Education</MenuItem>
    <MenuItem>Besniss</MenuItem>
    <MenuItem>Tecnical</MenuItem>
  </MenuList>
      </Menu>
      </VStack>
      </Flex>
      </HStack>
  )
}

export default User