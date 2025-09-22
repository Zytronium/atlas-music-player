import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import SongTitle from "../components/SongTitle";

test("SongTitle - default/large styling (size omitted)", () => {
  const { container } = render(
    <SongTitle title="The Atlas" artist="16 / 16 / 16" />,
  );
  expect(container).toMatchSnapshot();
});

test("SongTitle - small size styling", () => {
  const { container } = render(
    <SongTitle title="Short Track" artist="Some Artist" size="small" />,
  );
  expect(container).toMatchSnapshot();
});

test("SongTitle - long title and artist (wrap/overflow cases)", () => {
  const longTitle =
    "This is an unusually long song title that is intended to test wrapping and layout behavior in the component that should certainly overflow unless your monitor or zoom level is simply absurdly, astronomically, nearly incomprehensible large as heck like seriously who hsa a screen this large I know I don't except maybe the Atlas School Main Stage display can display it all if you adjust the zoom level";
  const longArtist =
    "A Very Long Artist Name That Should Overflow Or Wrap In Narrow Layouts Especially On Smaller Screens Like Mobile Phones";
  const { container } = render(
    <SongTitle title={longTitle} artist={longArtist} />,
  );
  expect(container).toMatchSnapshot();
});

test("SongTitle - empty title and artist (edge case)", () => {
  const { container } = render(<SongTitle title="" artist="" />);
  expect(container).toMatchSnapshot();
});

test("SongTitle - unicode, emojis, and special characters", () => {
  const { container } = render(
    <SongTitle
      title="🌌 星の旅 — Stårnë"
      artist="Æther & Ωmega 🎵"
      size="small"
    />,
  );
  expect(container).toMatchSnapshot();
});
