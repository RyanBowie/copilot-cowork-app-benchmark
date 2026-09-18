# Completed benchmark findings

All 20 apps in Tests 1-3 meet their final scoring and critical-check gates.
Costs below are observed cumulative Cowork task credits. Compare within each
test; app scope and review method differ between tests.

## Test 1: virtual-data apps

Five accepted Device Procurement and Availability apps. Virtual/local data is
allowed; managed-store persistence is not required. Recorded scores remain
95/100 without awarding additional storage points.

| Run | Selected configuration | Final credits | Final score | Clarifications | Corrections |
|---|---|---:|---:|---:|---:|
| 01 | Sonnet 5 / Medium | 317 | 95/100 | 0 | 0 |
| 02 | Opus 5 / High | 892 | 95/100 | 0 | 1 |
| 03 | Opus 5 / Medium | 1,083 | 95/100 | 0 | 2 |
| 04 | Sonnet 5 / High | 530 | 95/100 | 0 | 1 |
| 05 | Sonnet 5 / Medium | 397 | 95/100 | 0 | 1 |
| **Total** | **5 accepted apps** | **3,219** | | **0** | **5** |

Each task includes one native self-review prompt in addition to external checks.
These are build-and-review costs, not the external-only method used in Tests 2
and 3. The Sonnet Medium baseline was repeated; the other settings have one
observation each. Build-completion timing was not captured for this test, so
build durations are not estimated.

## Test 2: SharePoint-connected apps

Ten accepted apps, with five configurations tested twice in reverse-order
blocks. Every app reads the same synthetic SharePoint fixture, creates a
complete request, and demonstrates persistence through independent server
read-back and reopening. All score 90/100.

| Run | Selected configuration | Final credits | Final score | Clarifications | Corrections | Build time, approx. |
|---|---|---:|---:|---:|---:|---:|
| 01 | Sonnet 5 / Medium | 224 | 90/100 | 0 | 0 | 10m 00s |
| 02 | Opus 5 / High | 968 | 90/100 | 0 | 0 | 19m 26s |
| 03 | Opus 5 / Medium | 417 | 90/100 | 0 | 0 | 8m 48s |
| 04 | Sonnet 5 / High | 620 | 90/100 | 0 | 0 | 16m 58s |
| 05 | GPT 5.5 / Medium | 345 | 90/100 | 0 | 1 | 10m 32s |
| 06 | GPT 5.5 / Medium | 252 | 90/100 | 0 | 0 | 7m 51s |
| 07 | Sonnet 5 / High | 313 | 90/100 | 0 | 0 | 11m 26s |
| 08 | Opus 5 / Medium | 425 | 90/100 | 0 | 0 | 10m 24s |
| 09 | Opus 5 / High | 786 | 90/100 | 0 | 1 | 15m 28s |
| 10 | Sonnet 5 / Medium | 230 | 90/100 | 0 | 0 | 8m 46s |
| **Total** | **10 accepted apps** | **4,580** | | **0** | **2** | |

Eight apps required no corrective guidance; two required one corrective prompt
each. Review was external-only. Connection-error/no-fallback coverage (BC09)
remains unverified, accounting for the unawarded ten points.

### Paired cost, time and maker guidance

| Configuration | Final credits, repeat 1 / 2 | Observed mean credits | Corrective prompts, repeat 1 / 2 |
|---|---:|---:|---:|
| Sonnet 5 / Medium | 224 / 230 | 227 | 0 / 0 |
| GPT 5.5 / Medium | 345 / 252 | 298.5 | 1 / 0 |
| Opus 5 / Medium | 417 / 425 | 421 | 0 / 0 |
| Sonnet 5 / High | 620 / 313 | 466.5 | 0 / 0 |
| Opus 5 / High | 968 / 786 | 877 | 0 / 1 |

**Sonnet 5 / Medium is the cost-supported starting choice for this specific
SharePoint scope:** both observations reached 90/100 with no corrections.
Two observations are not a reliable variance estimate or a promised future price.
Per-app build times add the recorded authoring responses, including corrections,
and exclude external review and gaps between prompts. They are approximate
observations, not isolated model compute time.

## Test 3: complex-app results

Five accepted apps, each receiving the same four ordered prompts:
build the virtual-data foundation, connect Office 365 Users inside the existing
app, extend workflows/themes/preferences, then change policy/forms/mobile
requirements. Business records and approvals remain synthetic and virtual/local.

| Run | Selected configuration | Final credits | Final score | Clarifications | Corrections | Build time, approx. |
|---|---|---:|---:|---:|---:|---:|
| 01 | Sonnet 5 / Medium | 1,326 | 90/100 | 0 | 1 | 39m 31s |
| 02 | Opus 5 / High | 3,073 | 95/100 | 0 | 1 | 46m 03s |
| 03 | Opus 5 / Medium | 2,358 | 95/100 | 0 | 2 | 35m 12s |
| 04 | Sonnet 5 / High | 2,289 | 90/100 | 0 | 0 | 51m 30s |
| 05 | GPT 5.5 / Medium | 944 | 90/100 | 1 | 0 | 21m 43s |
| **Total** | **5 accepted apps** | **9,990** | | **1** | **4** | |

All five have three planned follow-up prompts and zero native self-review
prompts. Planned changes are not corrective guidance. GPT Medium's single
clarification was "Build them all"; its cost is included in the recorded task
credits, not estimated separately.

### Cumulative stage readings

| Configuration | Foundation | Profile | Workflows | Policy/forms | Final task total |
|---|---:|---:|---:|---:|---:|
| Sonnet 5 / Medium | 176 | 367 | 770 | 1,326 | 1,326 |
| Opus 5 / High | 561 | 916 | 1,679 | 2,505 | 3,073 |
| Opus 5 / Medium | 505 | 1,124 | 1,720 | 2,011 | 2,358 |
| Sonnet 5 / High | 292 | 550 | 1,507 | 2,289 | 2,289 |
| GPT 5.5 / Medium | 381 | 501 | 736 | 944 | 944 |

**Do not add these columns.** Each reading is cumulative. The final task total
includes all recorded guidance, including any after the last planned change.
Foundation readings cover that stage, not the complete target application.

### Complex-app cost, capability and maker guidance

All five demonstrate the required multi-screen navigation, forms, virtual
approval and asset workflows, data continuity, light/dark themes and actual
read-only signed-in profile. Profile identity and displayed fields were
independently verified in-app and reverified after the final reopen.

| Configuration | Final score | Coverage outside the awarded points |
|---|---:|---|
| Sonnet 5 / Medium | 90/100 | Profile fault/Retry coverage unverified (CX14); cost-centre handling incomplete (CX17) |
| Opus 5 / High | 95/100 | Profile fault/Retry coverage unverified (CX14) |
| Opus 5 / Medium | 95/100 | Profile fault/Retry coverage unverified (CX14) |
| Sonnet 5 / High | 90/100 | Profile fault/Retry coverage unverified (CX14); full default-department consumption coverage unverified (CX16) |
| GPT 5.5 / Medium | 90/100 | Profile fault/Retry coverage unverified (CX14); full default-department consumption coverage unverified (CX16) |

Preference Save/Cancel, persistence and measurable density changes were
demonstrated for Sonnet High and GPT Medium; the CX16 limitation concerns the
full default-department-consumption check, not all preference functionality.
Equal 90-point scores therefore do not imply identical delivered capabilities.

**GPT 5.5 / Medium had the lowest observed accepted cost**, at 944 credits and
90/100, with one clarification and no corrective prompts. Both Opus settings
reached 95/100; Opus Medium used fewer final credits than Opus High in these
observations. Higher reasoning did not consistently increase the final score.
There is only one observation per setting, so this does not establish
repeatability or a universal best model.

Build time includes every planned authoring stage and additional clarification
or correction response. It excludes external review, screenshot-taking gaps,
time between prompts, `/cost` commands and native self-review. For example,
GPT Medium's **21m 43s** includes both its initial response and clarification,
plus all three planned follow-ups, rather than treating its first reply as
the complete app. Within-turn waits and observation uncertainty remain included.

## Interpretation

Acceptance means at least 85/100 and every required critical check, not complete
coverage or production readiness. The synthetic fixtures do not establish
production authorization, concurrency, large-list scale or reliable future
pricing. Selected Cowork settings do not prove internal app-builder routing.

See [METHOD.md](METHOD.md) for scope, controls, cost semantics and evidence
handling, or [data.json](data.json) for exact final measurements and capability
verdicts.
