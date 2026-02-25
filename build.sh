#!/bin/sh
cd "$(dirname "$0")/icon"
for variant in nope-off nope-on; do
  for size in 16 32 48 128; do
    magick -background none "${variant}.svg" -resize "${size}x${size}" "${variant}-${size}.png"
  done
done
