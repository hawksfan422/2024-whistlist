import { SimpleGrid} from '@chakra-ui/react';
import { useState } from 'react';

import item1 from '../assets/item1.png'
import item2 from '../assets/item2.png'
import item3 from '../assets/item3.png'
import item4 from '../assets/item4.png'

import link1 from '../assets/amazon.jpg'
import link2 from '../assets/Abercrombie.svg'


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
            name:"Faluber Wooden Wrist Rest -TENKEYLESS (TKL) - Black Coating",
            price:"$24.99",
            image: item1,
            link:"https://www.amazon.com/dp/B0B3MVH6JB/?coliid=I1O1GCI8FWFX82&colid=34XEYC7ZLUSQ4&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it",
            linkimage:link1,
        },
        {
            name:"Quntis Computer Monitor Lamp, Screen Monitor Light Bar",
            price:"$39.99",
            image: item2,
            link:"https://www.amazon.com/dp/B08DKQ3JG1/?coliid=I1W0BLMOKFCUPW&colid=34XEYC7ZLUSQ4&ref_=list_c_wl_lv_ov_lig_dp_it&th=1",
            linkimage: link1,
        },
        {
            name:"Essential Cropped Full-Zip Hoodie",
            price:"$63.99",
            image: item3,
            link:"https://www.abercrombie.com/shop/us/p/essential-cropped-full-zip-hoodie-57732341?faceout=prod&seq=01",
            linkimage:link2,
        },
        {
            name: "Automatic Cat Feeders, 3L Timed Cat Dry Food Dispenser",
            price: '$32.99',
            image: item4,
            link: "https://www.amazon.com/dp/B0D3LQNCWW/?coliid=I2ZOMND5NV3OHY&colid=34XEYC7ZLUSQ4&ref_=list_c_wl_lv_ov_lig_dp_it&th=1",
            linkimage:link1
        }

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

            {/* ITEM 1 */}
            {items.map((item, index) => (
                <ItemBox
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
