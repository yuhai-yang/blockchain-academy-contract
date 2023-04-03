// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./UUPSDemo.sol";

contract UUPSDemoV2 is UUPSDemo {
    function increaseKey() external {
        key += 1;
    }

    function version() external pure returns (uint256) {
        return 2;
    }
}
