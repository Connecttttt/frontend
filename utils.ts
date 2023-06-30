export function truncateAddr(address: string) {
  return address.slice(0, 5) + "...." + address.slice(-5);
}

export function getTxEndTime(durationInSeconds: number) {
  const seconds = Math.floor(durationInSeconds % 60);
  const minutes = Math.floor((durationInSeconds / 60) % 60);
  const hours = Math.floor((durationInSeconds / 3600) % 24);
  const days = Math.floor(durationInSeconds / (3600 * 24));

  const parts = [];

  if (days > 0) {
    parts.push(`${days} day${days > 1 ? "s" : ""}`);
  } else if (hours > 0) {
    parts.push(`${hours} hour${hours > 1 ? "s" : ""}`);
  } else if (minutes > 0) {
    parts.push(`${minutes} minute${minutes > 1 ? "s" : ""}`);
  } else if (seconds > 0) {
    parts.push(`${seconds} second${seconds > 1 ? "s" : ""}`);
  } else {
    return "Ended";
  }

  return parts.join(", ");
}

export const BRIDGE_TOKEN_ADDRESS =
  "0xEF53020fEb7b71E4B700531894991Cc7Ca553fb4";

export const BRIDGE_CONTRACT_ADDRESS =
  "0x69F972560448436bE61fF49c32D48d2EA00C5C61";

export const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
