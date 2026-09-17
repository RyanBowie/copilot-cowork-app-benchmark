# Findings

## Clean restart: previous comparisons superseded

The user requested a complete redo after identifying additional billable
Cowork self-review prompts that the controller should not have submitted.
Ten fresh SharePoint-connected builds now use controller-only acceptance
review. No previous result enters that clean comparison, including the
discarded focused run's initial cost. Old spend and evidence remain unchanged;
there is no reliable review-cost deduction.

A demo SharePoint pilot demonstrated actual live reads, request creation and
reopen persistence under the later narrowed scope. Its **1,976 final task
credits** include broader troubleshooting and paid review, so it is setup
history, not a focused-app price. The discarded focused attempt's **311 initial
credits / 70 first-output points** are also excluded; its later repaired
Dashboard was not independently rechecked before the redo instruction.

The first two fresh runs meet the declared gate; the comparison is not complete:

| Clean run | Model / effort | First / final credits | First / final score | Corrections | Native reviews |
|---|---|---:|---:|---:|---:|
| 01 | Sonnet 5 / Medium | 224 / 224 | 90 / 90 | 0 | 0 |
| 02 | Opus 5 / High | 968 / 968 | 90 / 90 | 0 | 0 |

The controller independently verified all six live catalogue rows, dashboard
arithmetic, search/filters, input validation, one complete Pending request,
requester scoping and reopening the saved request. Inventory remained unchanged.
Desktop and 390px keyboard/scrolling usability passed. **BC09 remains blocked**:
connection-error/no-fallback behavior was not fault-tested and is not awarded
from source claims. All critical checks passed.

The first completed build response was observed within **9m 57.865s to
10m 00.060s** after submission. The final externally reviewed result took
**23m 29.916s**, including controller review and instrumentation, not just model
execution. Both real task cost cards showed 224 credits; no additional native
review or repair was requested. The controller archived the conversation and
deleted only its test-created request, then independently verified the exact
six-device/four-request fixture with no unexpected seed mutations.

Opus High also passed live reads, complete request creation, requester scoping,
reopening and usability. Its first internal implementation contained the read
views only; the native parent continued completing the original specification
without a controller prompt. All that native work is included in its 968 credits.
The first completed build response was observed between **19m 23.623s and
19m 25.748s**. The final externally reviewed result took **31m 09.782s**.

Two initial blocked checks were instrumentation issues, not application
defects: the search control correctly exposed the native `searchbox` role, and
the reopen checker navigated the old iframe before its replacement document
committed. Both were independently rechecked after fixing the controller.
No paid repair was requested. Raw observations and separate adjudications are
retained. BC09 remains untested/blocked for both runs. The controller deleted
only its test-created request and independently reverified the exact seed.

Fresh run-03, Opus 5 / Medium, is running. Seven further builds remain. A single
observation per configuration does not establish repeatability or a model
ranking. The ten fresh runs use four views and do not require approval/rejection
workflows.

The following findings are **historical audit evidence only**.

## No fully accepted winner

All five pilot builds failed managed persistence. The first Dataverse-backed
build also remains unaccepted because its write path fails. Choosing a model
solely from a low credit reading would ignore the missing required capability.

## Test 1: five completed pilot builds

| Run | Selected model / effort | First credits | Final credits | First score | Final score | Corrections |
|---|---|---:|---:|---:|---:|---:|
| 01 | Sonnet 5 / Medium | 276 | 317 | 95 | 95 | 0 |
| 02 | Opus 5 / High | 621 | 892 | 10 | 95 | 1 |
| 03 | Opus 5 / Medium | 342 | 1,083 | 0 | 95 | 2 |
| 04 | Sonnet 5 / High | 351 | 530 | 85 | 95 | 1 |
| 05 | Sonnet 5 / Medium | 174 | 397 | 90 | 95 | 1 |

Final cumulative readings total **3,219 credits**. Every final score still
contains the critical AC14 persistence failure.

The two historical Sonnet Medium final readings span **317-397 credits**.
These include the superseded paid-review method and do not establish a
clean build-price range or a current model recommendation.

Opus High initially delivered a shell and Opus Medium a blank preview. Preview
server/cache recovery contributed to corrective work, so those outcomes cannot
be assigned solely to intrinsic model quality. Other observed corrections
included stale requester state and mobile overflow.

## Test 2: one completed attempt, nine paused

| Metric | Run-01: Sonnet 5 / Medium |
|---|---|
| First-output task credits | 340 |
| Final task credits | 1,142 |
| Post-first-output increment | 802 |
| First / final score | 10 / 65 |
| Corrective prompts | 2 |
| Authorization clarifications | 1 |
| First completed response observed by | 14m 53s, upper bound |
| Final reviewed result | 1h 49m 21s, including harness calibration and investigation |
| Acceptance | Not accepted |

### What worked

The final preview uses normal **Device Procurement** wording and the two business
tables, **Device List** and **Device Requests**. Live catalogue values and
dashboard totals match independently captured Dataverse records. Search,
combined filters, unavailable-device selection, required/quantity/date
validation, requester switching and keyboard operation were exercised.

The final mobile layout was measured and visually checked. At a 390px viewport,
the three required views stay within the viewport and their contained table
scrollers expose stock and approval controls.

### What required guidance

The initial preview's actual Catalogue, New request and Approvals links returned
`Page not found`; My requests had no visible navigation entry. An ordinary
preview reload did not repair it. The first correction restarted the stale
development server; all five routes then worked without source changes.

The second correction repaired a 446px-wide shared header at a 390px viewport.
It also investigated the write failure. A later authorization clarification
resolved a separate pending schema-approval condition and allowed a table-mode
rebind, but did not repair the write path.

### Remaining boundary

A valid request submission still returns:

```text
HTTP 400
Invalid organization URL 'null' provided.
```

Create, approve and reject attempts leave the intended server records unchanged.
The dependent oversell, repeated-decision, persistence and mutated-reset
scenarios therefore remain blocked, rather than being credited from source
claims.

The generated binding exposes organization-aware read operations but uses
current-environment write operations without an organization parameter. The
builder reported policy exclusion of the organization-aware write variants.
The public connector documentation confirms the difference in their parameter
contracts. No tenant policy, role or permission changes were made.

A connection status of **Connected**, successful schema binding, or a clean
type-check is not proof of working application CRUD.

The remaining nine runs are paused until an approved write-capable binding is
established. Repeating the same unresolved backend failure would consume credits
without producing the intended connected-app comparison.

## Guidance for makers

Evaluate cost together with delivered capabilities, corrective effort and
evidence of real persistence. Validate the full read/write path before relying
on a model comparison. Separate setup/authorization boundaries from defects in
the generated application, and preserve both in the record.

There is not enough accepted connected-app evidence here to recommend a
model/effort configuration for the complete requirement.

## Excel restart: pilot blocked, zero measured builds

The requested OneDrive workbook was created with structured **DeviceList** and
**DeviceRequests** tables and the same six-device/four-request seed. The saved
workbook was independently re-read and verified unchanged. This did not establish
an application connection.

| Unmeasured setup metric | Result |
|---|---|
| Pilot model / effort | Sonnet 5 / Medium |
| First / final pilot task credits | 151 / 419 |
| Pilot binding refinements / clarifications | 2 / 2 |
| First completed response observed by | 7m 07s; sampled interval 7m 04s-7m 07s |
| Final reviewed pilot result | 44m 23s, including investigation and checker development |
| App acceptance | 0/100; not accepted |
| Earlier read-only Excel connector preflight | 117 credits, separate from the pilot |
| Measured Excel builds started | **0** |

The effective row-action catalog reported Allow for `GetItems`, `GetItem`,
`AddRowV2`, `PatchItem` and `DeleteItem`. Actual managed-app table binding,
however, returned:

```text
GET /v2/$metadata.json/datasets/{dataset}/tables/{table}
HTTP 403: operation is not on the managed-apps allowlist
```

The app remained an empty private scaffold with no connection references.
No app create/approve/reject/reset workflow was available to test. The
individual workflow checks remain blocked, not passed from workbook setup or
source claims.

One diagnostic initially described an action-mode attempt inaccurately: its
command still used `--as table`. That claim was retracted and retained in the
private audit trail. Later metadata exposed a direct row-operation family, but
standalone action-mode dispatch was not established as supported under the
connector-specific documented flow and was **not executed**. Do not turn that
evidence gap into a tested action-mode failure or a claim that every possible
integration is impossible.

This is a managed-apps schema-operation allowlist response, not evidence that the
Excel row actions were DLP-blocked. The governing platform configuration/owner
was not identified. No admin-center or policy changes were made during the Excel
work.

The user required a working pilot first, then ten consistent builds, with an
optional expansion to **no more than twenty measured builds** if reliably
repeatable. Because the pilot gate failed, no measured prompt was frozen and no
repetition cohort was started. Pilot/preflight costs are setup and are excluded
from both model-comparison totals above.
