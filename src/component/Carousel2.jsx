export function Carousel2(){
    return(
        <>
  <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
  </div>

  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src="https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/offers/2021/overview-banners/1366x523/the-urban-escape-1366x523.jpg?extension=webp" classNameName="d-block w-100" alt="..." />
    <div className="carousel-caption d-none d-md-block">
        <h5>Welcome to Marriott</h5>
        <p>Travel + Leisure's world's best award 2024.</p>
      </div>
    </div>
    <div className="carousel-item">
    <img src="https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/offers/2021/offer-images-sep21/mumbai/banner/mumbai-the-urban-escape-1366x523-26.jpg?extension=webp" classNameName="d-block w-100" alt="..." />
    <div className="carousel-caption d-none d-md-block">
        <h5>Ranked No.1 hotel in the world</h5>
        <h7>Your smile, Our responsibility</h7>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div>
    </>
    )
}