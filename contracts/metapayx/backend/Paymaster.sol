// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * @title MetaPayX Paymaster
 * @notice A sample ERC-4337 Paymaster contract for sponsoring user operations.
 *         Built for MetaMask Smart Accounts + Monad Dev Cook-Off.
 *
 *         This Paymaster allows the owner to deposit ETH into the EntryPoint
 *         contract and sponsor user operations with it.
 */

import "@account-abstraction/contracts/interfaces/IEntryPoint.sol";

contract Paymaster {
    /// @notice The EntryPoint contract that manages UserOperations
    IEntryPoint public immutable entryPoint;

    /// @notice The owner of the Paymaster (allowed to deposit/withdraw)
    address public owner;

    /// @notice Set EntryPoint contract address and assign contract ownership
    constructor(address _entryPoint) {
        require(_entryPoint != address(0), "Invalid EntryPoint address");
        entryPoint = IEntryPoint(_entryPoint);
        owner = msg.sender;
    }

    /// @notice Restrict certain actions to the contract owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    /// @notice Allow contract to receive ETH
    receive() external payable {}

    /**
     * @notice Deposit ETH to EntryPoint to fund future gas sponsorships
     * @dev Only the owner can deposit ETH for the Paymaster
     */
    function deposit() external payable onlyOwner {
        entryPoint.depositTo{value: msg.value}(address(this));
    }

    /**
     * @notice Withdraw deposited funds from EntryPoint back to the owner
     * @param to The address to send withdrawn ETH
     * @param amount The amount to withdraw
     */
    function withdraw(address payable to, uint256 amount) external onlyOwner {
        entryPoint.withdrawTo(to, amount);
    }

    /**
     * @notice Validate and approve the sponsored UserOperation
     * @dev Called by the EntryPoint during verification phase
     * @return context Data passed to postOp (empty for now)
     * @return validationData Value representing the time validity of the operation
     */
    function validatePaymasterUserOp(
        bytes calldata, /* userOp */
        address, /* userOpSender */
        uint256 /* userOpGas */
    ) external view returns (bytes memory context, uint256 validationData) {
        require(msg.sender == address(entryPoint), "Only EntryPoint can call");
        // returning empty context and maximum validation duration
        return ("", type(uint256).max);
    }
}
