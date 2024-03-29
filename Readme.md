# Rive-Solid-Canvas

[![npm version](https://img.shields.io/npm/v/@aerofoil/rive-solid-canvas)](https://www.npmjs.com/package/@aerofoil/rive-solid-canvas)
[![Known Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/228-Aerofoil/rive-solid-canvas)](https://snyk.io/test/github/228-Aerofoil/rive-solid-canvas)

This is an unofficial wrapper of the Rive Canvas Runtime for SolidJS. Syntactically it is designed to be similar to the official Rive Runtime for React; that being said it is not a 1 to 1 match. See the [comparison](#comparison) section for more details.

1. [Getting Started](#getting-started)
2. [Advanced Usage](#advanced-usage)
3. [Documentation](#documentation)
4. [Comparison](#comparison)

## Getting Started

1. Install the dependency.

```bash
npm install @aerofoil/rive-solid-canvas
```

2. Render a Rive component.

Rive-Solid-Canvas provides a basic component just like the official Rive React library. Just like the official library this is designed to be a simple usecase for simple animations.

```tsx
import Rive from "@aerofoil/rive-solid-canvas";

export default function Simple() {
	return <Rive src="https://cdn.rive.app/animations/vehicles.riv" />;
}
```

## Advanced Usage

More advanced cases should use `createRive` to create a custom component. This allows for more control over the animation, canvas, and underlying rive object.

```tsx
import { createRive } from "@aerofoil/rive-solid-canvas";

export default function Advanced() {
	const { rive, RiveComponent } = createRive(() => ({
		src: "https://cdn.rive.app/animations/vehicles.riv",
		autoplay: false,
	}));

	return (
		<div
			onMouseEnter={() => rive() && rive().play()}
			onMouseLeave={() => rive() && rive().pause()}
		>
			<RiveComponent width="1000" height="500" />
		</div>
	);
}
```

Just like the official Rive React library, the `createRive` function will run once the dom is rendered as the the underlying `<canvas>` element needs to be present in the DOM.

## Documentation

### `<Rive />` Component (Default Export)

A simple component for render simple rive animations on a canvas. In practice this is just a wrapper around `createRive`.

Props

- `src: string` - the src of the rive file to load
- `artboard?: string` - the name of the artboard to use
- `animations?: string | string[]` - the name or list of names of animations to play
- `statateMachines?: string | string[]` - the name or list of names of state machines to play
- `layout?: Layout` - the layout object defining how animations are positioned on the canvas. see the [official rive documentation](https://help.rive.app/runtimes/layout) for more info.
- `useOffscreenRenderer?: boolean` - whether to use the offscreen renderer. see the [official rive documentation](https://help.rive.app/runtimes/overview/web-js/rive-parameters) for more info.
- canvas props - any other props will be passed to the underlying `<canvas>` element

The typescript prop type for this component can be imported using

```ts
import type { RiveProps } from "@aerofoil/rive-solid-canvas";
```

### `createRive()`

This function takes a single argument, a solidjs accessor returning all the `RiveParameters` from the official web rive library with the exception of `canvas` which is created and managed internally.

For convenience the type `CreateRiveParameters` and can be imported using

```ts
import type { CreateRiveParameters } from "@aerofoil/rive-solid-canvas";
```

The return value is an object with the following properties
`canvas` - an accessor to the ref of the internal canvas element
`rive` - an accessor to the rive object
`RiveComponent` - a component that renders and manages the canvas element. Can use all the same props as the default `<canvas>` element, with the exception of ref.

### `createRiveInput()`

This function is used to quickly get a rive input given the rive accessor generated by `createRive`.

Arguments

- `rive: rive accessor` - the rive accessor generated by `createRive`
- `stateMachineName: string` - the name of the state machine to get the input for
- `inputName: string` - the name of the input to get

Returns an accessor to the `StateMachineInput` object. This accessor can be used to set the value of the input.

### `createRiveInputMap()`

This function is used to quickly get a map of all rive inputs for a given state machine.

Arguments

- `rive: rive accessor` - the rive accessor generated by `createRive`
- `stateMachineName: string` - the name of the state machine to get the input for

Returns an accessor for a map with the keys being the input names and the values being the input accessors.

## Comparison

| Name                             | Rive-Solid-Canvas | Official Rive React |
| -------------------------------- | ----------------- | ------------------- |
| Simple Component                 | ✅                | ✅                  |
| Advanced Usage                   | ✅                | ✅                  |
| StateMachine Input Accessor      | ✅                | ✅                  |
| webGL support                    | ❌                | ✅                  |
| useDevicePixelRatio Option       | ❌                | ✅                  |
| fitCanvasToArtboardHeight Option | ❌                | ✅                  |
| Bluk StateMachine Input Accessor | ✅                | ❌                  |

## Potential Roadmap

This is a quick project to serve our needs. There isn't much to go wrong or much to maintain. This should act more as a todo list; there is no given timeline for when these will be worked on

- Add typesafety. Currently this relies on the typesafety of rive as it is, ideally it would be possible to define the available animations, state machines, statemachine inputs, etc. To prevent invalid names from being passed into input generators.

## Credits

- [SolidJS](https://www.solidjs.com/)
- [Rive](https://rive.app/)
  - [Rive Documentation](https://help.rive.app/)

## License

[MIT](LICENSE)
