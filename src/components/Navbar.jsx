import { HStack, Button, Flex } from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";
import { SiAlienware } from "react-icons/si";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = () => {
        if (location.pathname === '/' || location.pathname === '') {
            navigate('/OtherList');
        } else {
            navigate('/');
        }
    };

    return (
        <Flex bg={'white'} w={'100vw'} justifyContent={'center'} alignItems={'center'}>
            <HStack w='90%' justifyContent={'space-between'}>
                <Button marginTop={3} onClick={handleNavigation}>
                    {location.pathname === '/' || location.pathname === '' ? <FaRegHeart /> : <SiAlienware />}
                </Button>
            </HStack>
        </Flex>
    );
};

export default Navbar;