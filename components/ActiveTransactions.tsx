import { BRIDGE_CONTRACT_ABI } from "@/abi";
import styles from "@/styles/Transactions.module.css";
import {
  ADDRESS_ZERO,
  BRIDGE_CONTRACT_ADDRESS,
  BRIDGE_TOKEN_ADDRESS,
  getTxEndTime,
  truncateAddr,
} from "@/utils";
import { keccak256, toHex } from "viem";
import { useState } from "react";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";

export const ActiveTransactions = () => {
  const [recipientUserName, setRecipientUserName] = useState();
  const [assetAddress, setAssetAddress] = useState();
  const [claimCode, setClaimCode] = useState();
  const [txEndTime, setTxEndTime] = useState();
  const [arbitration, setArbitartion] = useState();
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState();

  const { address } = useAccount();

  const [clickedTx, setClickedTx] = useState(0);
  const [popUp, setPopUp] = useState(false);

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

      if (arbiters.length + 1 == 2) {
        setCollectionComplete(true);
      }
    }
  };

  const clear = () => {
    setArbiters([]);
    setCollectionComplete(false);
  };

  //////// SMART CONTRACT READ FUNCTION /////

  const { data: ACTIVE_TRANSACTIONS } = useContractRead({
    address: BRIDGE_CONTRACT_ADDRESS,
    abi: BRIDGE_CONTRACT_ABI,
    functionName: "getActiveTransactions",
    args: [address && address],
  });

  const { data: currentTimestamp } = useContractRead({
    address: BRIDGE_CONTRACT_ADDRESS,
    abi: BRIDGE_CONTRACT_ABI,
    functionName: "getCurrentTimestamp",
  });

  // GET ACTIVE TRANSACTIONS
  const { data: isSender } = useContractRead({
    address: BRIDGE_CONTRACT_ADDRESS,
    abi: BRIDGE_CONTRACT_ABI,
    functionName: "getIsSender",
    //  @ts-ignore
    args: [address && address, clickedTx && clickedTx.ID],
  });

  ///////// SMART CONTRACT WRITE FUNCTIONS ///////////

  const { config: createConfig } = usePrepareContractWrite({
    address: BRIDGE_CONTRACT_ADDRESS,
    abi: BRIDGE_CONTRACT_ABI,
    functionName: "createTransaction",
    args: [
      recipientUserName,
      BRIDGE_TOKEN_ADDRESS,
      txEndTime,
      arbitration,
      arbiters,
      claimCode,
      amount,
      description,
    ],
  });
  const { write: create } = useContractWrite(createConfig);

  const { config: retractTransactionConfig } = usePrepareContractWrite({
    address: BRIDGE_CONTRACT_ADDRESS,
    abi: BRIDGE_CONTRACT_ABI,
    functionName: "retractTransaction",
    //  @ts-ignore
    args: [clickedTx && clickedTx.ID],
  });
  const { write: retractTransaction } = useContractWrite(
    retractTransactionConfig
  );

  return (
    <>
      <div className={popUp ? styles.transactionsBlur : styles.transactions}>
        <div className={styles.left}>
          <div className={styles.header}>
            <h3>Active Transactions</h3>
            <img src="/icons/addIcon.png" onClick={() => setPopUp(true)} />
          </div>

          <div className={styles.transactionList}>
            <>
              {ACTIVE_TRANSACTIONS &&
                // @ts-ignore
                ACTIVE_TRANSACTIONS.map((transaction) => {
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
                  <p>
                    {currentTimestamp &&
                      // @ts-ignore
                      clickedTx.timeDetails &&
                      getTxEndTime(
                        // @ts-ignore
                        clickedTx.timeDetails.txEndTime.toString() -
                          // @ts-ignore
                          currentTimestamp.toString()
                      )}
                  </p>
                </div>

                <div className={styles.clickedTxStat}>
                  <span>Arbitration</span>
                  {/* @ts-ignore */}
                  <p>{clickedTx.arbitration ? "True" : "False"}</p>
                </div>

                <div className={styles.clickedTxStat}>
                  <span>Status</span>
                  {/* @ts-ignore */}
                  <p>Active</p>
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

              <>
                {/* @ts-ignore */}
                {isSender == true && (
                  <button
                    className={styles.retract}
                    disabled={!retractTransaction}
                    onClick={() => retractTransaction?.()}
                  >
                    Retract
                  </button>
                )}
                {/* @ts-ignore */}
                {clickedTx.arbDetails.retracted == true && (
                  <div className={styles.retracted}>
                    <img src="/icons/retract.png" />
                    <p>This Transaction Has Been Retracted!</p>
                  </div>
                )}
              </>
            </div>
          ) : (
            <p style={{ margin: "20px 0px", color: "#fff", fontSize: "20px" }}>
              No Transaction Selected
            </p>
          )}
        </div>
      </div>

      {popUp && (
        <div className={styles.popUp}>
          <div className={styles.header}>
            <h3>Create Transaction</h3>
            <img src="/icons/cancel.png" onClick={() => setPopUp(false)} />
          </div>

          <span>Recipient Username</span>
          {/*  @ts-ignore */}
          <input onChange={(e) => setRecipientUserName(e.target.value)} />

          <p>
            Selected Asset:{" "}
            {assetAddress &&
            //  @ts-ignore
            assetAddress.toLowerCase() ==
              BRIDGE_TOKEN_ADDRESS.toLocaleLowerCase()
              ? "Bridge"
              : assetAddress}
          </p>

          <span>End Time</span>
          {/*  @ts-ignore */}
          <input onChange={(e) => setTxEndTime(e.target.value)} />

          <span>Arbitration</span>
          <div className={styles.arbButtons}>
            {/*  @ts-ignore */}
            <button onClick={() => setArbitartion(true)}>True</button>
            {/*  @ts-ignore */}
            <button onClick={() => setArbitartion(false)}>False</button>
          </div>
          <p>Selected: {arbitration ? "Arbitration" : "No Arbitration"}</p>

          {arbitration && (
            <>
              <span>Validator Addresses</span>
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
            </>
          )}

          <div className={styles.claimCode}>
            <span>Claim Code</span>
            <input
              //  @ts-ignore
              onChange={(e) => setClaimCode(keccak256(toHex(e.target.value)))}
            />
          </div>

          <span>Amount</span>
          {/*  @ts-ignore */}
          <input onChange={(e) => setAmount(e.target.value * 10 ** 18)} />

          <span>Description</span>
          {/*  @ts-ignore */}
          <input onChange={(e) => setDescription(e.target.value)} />

          <button
            className={styles.createTransaction}
            disabled={!create}
            onClick={() => create?.()}
          >
            Create Transaction
          </button>
        </div>
      )}
    </>
  );
};
