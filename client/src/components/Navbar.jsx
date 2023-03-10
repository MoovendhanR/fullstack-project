import { React } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { Link } from "react-router-dom";


import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';


export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Link to={'/'}>
            <Box>Logo</Box>
            </Link> 
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
             <Link to="/createnote">
              CreateNotes
             </Link>
             <Link to="/allnotes">
              AllNotes
             </Link>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                 <Avatar src="https://i.pravatar.cc/300"/>
              </MenuButton>
              <MenuList>
                <Link to='/register'>
                <MenuItem>Regisister</MenuItem>
                </Link>
                <Link to="/login">
                <MenuItem>Login</MenuItem>
                </Link>
                <MenuDivider />
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
            <Link to="/createnote">
              CreateNotes
             </Link>
             <Link to="/allnotes">
              AllNotes
             </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}></Box>
    </>
  );
}