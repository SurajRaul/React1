import './RoomCard.css';
export function DinningCard({menu}) {
    return (
        <div className="card" style={{width: '18rem'}}>
        <img src={menu.image} className="card-img-top" alt="emp" />
        <div className="card-body">
          <ul className="list-group list-group-flush">
                <li className="list-group-item"><h6>#{menu.menu_id}</h6></li>
                <li className="list-group-item"><b>Dish :</b> {menu.title_menu}</li>
                <li className="list-group-item"><b>Description:</b> {menu.description_menu}</li>
                <li className="list-group-item"><b>Price: </b>Rs.{menu.price_menu}</li>
         </ul>
        </div>
      </div>
    );
}