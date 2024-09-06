
export class Rooms {
    constructor(room_id=0,room_type="",description="",price_per_night=0,image_url){
        this.room_id=room_id;
        this.room_type=room_type;
        this.description=description;
        this.price_per_night=price_per_night;
        this.image_url=image_url;
    }
}