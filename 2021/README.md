# Advent Of Code 2021
This year I want to solve everything with Deno.
I also created a fancy shmancy init script for this year to create a new
directory for each puzzle day with a few standards and to automatically
download the input file from adventofcode.com.

### Setup & Usage
You need to have installed:
- Deno 1.16.0 or later

In order to run the solutions, simply navigate to the directory of the
corresponding year and run for example:
```sh
deno run --allow-read --allow-net 1/part_1.ts
```

To be able to automatically download the input files, you need to copy your
valid session token of the session cookie from adventofcode.com
and store it in `2021/session.cookie`.
