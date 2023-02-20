import { Rive as InternalRive } from "@rive-app/canvas";
import { createSignal, splitProps, JSX, createEffect } from "solid-js";
import type { RiveParameters } from "@rive-app/canvas";
import type { Accessor } from "solid-js";

export type CanvasProps = JSX.CanvasHTMLAttributes<HTMLCanvasElement>;

export type CreateRiveParameters = Omit<RiveParameters, "canvas">;

export function createRive(riveParameters: Accessor<CreateRiveParameters>) {
	const [rive, setRive] = createSignal<InternalRive>();
	const [canvas, setCanvas] = createSignal<HTMLCanvasElement>();

	createEffect(() => {
		if (canvas() != undefined) {
			const _riveParameters = riveParameters();
			const cleanedRiveParameters = {
				..._riveParameters,
				onLoad: undefined,
				canvas: canvas() as HTMLCanvasElement,
			};
			const r = new InternalRive({
				...cleanedRiveParameters,
				onLoad: (e) => {
					if (_riveParameters.onLoad != null) {
						_riveParameters.onLoad(e);
					}
					setRive(r);
				},
			});
		}
	});

	return {
		canvas: () => canvas,
		rive,
		RiveComponent: (props: CanvasProps) => {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const [_, others] = splitProps(props, ["ref"]);
			//? we use a signal for the canvas to handle unmounting and remounting the component
			return <canvas ref={(c) => setCanvas(c)} {...others} />;
		},
	};
}
