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

export const PendingTransactions = () => {
  // TEST VARIABLES

  const [clickedTx, setClickedTx] = useState(0);

  const { address } = useAccount();

  //////// SMART CONTRACT READ FUNCTION /////

  const { data: PENDING_TRANSACTIONS } = useContractRead({
    address: BRIDGE_CONTRACT_ADDRESS,
    abi: BRIDGE_CONTRACT_ABI,
    functionName: "getPendingTransactions",
    args: [address && address],
  });

  const { data: isArbiter } = useContractRead({
    address: BRIDGE_CONTRACT_ADDRESS,
    abi: BRIDGE_CONTRACT_ABI,
    functionName: "isArbiterForTransaction",
    //  @ts-ignore
    args: [clickedTx && clickedTx.ID, address && address],
  });

  // FUND
  const { config: supportConfig } = usePrepareContractWrite({
    address: BRIDGE_CONTRACT_ADDRESS,
    abi: BRIDGE_CONTRACT_ABI,
    functionName: "arbitrateTransaction",
    // @ts-ignore
    args: [clickedTx && clickedTx.ID, true],
  });
  const { write: support } = useContractWrite(supportConfig);

  const { config: opposeConfig } = usePrepareContractWrite({
    address: BRIDGE_CONTRACT_ADDRESS,
    abi: BRIDGE_CONTRACT_ABI,
    functionName: "arbitrateTransaction",
    // @ts-ignore
    args: [clickedTx && clickedTx.ID, false],
  });
  const { write: oppose } = useContractWrite(opposeConfig);

  return (
    <>
      <div className={styles.transactions}>
        <div className={styles.left}>
          <div className={styles.header}>
            <h3>Pending Transactions</h3>
          </div>

          <div className={styles.transactionList}>
            <>
              {PENDING_TRANSACTIONS &&
                // @ts-ignore
                PENDING_TRANSACTIONS.map((transaction) => {
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
                  <p>Pending</p>
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
                      <div className={styles.arbitersDetails}>
                        <h3>To Arbiters</h3>
                        <p>
                          {/* @ts-ignore */}
                          1. {truncateAddr(clickedTx.arbDetails.toArbiters[0])}
                        </p>

                        <p>
                          {/* @ts-ignore */}
                          2. {truncateAddr(clickedTx.arbDetails.toArbiters[1])}
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

              <div className={styles.arbitersCount}>
                <div className={styles.outcomeCount}>
                  <h3>Arbiters Success Count</h3>
                  <p>
                    {/* @ts-ignore */}
                    {
                      //   @ts-ignore
                      clickedTx.arbDetails.successArbitersCount.toString()
                    }{" "}
                    / 4
                  </p>
                </div>

                <div className={styles.outcomeCount}>
                  <h3>Arbiters Null Count</h3>
                  <p>
                    {/* @ts-ignore */}
                    {
                      //   @ts-ignore
                      clickedTx.arbDetails.nullArbitersCount.toString()
                    }{" "}
                    / 4
                  </p>
                </div>
              </div>

              {isArbiter == true && (
                <div className={styles.isArbiter}>
                  <p>
                    You are an arbriter of this transaction. Click support if
                    all the terms of the transaction were fulfilled and oppose
                    if they weren't.
                  </p>

                  <button
                    className={styles.support}
                    disabled={!support}
                    onClick={() => support?.()}
                  >
                    Support
                  </button>
                  <button
                    className={styles.oppose}
                    disabled={!oppose}
                    onClick={() => oppose?.()}
                  >
                    Oppose
                  </button>
                </div>
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
