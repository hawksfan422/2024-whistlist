import { Text, Box, SimpleGrid, VStack, HStack, } from "@chakra-ui/react"
import Items from "../components/Items"

const Homepage = () => {
    return (
    <Box 
    h={'100vh'}
    w={'100vw'}
    justifyContent={'center'}
    alignItems={'center'}
    >

        <HStack justifyContent={'center'} 
        fontSize={'large'} 
        fontFamily={'sans-serif'} 
        fontWeight={'bold'} 
        h={'10%'}
        > 
            <Text>Steven's </Text>
            <Text 
            bgGradient={'linear(to-r, blue.200, blue.500)'}
            bgClip={'text'}
            >AWESOME </Text>
            <Text>Wishlist</Text>

        </HStack>
        <VStack margin={5}>
            <Items/>
        </VStack>
        
    </Box>
    )
}

export default Homepage