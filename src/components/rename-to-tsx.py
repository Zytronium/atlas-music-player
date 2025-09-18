#!/bin/env python3

from pathlib import Path

def rename_jsx_to_tsx(directory: Path):
    for entry in directory.iterdir():
        if entry.is_file() and entry.suffix.lower() == ".jsx":
            new_name = entry.with_suffix(".tsx")
            try:
                entry.rename(new_name)
                print(f"Renamed: {entry.name} → {new_name.name}")
            except OSError as e:
                print(f"Failed to rename {entry.name}: {e}")

if __name__ == "__main__":
    cwd = Path.cwd()
    rename_jsx_to_tsx(cwd)