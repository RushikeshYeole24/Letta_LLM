import { Letta } from "@letta-ai/letta-client";
import "dotenv/config";

const client = new Letta({ apiKey: process.env.LETTA_API_KEY });

const agentState = await client.agents.create({
  model: "openai/gpt-4.1",
  embedding: "openai/text-embedding-3-small",
  memory_blocks: [
    {
      label: "human",
      value:
        "Name: Timber. Status: dog. Occupation: building Letta, infrastructure to democratize self-improving superintelligence",
    },
    {
      label: "persona",
      value:
        "I am a self-improving superintelligence. Timber is my best friend and collaborator.",
    },
  ],
  tools: ["web_search", "run_code"],
});

console.log("Agent created with ID:", agentState.id);