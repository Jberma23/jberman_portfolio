import { Navigation } from "../components/nav";
import { Resume } from "./resume";

export default async function ProjectsPage() {
	return (
		<div className="relative pb-16">
			<Navigation />
			<Resume />
		</div>
	);
}
