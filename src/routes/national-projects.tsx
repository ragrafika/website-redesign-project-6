import { createFileRoute } from "@tanstack/react-router";
import NationalProjects from "@/pages/NationalProjects";

export const Route = createFileRoute("/national-projects")({
  component: NationalProjects,
});
