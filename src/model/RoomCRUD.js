import axios from "axios";

const url="http://localhost:5000"

export async function addRoom(room){
 const res = await axios.post(`${url}/room/add`,room);
 console.log(res);
//  return res.data;
}

export async function getAllRoom(){
    const res=await axios.get(`${url}/room/rooms`);
    return res.data;
}
export async function getRoomById(room_id){
    const res=await axios.get(`${url}/room/get/${room_id}`);
    return res.data;
}
export async function deleteRoomId(room_id){
    const res=await axios.delete(`${url}/room/delete/${room_id}`);
    return res.data;
}
export async function updateRoomii(room){
    const res=await axios.put(`${url}/room/update/${room.room_id}`,room);
    return res.data;
}
export async function uploadRoomPic(room_id,image_url){
    let formData=new FormData();
    formData.append('image_url', image_url);
    const res=await axios.put(`${url}/room/upload/${room_id}`,formData)
    return res.data;
 }
