import { createFileRoute } from "@tanstack/react-router";
import NeonCalculator from "@/pages/NeonCalculator";

export const Route = createFileRoute("/neon-calculator")({
  component: NeonCalculator,
});
