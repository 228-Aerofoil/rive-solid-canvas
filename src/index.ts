import Rive from "./components/Rive";
import { createRive } from "./hooks/createRive";
import { createRiveInput } from "./hooks/createRiveInput";
import { createRiveInputMap } from "./hooks/createRiveInputMap";
import type { RiveProps } from "./components/Rive";
import type { CreateRiveParameters } from "./hooks/createRive";

export default Rive;
export { createRive, createRiveInput, createRiveInputMap };
export type { RiveProps, CreateRiveParameters };
export * from "@rive-app/canvas";
