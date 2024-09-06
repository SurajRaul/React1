import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import RoomCardMat from './RoomCardMat';
import { deleteRoomId, getAllRoom, getRoomById } from '../model/RoomCRUD';
import './RoomCard.css';
import { Pagination } from '@mui/material'; 

const ITEMS_PER_PAGE = 4; 

export function Room() {
    const searchNode = useRef();
    const [rooms, setRooms] = useState([]);
    const [notFoundError, setError] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    async function getRooms() {
        const data = await getAllRoom();
        console.log(data);
        setRooms(data);
    }

    async function deleteRoom(room_id) {
        const ans = window.confirm("Do you really want to delete?");
        if (ans) {
            const data = await deleteRoomId(room_id);
            if (data) {
                window.alert("Room deleted successfully");
                getRooms();
            } else {
                window.alert("Something went wrong....");
            }
        }
    }

    async function getRoom(room_id) {
        try{
        if (room_id != "") {
            const rm = await getRoomById(room_id);
            if (rm != "") {
                setError("");
                setRooms([rm[0]]);
            } else {
                setError("Not Found....");
            }
        } else {
            setError("");
            getRooms();
        }}catch(error){
            setError("Error: wrong input");
        }
    }

    useEffect(() => {
        getRooms();
    }, []);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentRooms = rooms.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    let card = currentRooms.map(room => (
        <RoomCardMat key={room.room_id} room={room} deleteRoom={deleteRoom} />
    ));

    return (
        <div>
            <div className="mt-4 ms-5">
                <button type="button" className="btn btn-warning">
                    <Link className="nav-link" to="/add">Create Room</Link>
                </button>
                &nbsp;&nbsp;&nbsp;
                <label htmlFor="room_id">Search Room : </label>
                &nbsp;&nbsp;
                <input ref={searchNode} id="room_id" type="number"
                    onKeyUp={() => getRoom(searchNode.current.value)}  placeholder="Enter Id" aria-label="Search"/>
                <small className="text-danger">{notFoundError}</small>
            </div>
            <div className="container">
                {card}
            </div>
            <div className="pagination-wrapper">
            <Pagination
                count={Math.ceil(rooms.length / ITEMS_PER_PAGE)}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
            // Add margin-top for spacing
            />
            </div>
        </div>
    );
}
