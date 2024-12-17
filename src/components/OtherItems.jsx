import { SimpleGrid} from '@chakra-ui/react';
import { useState } from 'react';

import item1 from '../assets/other/item1.png';
import item2 from '../assets/other/item2.png';
import item3 from '../assets/other/item3.png';
import item4 from '../assets/other/item4.png';
import item5 from '../assets/other/item5.png';
import item6 from '../assets/other/item6.png';

import ItemBox from './ItemBox';


function Items() {

    const [openBoxes, setOpenBoxes] = useState({});

    const toggleCollapse = (index) => {
        setOpenBoxes((prev) =>({
            ...prev,
            [index]: !prev[index],
        }))
    };

    const items = [
        {
            name:"LG 32GN650-B Ultragear Gaming Monitor 32” QHD (2560 x 1440) Display",
            price:"$226.99",
            image: item1,
            link:"https://www.amazon.com/dp/B08LLF9NS1/?coliid=I1UGCMU4P9E0OI&colid=34XEYC7ZLUSQ4&ref_=list_c_wl_lv_ov_lig_dp_it&th=1",
            linkimage:"/2024-wishlist/amazon.jpg",
        },
        {
            name:"Eva",
            price:"$5.99",
            image: item2,
            link:"https://www.pandaexpress.com/",
            linkimage:"/2024-wishlist/panda.png",
        },
        {
            name:"Utopia Bedding All Season Down Alternative",
            price:"$22.49",
            image: item3,
            link:"https://www.amazon.com/dp/B09WRM2PVM/?coliid=IPKIH3MSDC2J1&colid=CCX8ZDWBCLMO&ref_=list_c_wl_lv_ov_lig_dp_it&th=1",
            linkimage:"/2024-wishlist/amazon.jpg",
        },
        {
            name:"Pokémon Cubone",
            price:"$???",
            image: item4,
            link:"https://www.buildabear.com/pokemon-cubone-plush-bundle/32744_32775_32946_32743.html",
            linkimage:"/2024-wishlist/buildabear.png",
        },
        {
            name:"SAMSUNG 970 EVO Plus SSD",
            price:"$114.29",
            image: item5,
            link:"https://www.amazon.com/dp/B07MFZY2F2/?coliid=I264DQX52VU46S&colid=2UTXBNXPLBANG&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it",
            linkimage:"/2024-wishlist/amazon.jpg",
        },
        {
            name:"Baggy Open-Hem Sweatpant",
            price:"$55.99",
            image: item6,
            link:"https://www.abercrombie.com/shop/us/p/baggy-open-hem-sweatpant-57520356?faceout=model&seq=01",
            linkimage:"/2024-wishlist/Abercrombie.svg",
        },


    ]

    return (
        <SimpleGrid
            columns={{
                base: 1, // 1 column on small screens
                md: 2,
                lg: 3
            }}
            spacing={10} // spacing between grid items
            w='90vw'
            mb={16}
        >

            {/* ITEM */}
            {items.map((item, index) => (
                <ItemBox
                color={'purple.100'}
                key={index}
                name={item.name}
                price={item.price}
                image={item.image}
                link={item.link}
                linkimage={item.linkimage}
                isOpen={!!openBoxes[index]}
                toggleCollapse={() => toggleCollapse(index)}

            />
            ))}

        </SimpleGrid>
    );
}

export default Items;
