export const jankenRandom = (num: number) => {
  const opponentHand = Math.floor(Math.random() * 3) + 1;
  switch (num) {
    case 1:
      if (opponentHand === 1) {
        const result = "aiko";
        return { result, opponentHand };
      } else if (opponentHand === 2) {
        const result = "win";
        return { result, opponentHand };
      } else if (opponentHand === 3) {
        const result = "lose";
        return { result, opponentHand };
      }
      break;
    case 2:
      if (opponentHand === 2) {
        const result = "aiko";
        return { result, opponentHand };
      } else if (opponentHand === 3) {
        const result = "win";
        return { result, opponentHand };
      } else if (opponentHand === 1) {
        const result = "lose";
        return { result, opponentHand };
      }
      break;
    case 3:
      if (opponentHand === 3) {
        const result = "aiko";
        return { result, opponentHand };
      } else if (opponentHand === 1) {
        const result = "win";
        return { result, opponentHand };
      } else if (opponentHand === 2) {
        const result = "lose";
        return { result, opponentHand };
      }
      break;
  }
};
