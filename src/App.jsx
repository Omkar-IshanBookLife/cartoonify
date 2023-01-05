import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import omkar from './Images/omkar.jpeg'
import param from './Images/param.jpeg'
import dev from './Images/dev.jpeg'
import padmini from './Images/padmini.jpeg'
import muskan from './Images/Muskan.jpeg'
import neharika from './Images/neharika.jpeg'
import nft from './Images/640px-NFT_Icon.caaeea27.png'
import Imgur1 from './Images/Imgur 1 (1).jpeg'
import Imgur2 from './Images/Imgur 1 (2).jpeg'
import Imgur3 from './Images/Imgur 1 (3).jpeg'

function App() {

  return (
    <div>
      <Navbar/>
      <section className="p-5 my-4">
        <div class="container d-flex flex-column align-items-center text-center">
          <div id="carouselExampleIndicators" class="carousel slide w-75">
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
          </div>

          <a href="/nft">Buy a NFT on Cartoonify</a><br />

          <h2>How Cartoonify NFTs Work?</h2>

          <div class="d-flex p-4 align-items-center justify-content-between">
            <div>
              <p>Step 1: Collect Paintings. We give rural artisans a chance to present their talent with a modern twist. We take pictures of their work, sell them as NFTs, and give them the earnings they deserve.</p>
              <img src="https://ik.imagekit.io/theartling/prod/submissions/SubmissionsArtwork/7f3a307256b8427797c0323494bed319.png?tr=w-1020" alt="img 1" class="img-fluid w-75" />

            </div>
            <div>
              <p>Step 2: Cartoonify Paintings. We take pictures of rural artworks, 'Cartoonify' them, that is, making them look like a cartoon without losing the gist of the artwork, and sell them as NFTs.
              </p>
              <img src="https://i.pinimg.com/originals/13/48/c5/1348c5040708c28e937840a13dc6da99.jpg" alt="img 1" class="img-fluid w-75" />

            </div>
            <div>
              <p>Step 3: Sell NFTs. We give the major cut to the artisans who have made it. This doesn't let any middlemen exploit these talented rural artisans and will give them the price they deserve.
              </p>
              <img src="https://insidebitcoins.com/wp-content/uploads/2022/10/NFT_Artworks2-300x300.png" alt="img 1" class="img-fluid w-75" />

            </div>
            <div>
              <p>Step 4: Earn Money.Earning money with the latest technology with the maximum exposure will allow them to stay on par with the world. This will also help the efforts to keep traditional arts alive.
              </p>
              <img src="https://play-lh.googleusercontent.com/i6wOihHscui1MFrp3U6h7LIrg-1C-T3E0HJC0yTs9sVgvTxcZ91063QXUwpMFjhxXOg=w300" alt="img 1" class="img-fluid w-75" />

            </div>
          </div><hr />

          <h2>Our Popular Artists</h2>

          <div class="d-flex p-4 align-items-center justify-content-between">
            <div>
              <p>Padmini Kavathekar</p>
              <img src={padmini} alt="img 1" class="img-fluid w-50" />

            </div>
            <div>
              <p>Dev Kore</p>
              <img src={dev} alt="img 1" class="img-fluid w-50" />

            </div>
            <div>
              <p>Omkar Kumbhar</p>
              <img src={omkar} alt="img 1" class="img-fluid w-50" />

            </div>
            <div>
              <p>Param Shah</p>
              <img src={param} alt="img 1" class="img-fluid w-50" />

            </div>
            <div>
              <p>Muskan Malu</p>
              <img src={muskan} alt="img 1" class="img-fluid w-50" />

            </div>
            <div>
              <p>Neharika Kulkarni</p>
              <img src={neharika} alt="img 1" class="img-fluid w-50" />

            </div>
          </div><br /><br />

          <h2>Cartoonify NFTs</h2>
          <p>
            Cartoonify is a collection of several NFTs created by unpreviledged kids of several rural districts of
            Maharashtra. <br /><br />

            All NFT's uploaded here are originally drawings created bu the kids which have been "cartoonified" using
            an simple python script. <br /><br />

            These are digital collectibles living on the Solana Blockchain and 100% of proceeds will go into funding
            for the villages.  <br /><br />

            <a class="btn btn-dark btn-lg mb-3"
              href="/nft">Buy NFTs</a><br/>
          </p>
          <div class="d-flex align-items-center justify-content-center">
            <h5 class="mx-4"><i class="bi bi-google"></i> ogamethorns@gmail.com</h5>
            <h4><i class="bi bi-twitter"></i> @cartoonify</h4>
          </div>
        </div>
      </section>
      <div class="mb-5 p-2">
        <div class="container">
            <div class="d-lg-flex align-items-center justify-content-between">

                <div class="p-2">
                    <p>Our company uses an specially created artificial intelligent program made with python that
                        converts photos into drawings. We collect these images from childrens of rural areas and upload
                        them on the marketplace magiceden in the form of nft's.</p>
                    <p>These Images are then given back to the people who made this art. Our company is just an
                        middleman that converts the image they made into marketable items. We believe this exposure to
                        several web3 technologies will surely make them financially stable.</p>
                </div>
                <img src={nft} alt="nft-demo" class="img-fluid" />
            </div>
            <hr class="style3 mb-4" />
        </div>
    </div>

    <Footer />
    </div>



  )
}

export default App;