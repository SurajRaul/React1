import './RoomCard.css';
import { Link } from 'react-router-dom';
import roomi from '../assets/Seafood.jpg'
export function RoomCard({room,deleteRoom,editRoomPic}) {

  let arrayBufferToBase64 = buffer => {
    let binary = '';
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    console.log(window.btoa(binary));
    return window.btoa(binary);
  };
  
    return (
        <div className="card" style={{width: '18rem'}}>
        {/* <img src={room.image_url} className="card-img-top" alt="emp" /> */}
        {/* <img height="150" src={(room.image_url!=undefined)?(`data:image/png;base64,${room.image_url.data}`):(roomi)}  className="card-img-top" alt={room.room_type} /> */}
        <img height="160" src={`data:image/png;base64,${(room.image_url!=undefined)?arrayBufferToBase64(room.image_url.data):roomi}`} alt="..." />
       {/* <Link className="p-2 bg text-dark border border-light-subtle text-center nav-link" to={`/fileupload/${room.room_id}`}><button className='btn btn-outline-primary'>Edit pic</button></Link> */}
        <div className="card-body">
          <ul className="list-group list-group-flush">
                <li className="list-group-item"><h6>#{room.room_id}</h6></li>
                <li className="list-group-item"><b>Room :</b> {room.room_type}</li>
                <li className="list-group-item"><b>Description:</b> {room.description}</li>
                <li className="list-group-item"><b>Price: </b>Rs.{room.price_per_night}</li>
         </ul>
          {/* <a href="#" class="btn btn-primary space">Edit</a>
          <a href="#" class="btn btn-primary">Delete</a> */}
          <div className="card-body">
                {/* <a href="#" className="btn btn-primary space">BOOK</a> */}
                <Link className="btn btn-outline-primary space" to={`/fileupload/${room.room_id}`}>IMAGE</Link>
                <Link className="btn btn-outline-secondary space" to={`/editroom/${room.room_id}`}>EDIT</Link>
                <button onClick={()=>deleteRoom(room.room_id)} className="btn btn-outline-danger space">DELETE</button>

         </div>
        </div>
      </div>
    );
}