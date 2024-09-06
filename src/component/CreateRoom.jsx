import { useEffect, useState} from "react"
import { Rooms } from './Rooms';
import './CreateRoom.css';
import { useNavigate,Navigate, useLocation, useParams, useLoaderData } from "react-router-dom";
import { addRoom, getRoomById, updateRoomii } from "../model/RoomCRUD";

export function CreateRoom() {
    let { room_id } = useParams();
    let { pathname }=useLocation();
    // let [room, setRoom] = useState(new Rooms());
    const rm = useLoaderData();
    let [room, setRoom]= useState(() => setInitialData())
    function setInitialData(){
        console.log("in fun");
        if(rm != null){
            return rm[0];
        }
        else{
            return new Rooms();
        }
    }
    
    const navigate = useNavigate();
    
    // function getData(event){
    //     setRoom({...room , [event.target.id]:event.target.value})
    // }
    function getData(event) {
        const { id, type, value, files } = event.target;
        if (type === 'file') {
            convertToBase64(files[0]).then(base64 => {
                setRoom(prevState => ({
                    ...prevState,
                    [id]: base64
                }));
            });
        } else {
            setRoom(prevState => ({
                ...prevState,
                [id]: value
            }));
        }
    }
    function convertToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
    function collectData(event){
        event.preventDefault();
        console.log(room);
        if( room_id != undefined){
            updateRoom();
        }else{
            add();
        }
    }
 
    async function add(){
        const data = await addRoom(room);
        console.log(data);
        if(data){
            window.alert(`Room with id ${data.room_id} added successfully.`);
            navigate('/booking');
        }else{
            window.alert("Added");
        }
    } 
    async function updateRoom(){
        const data = await updateRoomii(room);
        console.log(data);
        if(data){
            window.alert(`Room with id ${room.room_id} updated successfully.`);
            navigate('/booking');
        }else{
            window.alert("Updated");
        }
    }
    //get room by id
    async function getRoom(){
        if(room_id != undefined){
            let ro = await getRoomById(room_id);
            console.log(ro);
            // let r =ro.room_type;
            // console.log(ro.room_type);
            setRoom(ro[0]);
    }
}

    useEffect(()=>{
        // console.log("in useEffect");
        // console.log(room_id);
        // getRoom();
        console.log("Room form rendered");
     },[room_id]);
    
    return (
        <article className="d-flex justify-content-center">
            
        <div className="mt-3 mb-3 p-4 border border-3 custom-form">
        <div className="mb-3">
        <h3>{room_id ? "Update Room" : "Create Room"}</h3>
        </div>
            <form onSubmit={collectData}>
                <div className="mb-3">
                    <label htmlFor="room_id" className="form-label">Room Id</label>
                    <input type="number" className="form-control blur" id="room_id" name="room_id" value={room?.room_id} onChange={getData} readOnly={pathname.includes('editroom') || pathname.includes('add')} />
                </div>
                <div className="mb-3">
                    <label htmlFor="room_type" className="form-label">Room Type</label>
                    <input type="text" className="form-control" id="room_type" name="room_type" value={room?.room_type} onChange={getData} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" value={room?.description} onChange={getData}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="price_per_night" className="form-label">Price</label>
                    <input type="number" className="form-control" id="price_per_night" name="price_per_night" value={room?.price_per_night} onChange={getData}/>
                </div>
                <div className="mb-3">
                {!room_id ?
                   (<> <label htmlFor="image_url" className="form-label">Image</label>
                    <input type="file" className="form-control" id="image_url" name="image_url" onChange={getData}/></>):(<><sup>* </sup> Image Edit done Seperately</>)
                }
                    </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="reset" onClick={()=>setRoom(new Rooms())} className="ms-2 btn btn-primary">RESET</button>
            </form>
        </div>
        </article>
    )
}