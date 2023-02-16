import { splitProps } from "solid-js";
import { createRive } from "@/hooks/createRive";
import type { CanvasProps } from "@/hooks/createRive";
import type { Layout } from "@rive-app/canvas";

export interface RiveProps {
	src: string;
	artboard?: string;
	animations?: string | string[];
	stateMachines?: string | string[];
	layout?: Layout;
	useOffscreenRenderer?: boolean;
}

export default function Rive(props: RiveProps & CanvasProps) {
	const [riveProps, canvasProps] = splitProps(props, [
		"src",
		"artboard",
		"animations",
		"stateMachines",
		"layout",
		"useOffscreenRenderer",
	]);

	const { RiveComponent } = createRive(() => ({
		useOffscreenRenderer: true,
		...riveProps,
	}));

	return <RiveComponent {...canvasProps} />;
}
