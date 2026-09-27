# Design

## Layers

1. **Intent** — application code describes what it wants to do.
2. **Plan** — this package validates and records transaction commands.
3. **Adapter** — a future Sui SDK integration converts commands into SDK transaction calls.
4. **Execution** — a caller chooses the network, signer, gas policy, and submission behavior.

Keeping the adapter separate makes the core useful for tests without requiring a wallet or network connection.

## Non-goals

This project does not attempt to automate wallet custody, private-key handling, or unattended transaction submission.
