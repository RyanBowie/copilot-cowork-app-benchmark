# Copilot Cowork app-build benchmark

An evidence-led comparison of the cost, time and delivered capabilities of the
same **Device Procurement and Availability** business application, using different
model and effort selections in Copilot Cowork.

**Current status: ten fresh SharePoint-connected builds are being redone.**
Previous comparison results are superseded because additional billable Cowork
self-review prompts were a controller error. No earlier run enters the clean
comparison, and no estimated review cost is deducted from historical spend.
Clean run-01, Sonnet 5 / Medium, started on 17 September 2026.

The v5 method uses one implementation-only build prompt, independent controller
review, and at most two narrow repair prompts for reproduced defects. It covers
Dashboard, Catalogue, New request and My requests, including real SharePoint
writes and reopening. No approval workflow or native self-review is requested.
Five model/effort settings are repeated twice in reverse-order blocks.
The earlier demo pilot and discarded focused run count toward the twenty-build
ceiling: ten fresh builds bring the demo total to twelve, with no automatic
extension registered.

**Excluded historical status:** five pilot builds are complete. Test 2 has one completed, unaccepted
Dataverse-backed build; the other nine are paused at an unresolved write-binding
boundary. This is not a completed ten-run comparison.
The subsequent Excel restart has a verified OneDrive workbook, but its setup
pilot stopped at a managed-app table-schema allowlist error. **Zero measured
Excel builds have started**; the requested ten, conditionally up to twenty,
remain gated on a working pilot.

[Interactive report](https://ryanbowie.github.io/copilot-cowork-app-benchmark/) |
[Method](METHOD.md) | [Findings](FINDINGS.md) | [Public data](data.json)

## The business use case

The **current** app lets employees browse live equipment availability, save a
complete Pending request and reopen their saved requests. The historical
approval/reset scope below is retained for interpreting old evidence only.

Employees browse available equipment, submit device requests and track decisions.
An IT approver approves or rejects requests and maintains available stock.
The application includes Dashboard, Catalogue, New request, My requests,
Approvals, and a confirmation-gated demo reset.

The backing tables are named **Device List** and **Device Requests**. The demo
contains six device models, 25 available units and four requests, including three
Pending requests with a combined value of GBP 3,800. Personas and records are
synthetic; persona switching is not production authorization.

Benchmark instrumentation stays outside the business application.

## Experiments

| Experiment | Design | Completed | Fully accepted |
|---|---|---:|---:|
| Test 1 | Four model/effort combinations plus a Sonnet Medium repeat | 5 / 5 | 0 |
| Test 2 | Five combinations, twice each, in reverse-order blocks; Dataverse backend supplied | 1 / 10 | 0 |
| Excel restart | Working pilot first, then ten consistent builds; conditional maximum twenty | Pilot blocked; 0 measured | 0 |

Test 1's final cumulative readings total **3,219 Cowork task credits**. All five
missed managed server-side persistence, despite final UI scores of 95/100.

Test 2 run-01, Sonnet 5 / Medium, used **340 credits at first output** and
**1,142 credits at the final reviewed result**, reaching **65/100** after two
corrective prompts and one authorization clarification. Writes remain blocked.
Do not add the first reading to the final cumulative reading.

The separate Excel setup pilot used **151 first-output / 419 final credits** and
did not establish a live app connection. Its first response was observed by
**7m 07s**, and its reviewed-result wall time was **44m 23s**, including
investigation and checker development. These are setup measurements, not a
completed Excel model comparison.

## What is measured

For the clean restart, ten controller-owned checks earn ten points each.
Acceptance requires 85/100 and every critical check. There is no billable review
prompt; the controller performs all preview, backend and visual assessment.
The following twenty-check description belongs to the superseded experiments.

- Actual Cowork `/cost` readings, not estimated token prices or Copilot CLI billing.
- Twenty acceptance checks, five points each; acceptance requires at least 85/100
  **and every critical check passing**.
- First and final capability outcomes, corrective prompts, clarifications and approvals.
- Observed time to first completed build response and final reviewed result.
  Time to acceptance exists only for an accepted app.

Timing instrumentation began during Test 2 run-01. Its first completed response
was observed by **14m 53s**: an upper bound, not an exact isolated generation time.
The final reviewed result took **1h 49m 21s** wall-clock, including first-run
harness calibration and connector investigation. That is not a model-speed
benchmark.

## Reproduction material

- Clean restart [implementation-only prompt](benchmark/test-02-sharepoint-clean/build-prompt-template.txt),
  [protocol](benchmark/test-02-sharepoint-clean/protocol.json),
  [controller review instructions](benchmark/test-02-sharepoint-clean/external-review-instructions.txt)
  and [ten-check rubric](benchmark/test-02-sharepoint-demo/focused-acceptance.json).
  The controller instructions must **never** be sent to Cowork.

- [Test 1 prompt](benchmark/build-prompt.txt), [protocol](benchmark/protocol.json)
  and [acceptance rubric](benchmark/acceptance.json).
- [Test 2 prompt template](benchmark/test-02/build-prompt-template.txt),
  [protocol](benchmark/test-02/protocol.json),
  [amendments](benchmark/test-02/protocol-amendments.json),
  [review prompt](benchmark/test-02/review-prompt.txt) and
  [acceptance rubric](benchmark/test-02/acceptance.json).
- [Synthetic seed](benchmark/test-02/seed.json) and
  [Dataverse schema/choice mapping](lib/dataverse-schema.mjs).
- Excel restart [draft prompt](benchmark/test-02-excel/build-prompt-template.txt),
  [workbook schema](benchmark/test-02-excel/backend-schema.json),
  [acceptance rubric](benchmark/test-02-excel/acceptance.json) and
  [setup status](benchmark/test-02-excel/setup-status.json).

The Test 2 connection wording is deliberately simple: connect to Microsoft
Dataverse at the supplied organization URL using Device List and Device Requests.
That wording established live reads here; it is **not** evidence of working CRUD
in every tenant.

`index.html` is a self-contained static report with embedded public data and no
external runtime dependencies or tracking scripts. Open it locally or through
GitHub Pages.

## Evidence and privacy

Exact submitted prompts, visible conversations, screenshots, schema approvals,
backend snapshots, raw cost cards and timing events are retained privately.
This repository publishes an allowlisted measurement projection and public
templates, not raw account-bearing captures, credentials, tenant identifiers,
private app links or generated applications.

The report follows the structural idea of
[the Copilot Studio load-test report](https://github.com/RyanBowie/copilot-studio-load-test),
with original content and presentation.
