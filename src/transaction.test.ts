import { TransactionPlan } from "./transaction.js";

const plan = new TransactionPlan()
  .moveCall("0x2::example::doThing", ["arg0"])
  .transferObjects(["coin"], "0xabc");

if (plan.toJSON().length !== 2) {
  throw new Error("expected two commands");
}

try {
  new TransactionPlan().transferObjects([], "0xabc");
  throw new Error("expected validation failure");
} catch (error) {
  if (!(error instanceof Error) || !error.message.includes("at least one")) throw error;
}
