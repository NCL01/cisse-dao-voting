// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract CisseDAOVoting {
    string public proposal = "Launch Cisse DAO";

    function getProposal() public view returns (string memory) {
        return proposal;
    }
}