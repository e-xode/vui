# e-xode.vui — why this skill exists here, and local deltas

Contents: [The decision](#the-decision) · [What was kept](#what-was-kept) · [What was left behind](#what-was-left-behind) · [Local deltas](#local-deltas)

## The decision

`CLAUDE.md` opens by saying this repository "has no broader Claude Code configuration" and "should
not be expanded into one **without a deliberate decision** to adopt Claude tooling here". That
decision was taken on **2026-09-20**, and this file is where it is recorded.

The reason is narrow. The fleet wired a `SessionStart` hook that measures each repository's Claude
configuration at session start and puts the counts in context before the first claim is made. That
hook reads `deadweight`. A repository without the skill could
not be measured — it was the only one of the fleet's own repositories left out.

**The decision does not widen.** `CLAUDE.md` stays an interface for fleet campaigns, not project
documentation. Adding a second skill here needs its own reason.

## What was kept

The eight doctrine references, verbatim and in English, each carrying a banner naming its origin:
`agent-anatomy`, `antipatterns`, `audit-checklist`, `claude-md-anatomy`, `official-links`,
`rules-anatomy`, `skill-anatomy`, `skill-runtime-mechanisms`. Plus `scripts/audit.py`, taken from
the fleet reference (`cbragard.llm/.claude/skills/fleet-propagation/reference/audit.py`) so that
this copy is byte-identical to the other repositories' — that identity is the whole point.

## What was left behind

`case-studies*.md`, `open-decisions.md`, `orchestration-procedures.md` and the dated audit reports:
they are another project's decision history and would read here as this project's, which they are
not. A handful of sentences in the kept references still name them in passing; the mention is
harmless, the file is simply absent.

## Local deltas

The doctrine assumes a repository with several skills, agents and rules. This one has one skill and
nothing else, on purpose. Read the references as the fleet's conventions, not as a checklist this
repository is failing.
