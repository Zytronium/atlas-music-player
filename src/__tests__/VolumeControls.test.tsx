import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import VolumeControls from "../components/VolumeControls";
import { afterAll, afterEach, beforeAll } from "vitest";
import { server } from "./mocks";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("VolumeControls - default (no props)", () => {
  const { container } = render(<VolumeControls />);
  expect(container).toMatchSnapshot();
});

test("VolumeControls - loading state (controls visually disabled)", () => {
  const { container } = render(<VolumeControls loading />);
  expect(container).toMatchSnapshot();
});

test("VolumeControls - with setVolume callback provided", () => {
  const { container } = render(<VolumeControls setVolume={() => {}} />);
  expect(container).toMatchSnapshot();
});

test("VolumeControls - loading true with setVolume provided", () => {
  const { container } = render(<VolumeControls loading setVolume={() => {}} />);
  expect(container).toMatchSnapshot();
});

test("VolumeControls - explicitly passing setVolume as undefined", () => {
  const { container } = render(<VolumeControls setVolume={undefined} />);
  expect(container).toMatchSnapshot();
});
