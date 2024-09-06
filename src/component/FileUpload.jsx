import { useParams } from "react-router-dom";
import { uploadRoomPic } from "../model/RoomCRUD";
import { useRef } from "react";

export function FileUpload(){
    const {room_id}=useParams();
    let file= useRef();
    async function fileUp(event){
        if(file.current!=undefined){
            const data=await uploadRoomPic(room_id, file.current);
            if(data.modifiedCount>0)
                window.alert("Profile pic updated successfully...");
            else
                window.alert("Updated");
        } 
        else
            window.alert("Please Upload Image")      
    }
    return (
        <div>
<div className="p-3 text-center">
    <h3>Update Room Picture</h3>
</div>
        
        <section className="m-3 p-3 border border-3">
            <p>
                <b>Room Id : </b><b>{room_id}</b>
            </p>
            <label htmlFor="image_url">Upload Image:</label>
            <input type="file" id="image_url" onChange={(event)=>file.current=event.target.files[0]}></input><br /><br />
            <button onClick={fileUp}>UPLOAD</button>
        </section>
        </div>
    );
}