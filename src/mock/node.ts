import { setupServer } from "msw/node";
import { handlers } from "./mock-response";

export const server = setupServer(...handlers);
