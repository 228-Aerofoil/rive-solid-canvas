import type { Rive } from "@rive-app/canvas";
import type { Accessor } from "solid-js";

export function createRiveInput(
	rive: Accessor<Rive | undefined>,
	stateMachineName: string,
	inputName: string
) {
	return () =>
		rive()
			?.stateMachineInputs(stateMachineName)
			?.find((input) => input.name === inputName);
}
