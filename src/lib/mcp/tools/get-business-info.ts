import { defineTool } from "@lovable.dev/mcp-js";
import { SITE } from "@/data/site";

export default defineTool({
  name: "get_business_info",
  title: "Get business info",
  description:
    "Get Glanz contact information: phone, email, address, business hours, and city.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      name: "Glanz",
      slogan: "Detailing Boutique en Costa Rica.",
      phone: SITE.telefono,
      email: SITE.email,
      address: SITE.direccion,
      hours: SITE.horario,
      city: SITE.ciudad,
      whatsapp: "https://wa.me/50688981010",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
