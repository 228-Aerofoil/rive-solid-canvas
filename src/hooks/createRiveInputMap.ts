import type { StateMachineInput, Rive } from "@rive-app/canvas";
import type { Accessor } from "solid-js";

export function createRiveInputMap(
	rive: Accessor<Rive | undefined>,
	stateMachineName: string
) {
	return () =>
		rive()
			?.stateMachineInputs(stateMachineName)
			?.reduce((acc, input) => {
				acc.set(input.name, input);
				return acc;
			}, new Map<string, StateMachineInput>()) ??
		new Map<string, StateMachineInput>();
}
