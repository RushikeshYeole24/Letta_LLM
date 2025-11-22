import { Letta } from "@letta-ai/letta-client";
const client = new Letta({ apiKey: "sk-let-OTliMGRjYjYtMDliMi00NzBhLWI3Y2UtYzhjYzI5MTE4MGQ5OmRiMzRlMzQzLWU3OWQtNGQ3My05ZjA1LWRiMGIwMDAyNDFlMA==" });

const response = await client.agents.messages.create("agent-d4b599c2-b540-491b-8c3e-4d51ca3863b5", {
  messages: [
    {
      role: "user",
      content: "What do you remember about me?",
    },
  ],
});

console.log(response.messages);