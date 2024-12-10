import { Box, Text, Center, Collapse, VStack, Link, Image} from "@chakra-ui/react"


function ItemBox({ name, price, image, link, linkimage, isOpen, toggleCollapse }) {

    const boxStyle = {
        bg: ('blue.100'),
        p: 4,
        borderRadius:  "md", 
        borderColor: ('black'),
        borderWidth: '3px',
        color: ('black')
    }

    return (
        <Box sx={boxStyle} onClick={toggleCollapse}>
            <Text fontWeight="bold" mb={1}>{name}</Text>
            <Text fontWeight='bold' mb={4}>{price}</Text>
        <Center h={{
            base: '8rem',
            md: '16rem',
            lg: '16rem'
            }}>
            <Image
                src={image}
                alt={name}
                w='45%'
                h={'8rem'}
                fit='contain'
                mb={4}
            />
        </Center>

        <Collapse in={isOpen} animateOpacity>
            <VStack mt={5} spacing={4}>
                <Link href={link} isExternal>
                    <Center
                    bg={'white'}
                    borderRadius={'8px'}
                    borderColor='black'
                    borderWidth={'3px'}
                    >
                        <Image
                            w='30%'
                            src={linkimage}
                            alt='link'
                            fit= 'contain'
                            borderRadius = '8px'
                        />
                    </Center>
                </Link>
            </VStack>
        </Collapse>
        </Box>
    )
}

export default ItemBox;