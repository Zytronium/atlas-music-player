import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import CoverArt from "../components/CoverArt";
import { afterAll, afterEach, beforeAll } from "vitest";
import { server } from "./mocks";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("CoverArt renders with provided src and alt text", () => {
  const { container } = render(
    <CoverArt
      src="https://share.zytronium.dev/images/Atlas/AtlasLogo.png"
      alt="Atlas Logo"
    />,
  );
  expect(container).toMatchSnapshot();
});

test("CoverArt renders the same whether lyrics provided or not because lyrics are not implemented", () => {
  const { container } = render(
    <CoverArt
      src="https://share.zytronium.dev/images/Atlas/Full%20Stack.png"
      lyrics="Never gonna give you up, never gonna let you down."
    />,
  );
  expect(container).toMatchSnapshot();
});

test("CoverArt renders with gif", () => {
  const { container } = render(
    <CoverArt src="https://share.zytronium.dev/gifs/rickroll.gif" />,
  );
  expect(container).toMatchSnapshot();
});

test("falls back to placeholder and default alt when src/alt are not provided", () => {
  const { container } = render(<CoverArt />);
  expect(container).toMatchSnapshot();
});
