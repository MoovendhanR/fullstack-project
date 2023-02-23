import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';



const Login=()=>{
  const navigate=useNavigate();
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("");
  

      const handleSubmit=()=>{
          const payload={
            email,
            password
          }
        //   console.log(payload)

          fetch("http://localhost:5000/users/login",{
             method:"POST",
             body:JSON.stringify(payload),
             headers:{
                "Content-type": "application/json"
             }
          })
          .then(res=>res.json())
          .then(res=>{
            console.log(res)
            localStorage.setItem("token",res.token);
        }).then(()=>{
            navigate("/allnotes")
        })
          .catch(err=>console.log(err))
      }
    //   fetch("http://localhost:5000/users/")
    //   .then(res=>
    //    res.json())
    //  .then(res=>console.log(res))
    //  .catch(err=>console.log(err))
    return(
        <>
           {/* <h1>this is Login page</h1>
           <input type="text" placeholder="Enter email" value={email}onChange={(e)=>setEmail(e.target.value)}/>
           <input type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
           <button onClick={handleSubmit}>Submit</button> */}

           <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
         
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email"value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleSubmit}
                >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
        </>
    )
}

export default Login;
