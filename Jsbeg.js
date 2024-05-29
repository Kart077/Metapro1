/* This project is regarding the basics of javascript and in addition to that it contains the usage of the basic functionalities present in javascript*/

// create a variable to hold your NFT's

const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

function mintNFT (brand_name,color,size,type) {
    const NFT = {
        "Brandname" : brand_name,
        "Color" : color,
        "Size" : size,
        "Type" : type
       }
    
       NFTs.push(NFT);
    
       console.log("MINTED " +  brand_name + ":");
       
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()

function listNFTs () {
    for(let i = 0;i<NFTs.length;i++){
        console.log(NFTs[i].Brandname);
        console.log(NFTs[i].Color);
        console.log(NFTs[i].Size);
        console.log(NFTs[i].Type);
     }
}

// print the total number of NFTs we have minted to the console

function TotalSupply() {
    console.log(NFTs.length);
}

// call your functions below this line

mintNFT("H&M","Beige","M","Shirt");
listNFTs();
TotalSupply();