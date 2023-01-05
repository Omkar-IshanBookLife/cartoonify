import WalletBalance from './WalletBalance';
import { useEffect, useState } from 'react';

import { ethers } from 'ethers';
import Cartoonify from "../artifacts/contracts/Cartoonify.sol/Cartoonify.json"
import Navbar from './Navbar';
import Footer from './Footer';

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const provider = new ethers.providers.Web3Provider(window.ethereum);

const signer = provider.getSigner();

const contract = new ethers.Contract(contractAddress, Cartoonify.abi, signer);

const Home = () => {

    const [totalMinted, setTotalMinted] = useState(0);
    useEffect(() => {
        getCount();
    }, []);

    const getCount = async () => {
        const count = await contract.count();
        console.log(parseInt(count));
        setTotalMinted(parseInt(count));
    };

    return (
        <div>
            <Navbar/>
            <div className='p-5 my-4'>
                <WalletBalance />
                <hr />
                <div className="card-group">
                {Array(totalMinted + 13)
                    .fill(0)
                    .map((_, i) => (
                        <div key={i}>
                            <NFTImage tokenId={i} getCount={getCount} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

function NFTImage({ tokenId, getCount }) {
    const contentId = 'Qma7ZdDaozszwc3QbCpokpCuzUcKoooaysiVrQ1QafzBsX';
    const metadataURI = `${contentId}/${tokenId}.json`;
    const imageURI = `https://gateway.pinata.cloud/ipfs/${contentId}/${tokenId}.jpeg`;

    const [isMinted, setIsMinted] = useState(false);
    useEffect(() => {
        getMintedStatus();
    }, [isMinted]);

    const getMintedStatus = async () => {
        const result = await contract.isContentOwned(metadataURI);
        console.log(result)
        setIsMinted(result);
    };

    const mintToken = async () => {
        const connection = contract.connect(signer);
        const addr = connection.address;
        const result = await contract.payToMint(addr, metadataURI, {
            value: ethers.utils.parseEther('0.05'),
        });

        await result.wait();
        getMintedStatus();
        getCount();
    };

    async function getURI() {
        const uri = await contract.tokenURI(tokenId);
        alert(uri);
    }

    return (
        <div className="card mb-4 p-5" style={{ width: '18rem' }}>
        <img className="card-img-top" src={imageURI}></img>
        <div className="card-body">
          <h5 className="card-title">ID #{tokenId}</h5>
          {!isMinted ? (
            <button className="btn btn-success" onClick={mintToken}>
              Mint
            </button>
          ) : (
            <button className="btn btn-primary">
              Already Sold
            </button>
          )}
        </div>
      </div>
    );
}

export default Home;