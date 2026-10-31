import { createFileRoute } from "@tanstack/react-router";
import SignageLaw from "@/pages/SignageLaw";

export const Route = createFileRoute("/signage-law")({
  component: SignageLaw,
});
