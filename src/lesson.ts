import { text, number, flag, list, object, hash, report, unique, safePath, type Lesson, type Input } from "./core";

// A focused local experiment derived from this lesson’s reviewed presentation.
export const lesson: Lesson = {
  number: 47,
  title: "Delegation and Session Threads",
  description: "Imagine a coordinator needs a code change reviewed while it continues preparing the final explanation. A specialist can focus on that review without loading every detail into the coordinator’s conversation.",
  concepts: ["Native threads share a session boundary", "Independent workers need explicit context", "Pin and bind the worker report"],
  scope: "Plans a worker and validates an authored report. No real native delegation or independent worker is launched. Each run starts from a fresh local seed. The run journal stores results, not production workflow state.",
  cases: [{"id": "0", "label": "Accept the current worker report", "input": {"topology": "independent-session", "expectedRevision": "rev-7", "reportRevision": "rev-7"}, "expected": "passed", "checks": {"accepted": true}}, {"id": "1", "label": "Reject a stale report", "input": {"topology": "native-thread", "expectedRevision": "rev-7", "reportRevision": "rev-6"}, "expected": "rejected", "checks": {"accepted": false}}],
  async run(input) {

const topology=text(input,"topology");if(!["native-thread","independent-session"].includes(topology))throw new Error("Unknown delegation topology");
const accepted=text(input,"expectedRevision")===text(input,"reportRevision");
return report(accepted?"passed":"rejected","Bound a worker report to the authorized revision",{accepted,topology,sharedSandbox:topology==="native-thread",contextTransfer:topology==="native-thread"?"native topology rules":"explicit reviewed handoff required",reportRevision:text(input,"reportRevision")},["Choose the topology deliberately","Pin the specialist definition","Bind task and revision","Verify the report independently of lifecycle"]);

  }
};
