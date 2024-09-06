import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import roomi from '../assets/header3.jpg'
import { DeleteRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';

export default function RoomCardMat({ room, deleteRoom }) {
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
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 200 }}
                image={`data:image/png;base64,${(room.image_url!=undefined)?arrayBufferToBase64(room.image_url.data):roomi}`}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    <b>#</b> {room.room_id}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    <b>Room :</b> {room.room_type}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}><b>Description:</b> {room.description}</Typography>
                <br /><Typography gutterBottom variant="h7" component="div">
                    <b>Price :</b> &nbsp;Rs.{room.price_per_night}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"><Link to={`/fileupload/${room.room_id}`}><Tooltip title="Edit Image"> <Avatar alt="Remy Sharp" src="" sx={{ width: 24, height: 24 }}/></Tooltip>
                </Link>
                </Button>
                <Button size="small"><Link to={`/editroom/${room.room_id}`}><Tooltip title="Edit"><EditIcon /></Tooltip></Link></Button>
                <Button size="small" onClick={()=>deleteRoom(room.room_id)}><Tooltip title="Delete"><DeleteIcon color='error' /></Tooltip></Button>
            </CardActions>
        </Card>
    )
}