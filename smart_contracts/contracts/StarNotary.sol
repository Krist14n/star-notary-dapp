pragma solidity ^0.4.23;
import 'openzeppelin-solidity/contracts/token/ERC721/ERC721.sol';

contract StarNotary is ERC721 { 

    struct Star { 
        string name;
        string story;
        string dec;
        string mag;
        string cent;
    }

    mapping(uint256 => Star) public tokenIdToStarInfo; 
    mapping(uint256 => uint256) public starsForSale;
    mapping(bytes32 => bool) allTokenIds;
    string concat;

    function createStar(string _name, string _story, string _dec, string _mag, string _cent, uint256 _tokenId) public {
        concat = concatenate(_dec, _mag, _cent);
        require(checkIfStarExist(concat), " this star is already in use!");
        Star memory newStar = Star(_name, _story, _dec, _mag, _cent);
        _mint(msg.sender, _tokenId);
        tokenIdToStarInfo[_tokenId] = newStar;
        allTokenIds[keccak256(abi.encodePacked(concat))] = true;
        
    }
    

    function putStarUpForSale(uint256 _tokenId, uint256 _price) public { 
        require(this.ownerOf(_tokenId) == msg.sender);

        starsForSale[_tokenId] = _price;
    }

    function buyStar(uint256 _tokenId) public payable { 
        require(starsForSale[_tokenId] > 0);
        
        uint256 starCost = starsForSale[_tokenId];
        address starOwner = this.ownerOf(_tokenId);
        require(msg.value >= starCost);

        _removeTokenFrom(starOwner, _tokenId);
        _addTokenTo(msg.sender, _tokenId);
        
        starOwner.transfer(starCost);

        if (msg.value > starCost) { 
            msg.sender.transfer(msg.value - starCost);
        }
    }

    function checkIfStarExist(string _concatenatedCoords) public view returns(bool) {
        return !allTokenIds[keccak256(abi.encodePacked(_concatenatedCoords))];
    }

    function concatenate(string _a, string _b, string _c) internal pure returns(string) {
        return string(abi.encodePacked(_a, _b, _c));
    }


}