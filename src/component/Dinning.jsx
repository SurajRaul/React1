import { DinningCard } from "./DinningCard";
import veg from "../assets/vegThali2.png"
import fish from "../assets/fishThali.jpg"
import chicken from "../assets/chicken_thali_2.jpg"
import img1 from "../assets/Seafood.jpg";
import img2 from "../assets/Breakfast.jpg";
import img3 from "../assets/vegaP.jpg";
import './RoomCard.css';
export function Dinning() {
    const menus = [
        {
            menu_id: 1,
            title_menu: 'Veg Thali',
            description_menu: 'Special thali welcomes you for festival.',
            price_menu: 120,
            image: veg
        }, {
            menu_id: 2,
            title_menu: 'Fish Thali',
            description_menu: 'Malvani fish thali satisfy your hunger.',
            price_menu: 400.00,
            image: fish
        },
        {
            menu_id: 3,
            title_menu: 'Chicken Thali',
            description_menu: 'Kolhapuri tambda pandhra rassa ready for party   .',
            price_menu: 250.50,
            image: chicken
        },
        {
            menu_id: 4,
            title_menu: 'Seafood Platter',
            description_menu: 'Fresh catch of the day, served with salad.',
            price_menu: 134.50,
            image: img1
        }

    ];
    let card = menus.map(menu => <DinningCard key={menu.menu_id} menu={menu}></DinningCard>);
    return (<>
        <blockquote className="blockquote">
            <h3>Dinning Menu</h3>
        </blockquote>
        <div className="container">
            {card}
        </div>
    </>
    );
}