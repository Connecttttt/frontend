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

export const CompletedTransactions = () => {
  // TEST VARIABLES
  let connectedUser = "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e";

  const [clickedTx, setClickedTx] = useState(0);
  const [claimCode, setClaimCode] = useState();

  const { address } = useAccount();

  //////// SMART CONTRACT READ FUNCTION /////

  const { data: COMPLETED_TRANSACTIONS } = useContractRead({
    address: BRIDGE_CONTRACT_ADDRESS,
    abi: BRIDGE_CONTRACT_ABI,
    functionName: "getCompletedTransctions",
    args: [address && address],
  });

  const { data: isRecipient } = useContractRead({
    address: BRIDGE_CONTRACT_ADDRESS,
    abi: BRIDGE_CONTRACT_ABI,
    functionName: "getIsRecipient",
    //  @ts-ignore
    args: [address && address, clickedTx && clickedTx.ID],
  });

  const { config: claimConfig } = usePrepareContractWrite({
    address: BRIDGE_CONTRACT_ADDRESS,
    abi: BRIDGE_CONTRACT_ABI,
    functionName: "claimTransaction",
    //  @ts-ignore
    args: [clickedTx && clickedTx.ID, claimCode],
  });
  const { write: claim } = useContractWrite(claimConfig);

  return (
    <>
      <div className={styles.transactions}>
        <div className={styles.left}>
          <div className={styles.header}>
            <h3>Completed Transactions</h3>
          </div>

          <div className={styles.transactionList}>
            <>
              {COMPLETED_TRANSACTIONS &&
                // @ts-ignore
                COMPLETED_TRANSACTIONS.map((transaction) => {
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

                      {connectedUser == transaction.from && (
                        <div className={styles.txBoxStat}>
                          <span>To</span>
                          <p className={styles.username}>
                            {transaction.toUsername}
                            <span>.bridge</span>
                          </p>
                        </div>
                      )}

                      {connectedUser == transaction.to && (
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
                  <p>Ended</p>
                </div>

                <div className={styles.clickedTxStat}>
                  <span>Arbitration</span>
                  {/* @ts-ignore */}
                  <p>{clickedTx.arbitration ? "True" : "False"}</p>
                </div>

                <div className={styles.clickedTxStat}>
                  <span>Status</span>
                  {/* @ts-ignore */}
                  <p>Completed </p>
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

              {/* @ts-ignore */}
              {isRecipient == true ? (
                // @ts-ignore
                clickedTx.arbDetails.claimed == true ? (
                  <p
                    style={{
                      fontWeight: "bold",
                      color: "#000",
                      marginTop: "20px",
                    }}
                  >
                    Transaction Claimed
                  </p>
                ) : (
                  <div className={styles.claimSection}>
                    <input
                      placeholder="Claim Code"
                      // @ts-ignore
                      onChange={(e) => setClaimCode(e.target.value)}
                    />
                    {/*  @ts-ignore */}
                    <button disabled={!claim} onClick={() => claim()}>
                      Claim
                    </button>
                  </div>
                )
              ) : (
                <p style={{ marginTop: "20px" }}>Transaction Completed</p>
              )}
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
