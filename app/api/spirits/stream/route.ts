import { spirits } from "../spirits.mock";

const THREAT_LEVELS = ["Low", "Medium", "High", "Critical"] as const;

const THREAT_LEVEL_MAP = {
  Low: "#4CAF50",
  Medium: "#FFC107",
  High: "#FF5722",
  Critical: "#D32F2F",
} as const;

export async function GET() {
  const encoder = new TextEncoder();
  let interval: NodeJS.Timeout;

  const stream = new ReadableStream({
    start(controller) {
      interval = setInterval(() => {
        const randomSpirit =
          spirits[Math.floor(Math.random() * spirits.length)];

        const newThreat =
          THREAT_LEVELS[Math.floor(Math.random() * THREAT_LEVELS.length)];

        randomSpirit.threatLevel = {
          value: newThreat,
          color: THREAT_LEVEL_MAP[newThreat],
        };

        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify(randomSpirit)}\n\n`)
        );
      }, 5000);
    },
    cancel() {
      clearInterval(interval);
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
