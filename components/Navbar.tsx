import { BRIDGE_CONTRACT_ADDRESS, truncateAddr } from "@/utils";
import styles from "../styles/components/Navbar.module.css";

import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { useAccount, useConnect, useContractRead } from "wagmi";
import { BRIDGE_CONTRACT_ABI } from "@/abi";

// @ts-ignore
export const Navbar = ({ setShowPopUp, showSignup }) => {
  const connector = new MetaMaskConnector();
  const { connect } = useConnect();
  const { address: userAddress, isConnected } = useAccount({
    onConnect({ address }) {
      // @ts-ignore
      localStorage.setItem("connected", address);
    },
    // @ts-ignore
    onDisconnect({}) {
      // @ts-ignore
      localStorage.setItem("connected", ADDRESS_ZERO);
    },
  });

  const showPopUp = () => {
    setShowPopUp(true);
  };

  const displayBalance = (balance: string) => {
    // @ts-ignore
    if (balance == 0) {
      return "0.00";
    } else {
      // @ts-ignore
      return (balance / 10 ** 18).toFixed(2);
    }
    // return "0";
  };

  ///////// SMART CONTRACT READ FUNCTIONS /////////

  // GET USER DETAILS
  const { data: userDetails } = useContractRead({
    address: BRIDGE_CONTRACT_ADDRESS,
    abi: BRIDGE_CONTRACT_ABI,
    functionName: "getUserDetails",
    args: [userAddress && userAddress],
  });

  return (
    <div className={styles.navBar}>
      <a href="/">
        <img src="/icons/logo.png" />
      </a>

      {isConnected && (
        <div className={styles.middle}>
          <a href="/account">Account</a>
          <a href="/transactions">Transactions</a>
        </div>
      )}

      {!isConnected && (
        <div className={styles.right}>
          <button
            className={styles.connect}
            // @ts-ignore
            onClick={() => connect({ connector })}
          >
            Connect
          </button>
        </div>
      )}

      {isConnected && (
        <div className={styles.right}>
          <p className={styles.balance}>
            {/* @ts-ignore */}
            {
              userDetails &&
                // @ts-ignore
                (userDetails.bridgeTokenBalance.toString() / 10 ** 18).toFixed(
                  2
                )
              // @ts-ignore
            }
          </p>
          <p className={styles.address}>
            {userAddress && truncateAddr(userAddress)}
          </p>

          {showSignup == true && (
            <button className={styles.signUp} onClick={showPopUp}>
              Sign Up
            </button>
          )}
        </div>
      )}
    </div>
  );
};
