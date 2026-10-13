import { defineMcp } from "@lovable.dev/mcp-js";
import listServicesTool from "./tools/list-services";
import getServiceTool from "./tools/get-service";
import getBusinessInfoTool from "./tools/get-business-info";

export default defineMcp({
  name: "glanz-mcp",
  title: "Glanz Detailing",
  version: "0.1.0",
  instructions:
    "Public information about Glanz, a car detailing boutique in Costa Rica. Use `list_services` to browse services (ceramic coatings, PPF, tinting, interior detailing, maintenance wash, engine cleaning), `get_service` for full details and pricing on a specific service, and `get_business_info` for contact info and hours.",
  tools: [listServicesTool, getServiceTool, getBusinessInfoTool],
});
