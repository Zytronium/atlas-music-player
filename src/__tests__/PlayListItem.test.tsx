import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import PlayListItem from "../components/PlayListItem";
import { afterAll, afterEach, beforeAll } from "vitest";
import { server } from "./mocks";

// Start server before all tests run
beforeAll(() => {
  server.listen();
});

// Reset between tests to guarantee test always start in the same state
afterEach(() => {
  server.resetHandlers();
});

// Shutdown at the end of tests
afterAll(() => {
  server.close();
});

test("PlayListItem - typical props (inactive)", () => {
  const { container } = render(
    <PlayListItem
      duration={125}
      title="Typical Track"
      artist="Some Artist"
      index={0}
      setSongIndex={() => {}}
    />,
  );
  expect(container).toMatchSnapshot();
});

test("PlayListItem - active state applied", () => {
  const { container } = render(
    <PlayListItem
      duration={200}
      title="Active Track"
      artist="Some Other Artist"
      index={1}
      setSongIndex={() => {}}
      active
    />,
  );
  expect(container).toMatchSnapshot();
});

test("PlayListItem - active explicitly false", () => {
  const { container } = render(
    <PlayListItem
      duration={200}
      title="Explicitly Inactive"
      artist="Yet Another Artist"
      index={5}
      setSongIndex={() => {}}
      active={false}
    />,
  );
  expect(container).toMatchSnapshot();
});

test("PlayListItem - zero duration and short title", () => {
  const { container } = render(
    <PlayListItem
      duration={0}
      title="Short"
      artist="a"
      index={2}
      setSongIndex={() => {}}
    />,
  );
  expect(container).toMatchSnapshot();
});

test("PlayListItem - NaN duration", () => {
  const { container } = render(
    <PlayListItem
      duration={Number.NaN as unknown as number}
      title="Weird Duration"
      artist="Edge Case"
      index={3}
      setSongIndex={() => {}}
    />,
  );
  expect(container).toMatchSnapshot();
});

test("PlayListItem - duration passed as MM:SS string displays as NaN", () => {
  const { container } = render(
    <PlayListItem
      duration={"3:45" as unknown as number}
      title="String Duration"
      artist="Edge Case"
      index={6}
      setSongIndex={() => {}}
    />,
  );
  expect(container).toMatchSnapshot();
});

test("PlayListItem - long duration", () => {
  const { container } = render(
    <PlayListItem
      duration={3601}
      title="Never gonna give you up"
      artist="Rick Astley"
      index={4}
      setSongIndex={() => {}}
    />,
  );
  expect(container).toMatchSnapshot();
});
