import { useState } from "react";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Container,
  Link
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useNavigate } from "react-router-dom";




const Register=()=>{
   const [showPassword, setShowPassword] = useState(false);
   const [name,setName]=useState("")
   const [email,setEmail]=useState("")
   const [password,setPassword]=useState("")
   const [age,setAge]=useState("")
   const navigate=useNavigate()
      const handleSubmit=()=>{
          const payload={
            name,
            email,
            password,
            age
          }
          console.log(payload)

          fetch("http://localhost:5000/users/register",{
             method:"POST",
             body:JSON.stringify(payload),
             headers:{
                "Content-type": "application/json"
             }
          })
          .then(res=>res.json())
          .then(res=>console.log(res))
          .then(()=>navigate("/login"))
          .catch(err=>console.log(err))
      }
    //   fetch("http://localhost:5000/users/")
    //   .then(res=>
    //    res.json())
    //  .then(res=>console.log(res))
    //  .catch(err=>console.log(err))
    return(
        <Container>
        
           {/* <h1>this is Register page</h1>
           <input type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)}/>
           <input type="text" placeholder="Enter email"value={email}onChange={(e)=>setEmail(e.target.value)}/>
           <input type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
           <input type="text" placeholder="Enetr age" value={age} onChange={(e)=>setAge(e.target.value)}/>
           <button onClick={handleSubmit}>Submit</button> */}
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
       
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            {/* <HStack> */}
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                </FormControl>
              </Box>
            {/* </HStack> */}
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email"value={email}onChange={(e)=>setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} value={password} onChange={(e)=>setPassword(e.target.value)} />
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
            <FormControl id="age" isRequired>
              <FormLabel>Age</FormLabel>
              <Input type="number" value={age} onChange={(e)=>setAge(e.target.value)} />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                   bg: 'blue.500',
                  }}
                  onClick={handleSubmit}
                  >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link as={RouterLink} to="/login" color={'blue.400'}><Text>Login</Text></Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
           
        </Container>
    )
}

export default Register;
