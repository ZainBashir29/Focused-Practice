import { estimateDelivery } from "./estimateDelivery.ts";
import { deliveryTests } from "./deliveryTests.ts";

let index = 1;

let score = 0;

function normalize(o: object) {
  return JSON.stringify(
    Object.fromEntries(
      Object.entries(o).sort(([a], [b]) => a.localeCompare(b)),
    ),
  );
}

export const runDeliveryTests = async () => {
  for (const deliveryTest of deliveryTests) {
    try {
      const result = await estimateDelivery(deliveryTest.text);

      index++;

      if (result.ok === false) {
        console.error("Something went wrong while evaluating");
      }

      const match = normalize(result.query) == normalize(deliveryTest.expected);

      if (result.query && match) {
        console.log("PASS: ", deliveryTest.text);
        score++;
      } else {
        console.log("FAIL: ", deliveryTest.text);
        console.log("Expected: ", deliveryTest.expected);
        console.log("Got: ", result.query);
        console.log(result.error);
      }

      if (index < deliveryTests.length - 1) {
        await new Promise((r) => setTimeout(r, 1000));
      }
    } catch (error) {
      console.error(error);
    }
  }

  console.log(`Score: ${score}/${deliveryTests.length}`);
};
