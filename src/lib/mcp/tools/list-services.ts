import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { SERVICES } from "@/data/services";

export default defineTool({
  name: "list_services",
  title: "List services",
  description:
    "List all detailing services offered by Glanz, optionally filtered by category (exterior, interior, pelicula). Returns slug, name, category, and short summary for each service.",
  inputSchema: {
    category: z
      .enum(["exterior", "interior", "pelicula"])
      .optional()
      .describe("Optional category filter."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category }) => {
    const items = SERVICES.filter((s) => !category || s.category === category).map((s) => ({
      slug: s.slug,
      name: s.name,
      category: s.category,
      summary: s.summary,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { services: items },
    };
  },
});
