import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { getService } from "@/data/services";

export default defineTool({
  name: "get_service",
  title: "Get service details",
  description:
    "Get full details for a Glanz detailing service by slug, including description, benefits, process steps, packages/pricing, and FAQs.",
  inputSchema: {
    slug: z.string().min(1).describe("Service slug, e.g. 'recubrimiento-ceramico', 'ppf', 'polarizado-de-ventanas'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const service = getService(slug);
    if (!service) {
      return {
        content: [{ type: "text", text: `No service found with slug "${slug}".` }],
        isError: true,
      };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(service, null, 2) }],
      structuredContent: { service },
    };
  },
});
