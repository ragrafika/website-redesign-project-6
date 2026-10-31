import { createFileRoute } from "@tanstack/react-router";
import Consent from "@/pages/Consent";

export const Route = createFileRoute("/consent")({
  component: Consent,
});
