import { createFileRoute } from "@tanstack/react-router";
import VolumeLettersCalculator from "@/pages/VolumeLettersCalculator";

export const Route = createFileRoute("/volume-letters-calculator")({
  component: VolumeLettersCalculator,
});
