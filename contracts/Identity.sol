pragma solidity ^0.5.4;
import "./Libraries.sol";

contract Identity is KeyManager, ClaimManager, IIdentity {
    bool isInitialized;
    
    function initial(address _owner) public {
        require(!isInitialized);
        _addKey(addrToKey(_owner), 1, ECDSA_TYPE);      
        _addKey(addrToKey(_owner), 3, ECDSA_TYPE);         
        isInitialized = true;
    }
}

