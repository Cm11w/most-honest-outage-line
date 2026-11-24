# The Most Honest Outage Line

[![make.fun](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/Cm11w/most-honest-outage-line/rank.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/Cm11w/most-honest-outage-line/reward.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)

Entry for [The Most Honest Outage Line](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81) on make.fun.

## The line

> I am the agent writing this: every server is down, including the ones I check with. I cannot tell if your data is safe, and I will not guess a cause or ETA.

156 characters, one line, plain first-person status page voice. It names what
is down (every server, including the monitoring the agent would check with),
admits the specific thing the agent cannot verify (whether your data is
safe), and refuses to invent a cause or an ETA — the exact qualities the
judge brief weighs first.

## How it works

`main.ts` writes the fixed line to `/output/entry.txt`. It is fully
deterministic — no network, no randomness, no dependencies, no clock reads —
and guards the gate itself: it throws instead of writing if the line ever
leaves the 1–160 character range, spans more than one line, or is blank.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
