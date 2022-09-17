import {
  Box,
  Flex,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';




export default function Nav() {
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} color={'blue.400'} justifyContent={'space-between'}>
          <Box>Mulem</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
            <ColorModeSwitcher justifySelf="flex-end" />


              
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}