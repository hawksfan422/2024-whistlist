import { SimpleGrid} from '@chakra-ui/react';
import { useState } from 'react';

import item1 from '../assets/item1.png'
import item2 from '../assets/item2.png'
import item3 from '../assets/item3.png'
import item4 from '../assets/item4.png'
import item5 from '../assets/item5.png'
import item6 from '../assets/item6.png'




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
            linkimage:"/2024-wishlist/amazon.jpg",
        },
        {
            name:"Quntis Computer Monitor Lamp, Screen Monitor Light Bar",
            price:"$39.99",
            image: item2,
            link:"https://www.amazon.com/dp/B08DKQ3JG1/?coliid=I1W0BLMOKFCUPW&colid=34XEYC7ZLUSQ4&ref_=list_c_wl_lv_ov_lig_dp_it&th=1",
            linkimage: "/2024-wishlist/amazon.jpg",
        },
        {
            name:"Essential Cropped Full-Zip Hoodie",
            price:"$63.99",
            image: item3,
            link:"https://www.abercrombie.com/shop/us/p/essential-cropped-full-zip-hoodie-57732341?faceout=prod&seq=01",
            linkimage:"/2024-wishlist/Abercrombie.svg",
        },
        {
            name: "Automatic Cat Feeders, 3L Timed Cat Dry Food Dispenser",
            price: '$32.99',
            image: item4,
            link: "https://www.amazon.com/dp/B0D3LQNCWW/?coliid=I2ZOMND5NV3OHY&colid=34XEYC7ZLUSQ4&ref_=list_c_wl_lv_ov_lig_dp_it&th=1",
            linkimage:"/2024-wishlist/amazon.jpg"
        },

        {
            name: "WWE Entrance Greats Jeff Hardy Action Figure",
            price: '$29.99',
            image: item5,
            link: "https://www.amazon.com/dp/B076FLF7L9/?coliid=I16Y0IQ4E7Z60G&colid=34XEYC7ZLUSQ4&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it",
            linkimage:"/2024-wishlist/amazon.jpg"
        },

        {
            name: "MOSISO Laptop Sleeve 13-13.3 inch Notebook,",
            price: '$14.39',
            image: item6,
            link: "https://www.amazon.com/MOSISO-Repellent-Compatible-13-13-3-MacBook/dp/B01A6EO0N2/ref=sr_1_2_sspa?crid=3MOMC8TZ678SQ&dib=eyJ2IjoiMSJ9.yXRJ6CHYLaOuZSi9h8g46RH7nIqXq_KFdMATppSIZvZg0bNYKroQQ1_jvu6bz6dP3LgXWqwOKYkm9eDul4Hj84jSPr-Gm-6OoXHiMCtb9PuJHaRG92Cn7mR1D8_Hzq38vPm8DYbG2CD4NYRo1_xwwS6NlpWAikebSZ5eXjaoRxbUbIYqAP5g9pZ-jz-kVQVgZIFl618bvMXTOM3udHnlQ3oJPb1rHd8BGRYNJX47O28.p0m0rBnVyWvQmRvpoCT9z_1havK1T3MTJ16Ok-MbqBM&dib_tag=se&keywords=13%2Binch%2Bmacbook%2Bair%2Bsleeve&qid=1733807770&sprefix=13%2Binch%2Bmacbook%2Bair%2B%2Caps%2C149&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
            linkimage:"/2024-wishlist/amazon.jpg"
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

            {/* ITEM 1 */}
            {items.map((item, index) => (
                <ItemBox
                color={'blue.100'}
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
