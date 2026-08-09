# CLAUDE.md

This repo has no broader Claude Code configuration. The block below exists solely as the
interface read by fleet-wide dependency/security campaigns driven from `e-xode/scripts`
(`e-xode/scripts#9`) — it is not project documentation and should not be expanded into one
without a deliberate decision to adopt Claude tooling here.

## Fleet verification contract

| Key | Value |
| --- | --- |
| `install` | `npm ci` |
| `test` | `npm run test:unit` |
| `lint` | `npm run lint` (no `--fix` — already non-destructive; `lint:fix` is the separate rewriting variant) |
| `build` | `npm run build` (static docs + component bundle, no server-side runtime) |
| `server` | vps671607 |
| `container` | `e-xode.vui` (port 3001, nginx serving static `dist/`, behind `e-xode.proxy`) |
| `deploy` | `sudo /home/e-xode.vui/deploy.sh` (symlink → `e-xode/scripts`) |
| `smoke` | `curl -sf https://vui.e-xode.net/` → 200 |
| `rollback` | ⚠️ no direct lever — `deploy.sh` runs `docker pull …:latest`, unpinned. Reverting means rebuilding an older commit through CI. See `e-xode/scripts#10`. |

🚨 **This is one of the 3 PUBLIC fleet repos** (branch protection: 1 review, `enforce_admins:
false`) — GitHub forbids approving your own PR, so a PR opened by the same account that must
merge it is unmergeable except via `gh pr merge --admin`.

🚨 **`docker-build.yml` fires on a `v*` tag push** (as of 2026-08-09; previously it fired on every
push to `master`, the one fleet outlier — now aligned with `vue-ssr`/`www`/`bunny-shop`). Merging
to `master` alone builds **no** image; a release tag is required first — see the Git section below.
(`npm-publish.yml`, which publishes the `@e-xode/vui` npm package, is a *different* lifecycle — it
only fires on a GitHub Release being created, and is orthogonal to the deployed Docker image.)

🚨 **`audit.yml` is not a merge gate** — it judges the repo's state, not the diff, and goes red
with no commit at all. Never add it to `required_status_checks`.

## Git

- No `Co-authored-by`/`Co-Authored-By` trailer or any AI/assistant mention on any commit, ever —
  commit author is always the user's own git account.
- Release workflow: create a `release/vX.Y.Z` branch, merge it into `master` via PR (1 approving
  review required, `gh pr merge --admin` for self-merge), THEN tag `vX.Y.Z` on `master` — never tag
  an unmerged release branch. The tag push triggers `docker-build.yml`'s image build (as of
  2026-08-09; previously it rebuilt on every push to `master`). Note the `v` prefix: past tags here
  were bare semver (`0.7.4`), which the new trigger will **not** match.

## Agent workflow

- **Plan escalation (automatic)** — whenever a task needs upfront analysis, exploration, or
  design work and the session runs below Opus, launch the Plan/Explore agents with `model: opus`
  immediately — announce in one line, never ask. Sole exception: the user explicitly declined
  escalation (this task or standing). Incorporate the returned plan faithfully, never re-derive
  it.
