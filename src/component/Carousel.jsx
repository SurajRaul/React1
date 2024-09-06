import './Carousel.css';
export function Carousel(){
    return(
      <div className="item"> 
    <form className="row gy-2 gx-3 ms-4 pt-2 pb-3 align-items-center it">
  <div className="col-auto">
    <label className="me-2 mb-0">From Date</label>
    <input type="date" className="form-control" id="autoSizingInput"/>
  </div>
  <div className="col-auto ms-4">
    <label>To Date</label>
    <div className="input-group">
      <input type="date" className="form-control" id="autoSizingInputGroup" placeholder="Username" />
    </div>
  </div>
  <div className="col-auto ms-4">
    <label>Rooms</label>
    <select className="form-select" id="autoSizingSelect">
      <option selected>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  {/* <div className="col-auto">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="autoSizingCheck" />
      <label className="form-check-label" for="autoSizingCheck">
        Remember me
      </label>
    </div>
  </div> */}
  <div className="col-auto mt-4 ms-4">
    <button type="submit" className="btn btn-primary">Submit</button>
  </div> 
  <div className="col-auto mt-4 ms-4">
    <img src='https://www.oberoihotels.com/images/best-rate-guaranteed-icon2.png?v=5' />
    <span className='coll ms-2'><b>Best Rate Guarantee</b></span>
  </div>
</form>
</div>
    )
}