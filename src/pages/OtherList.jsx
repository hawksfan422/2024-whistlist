import { Text, Box, SimpleGrid, VStack, HStack, } from "@chakra-ui/react"
import Items from "../components/OtherItems"

const OtherList = () => {
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
            bgGradient={'linear(to-r, purple.200, purple.500)'}
            bgClip={'text'}
            >SECRET </Text>
            <Text>Wishlist</Text>
            <Text fontSize={'xx-small'}>for eva only</Text>

        </HStack>
        <VStack margin={5}>
            <Items />
        </VStack>
        
    </Box>
    )
};

export default OtherList