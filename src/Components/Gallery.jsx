import Footer from "./Footer";
import Navbar from "./Navbar";
import Imgur1 from '../Images/Imgur 1 (1).jpeg'
import Imgur2 from '../Images/Imgur 1 (2).jpeg'
import Imgur3 from '../Images/Imgur 1 (3).jpeg'

export default function Gallery() {
    return(
        <div>
            <Navbar/>
                <section class="p-5 my-4">
        <div class="container d-flex flex-column align-items-center">
            <h2>Gallery</h2>
            <div id="carouselExampleIndicators" class="carousel slide w-75 d-flex align-items-center">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={Imgur1} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={Imgur2} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={Imgur3} class="d-block w-100" alt="..." />
              </div>
            </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div> <br />
        </div>
    </section>
    <Footer/>
        </div>
    )
}