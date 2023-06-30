import { BRIDGE_CONTRACT_ABI } from "@/abi";
import styles from "@/styles/Transactions.module.css";
import {
  BRIDGE_CONTRACT_ADDRESS,
  BRIDGE_TOKEN_ADDRESS,
  truncateAddr,
} from "@/utils";
import { useState } from "react";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";

export const UnacceptedTransactions = () => {
  const [clickedTx, setClickedTx] = useState(0);

  const [arbiters, setArbiters] = useState([]);
  const [arbiterInput, setArbiterInput] = useState("");
  const [isCollectionComplete, setCollectionComplete] = useState(false);

  const handleAddArbiter = () => {
    if (arbiters.length < 2) {
      // @ts-ignore
      setArbiters((prevValidators) => [
        // @ts-ignore
        ...prevValidators,
        arbiterInput,
      ]);

      if (arbiters.length + 1 == 3) {
        setCollectionComplete(true);
      }
    }
  };

  const clear = () => {
    setArbiters([]);
    setCollectionComplete(false);
  };

  const { address } = useAccount();

  const { data: UNACCEPTED_TRANSACTIONS } = useContractRead({
    address: BRIDGE_CONTRACT_ADDRESS,
    abi: BRIDGE_CONTRACT_ABI,
    functionName: "getUnacceptedTransactions",
    args: [address && address],
  });

  const { config: acceptConfig } = usePrepareContractWrite({
    address: BRIDGE_CONTRACT_ADDRESS,
    abi: BRIDGE_CONTRACT_ABI,
    functionName: "acceptTransaction",
    // @ts-ignore
    args: [arbiters, clickedTx && clickedTx.ID],
  });
  const { write: accept } = useContractWrite(acceptConfig);

  return (
    <>
      <div className={styles.transactions}>
        <div className={styles.left}>
          <div className={styles.header}>
            <h3>Unaccepted Transactions</h3>
          </div>

          <div className={styles.transactionList}>
            <>
              {UNACCEPTED_TRANSACTIONS &&
                //  @ts-ignore
                UNACCEPTED_TRANSACTIONS.map((transaction) => {
                  return (
                    <div
                      className={
                        // @ts-ignore
                        clickedTx.ID == transaction.ID
                          ? styles.selectedTxBox
                          : styles.txBox
                      }
                      // @ts-ignore
                      onClick={() => setClickedTx(transaction)}
                    >
                      <div className={styles.txBoxStat}>
                        <span>ID</span>
                        <p className={styles.id}>
                          # {transaction.ID.toString()}
                        </p>
                      </div>

                      <div className={styles.txBoxStat}>
                        <span>Description</span>
                        <p className={styles.description}>
                          {transaction.description}
                        </p>
                      </div>

                      {address == transaction.from && (
                        <div className={styles.txBoxStat}>
                          <span>To</span>
                          <p className={styles.username}>
                            {transaction.toUsername}
                            <span>.bridge</span>
                          </p>
                        </div>
                      )}

                      {address == transaction.to && (
                        <div className={styles.txBoxStat}>
                          <span>From</span>
                          <p className={styles.username}>
                            {transaction.toUsername}
                            <span>.bridge</span>
                          </p>
                        </div>
                      )}

                      <div className={styles.txBoxStat}>
                        <span>Arbitration</span>
                        <p>{transaction.arbitration ? "True" : "False"}</p>
                      </div>
                    </div>
                  );
                })}
            </>
          </div>
        </div>
        <div className={styles.right}>
          <h3>Selected Transaction</h3>

          {clickedTx != 0 ? (
            <div className={styles.clickedTransaction}>
              <div className={styles.clickedTxID}>
                <span>ID</span>
                {/* @ts-ignore */}
                <p># {clickedTx.ID.toString()}</p>
              </div>

              <div className={styles.clickedTxStats}>
                <div className={styles.clickedTxStat}>
                  <span>Asset</span>
                  <p>
                    {/* @ts-ignore */}
                    {clickedTx.asset == BRIDGE_TOKEN_ADDRESS
                      ? "Bridge"
                      : // @ts-ignore
                        truncateAddr(clickedTx.asset)}
                  </p>
                </div>

                <div className={styles.clickedTxStat}>
                  <span>Amount</span>
                  {/* @ts-ignore */}
                  <p>
                    {/* @ts-ignore */}
                    {clickedTx.amount &&
                      // @ts-ignore
                      (clickedTx.amount.toString() / 10 ** 18).toFixed(2)}
                  </p>
                </div>

                <div className={styles.clickedTxStat}>
                  <span>From</span>
                  <p>
                    {/* @ts-ignore */}
                    {clickedTx.fromUsername}
                    <span className={styles.bridge}>.bridge</span>
                  </p>
                </div>

                <div className={styles.clickedTxStat}>
                  <span>To</span>
                  <p>
                    {/* @ts-ignore */}
                    {clickedTx.toUsername}{" "}
                    <span className={styles.bridge}>.bridge</span>
                  </p>
                </div>

                <div className={styles.clickedTxStat}>
                  <span>End Time</span>
                  {/* @ts-ignore */}
                  <p>Awaiting Arbitration</p>
                </div>

                <div className={styles.clickedTxStat}>
                  <span>Arbitration</span>
                  {/* @ts-ignore */}
                  <p>{clickedTx.arbitration ? "True" : "False"}</p>
                </div>

                <div className={styles.clickedTxStat}>
                  <span>Status</span>
                  {/* @ts-ignore */}
                  <p>Unaccepeted </p>
                </div>

                <>
                  {/* @ts-ignore */}
                  {clickedTx.arbitration == true && clickedTx.arbDetails && (
                    <div className={styles.arbiters}>
                      <div className={styles.arbitersDetails}>
                        <h3>From Arbiters</h3>
                        <p>
                          {/* @ts-ignore */}
                          1.{truncateAddr(clickedTx.arbDetails.fromArbiters[0])}
                        </p>
                        <p>
                          {/* @ts-ignore */}
                          2.{truncateAddr(clickedTx.arbDetails.fromArbiters[1])}
                        </p>
                      </div>
                    </div>
                  )}
                </>
              </div>

              <div className={styles.clickedTxDescription}>
                <span>Description</span>
                {/* @ts-ignore */}
                <p>{clickedTx.description}</p>
              </div>

              <h3 className={styles.addArbiterHeader}>Validator Addresses</h3>
              <div className={styles.addArbiter}>
                <input
                  onChange={(e) => setArbiterInput(e.target.value)}
                  disabled={isCollectionComplete}
                />
                <button onClick={handleAddArbiter}>Add</button>
                <button onClick={clear}>Clear</button>

                <div className={styles.addedArbiters}>
                  {arbiters.map((arbiter, index) => {
                    return (
                      <p>
                        {index + 1}. {arbiter}
                      </p>
                    );
                  })}
                </div>
              </div>

              <button
                className={styles.acceptBtn}
                disabled={!accept}
                onClick={() => accept?.()}
              >
                Accept
              </button>
            </div>
          ) : (
            <p style={{ margin: "20px 0px", color: "#fff", fontSize: "20px" }}>
              No Transaction Selected
            </p>
          )}
        </div>
      </div>
    </>
  );
};
