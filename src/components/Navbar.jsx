import { HStack , useColorMode, Button, Flex } from "@chakra-ui/react"

import { FiMoon } from "react-icons/fi"
import { LuSun } from "react-icons/lu";

const Navbar = () => {

    const { colorMode, toggleColorMode} = useColorMode();


    return (
        <Flex bg={('white')} w={'100vw'} justifyContent={'center'} alignItems={'center'}>
            <HStack w='90%' justifyContent={'space-between'}>
            

            <Button marginTop={3} >
                {colorMode == "light" ? <FiMoon/> : <LuSun/>}
            </Button>
            </HStack>
        </Flex>

    )
}

export default Navbar