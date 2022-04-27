pragma solidity ^0.5.4;
import "./Libraries.sol";
import "./Identity.sol";


contract IdentityFactory {
    address implement;

    constructor() public {
        implement = address(new Identity());
    }

    function deploy(address _owner, bytes32 _salt) public returns (address) {
        address identity = Clones.cloneDeterministic(implement, _salt);

        Identity(identity).initial(_owner);
        return identity;
    }

    function getAddress(address _owner, bytes32 _salt) public view returns (address) {
        return Clones.predictDeterministicAddress(implement, _salt);
    }
}
