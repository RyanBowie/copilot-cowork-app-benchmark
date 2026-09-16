# Method

## Question and scope

How much observed Cowork task consumption and maker guidance does it take to
produce the same working device-procurement application under different model
and effort selections?

This measures **Copilot Cowork managed-app authoring**. It does not infer Copilot
Studio consumption from Cowork, substitute Copilot CLI billing, or establish a
universal ranking of underlying language models.

Model and effort labels were read from the signed-in Cowork UI in September 2026.
The selected model is not proof of every internal worker's routing.

## Controlled business task

Each measured run uses a fresh task and app, with the same exact prompt within
its experiment. The prompt fixes the synthetic seed, personas, business rules,
private-preview scope and expected views. The review prompt is also identical.

Twenty checks cover catalogue data, search, filtering, unavailable stock,
dashboard arithmetic, request creation, validation, approval, rejection reasons,
sequential stock safety, repeated decisions, persistence, requester scoping,
reset, keyboard interaction, mobile usability, honest errors and the private
managed-app entry point.

Each check earns five points only on an evidenced pass. Missing or blocked
checks earn no points. **85/100 plus every critical check passing** is required.
Source-inspection claims alone do not establish live behavior.

Use desktop dimensions of 1440x1000 and a 390x844 app viewport for mobile checks.
Contained, operable table scrolling is allowed; page-wide overflow is not.

## Test 1

The five-run pilot used:

| Order | Selected model | Effort |
|---|---|---|
| 1 | Sonnet 5 | Medium |
| 2 | Opus 5 | High |
| 3 | Opus 5 | Medium |
| 4 | Sonnet 5 | High |
| 5 | Sonnet 5 | Medium |

No existing external backing store was supplied. The prompt still required
managed persistence. All five ultimately used browser-local persistence and
failed that critical requirement.

Recorded amendment A01 permitted symptom-only corrections for independently
observed UI issues after reaching the storage-provisioning boundary, within the
original two-correction limit. It did not waive the persistence failure.

The pilot's active-generation ceiling was not instrumented reliably. Its
historical wall time includes recovery and adapter work; no model-speed ranking
is made from it.

## Test 2

Five conditions are planned twice each:

| Block 1 | Block 2, reverse order |
|---|---|
| Sonnet 5 / Medium | GPT 5.5 / Medium |
| Opus 5 / High | Sonnet 5 / High |
| Opus 5 / Medium | Opus 5 / Medium |
| Sonnet 5 / High | Opus 5 / High |
| GPT 5.5 / Medium | Sonnet 5 / Medium |

The two Dataverse tables were deployed through an unmanaged PAC solution,
seeded and independently checked before the first measured submission.
Business-facing names are **Device List** and **Device Requests**. Existing
technical names and record IDs were preserved when labels were normalized.
The internal dataset-isolation key is not displayed in the application.

Run sequentially against the same tables. Archive server state and restore the
exact seed between runs. Refuse foreign records, ambiguous business keys or
concurrent changes. Generated apps must not seed or reset on startup.

The first measured business build also established the live connection path
after a superseded diagnostic was stopped. A successful warm-connection
preflight was **not** claimed. The potentially cold first connection and
subsequent reuse are disclosed order effects.

The frozen business prompt SHA-256 is:

`7a07d2613bbcf49a16af45d1c2abac48dc096fb919f8cf19c9bcf568dc08df27`

The frozen base protocol SHA-256 is:

`2d19326bc7bf728eedf7b8dbb41d767eced752679ff461027d8ce47688525048`

Post-start instrumentation amendments are separate from the unchanged prompt
and base protocol:

- **T2-A01:** capture observed completion times, added while run-01 was building.
- **T2-A02:** immediately acknowledge only the exact, already-authorized single
  schema-read widgets for the two named tables. Every approval is retained.
  Other operations and changed/multiple approval payloads still stop for review.

The latter followed a diagnostic timeout and a retry reporting that another
approval was pending. That particular 403 was not evidence of tenant-admin OAuth
consent being required.

## Review, guidance and stop rules

Capture first-output cost before the standardized read-only review. Independently
exercise the actual preview and verify server records after mutations and reload.
An adapter error is a blocked check, not an inferred application defect.

Allow at most two symptom-only corrective prompts and two clarification replies.
Corrections identify observed failed checks and symptoms, not a supplied
implementation. Authorization clarifications reiterate the existing scope; they
remain visible in guidance counts.

Stop at verified acceptance, the correction limit, or an authorization/platform
boundary. Keep failed attempts and unavailable measurements in the data.
Pause subsequent measured builds for an unresolved common backend boundary
rather than repeatedly charging for the same setup failure.

The first Test 2 run reached the correction limit with working reads but failing
writes. The remaining nine runs are paused, not silently treated as zero-cost
builds or omitted successes.

## Cost semantics

The observed `/cost` skill states **credits used for this task**. Capture that
card immediately, including its text and screenshot. Exclude the separate
monthly aggregate.

Readings are cumulative. Final includes the standardized review, corrections
and clarifications; do not add first and final readings together. Their
difference is post-first-output consumption, not necessarily correction-only
consumption.

Credits are not currency or a tenant invoice. App runtime, storage, connector,
deployment and orchestration costs are not all measured here. A currency
conversion would require a documented rate, date, purchasing model and currency.

Retired setup consumption is separate: 143 credits for the wrong-tenant
SharePoint preflight and 238 for the superseded Dataverse diagnostic.

## Time semantics

Times start at the recorded build-submitted event:

- **First build response:** first observed completion of the build response,
  after foreground/background generation remains idle for five seconds.
  This can still be a failed or incomplete application.
- **Final reviewed result:** completion of the external assessment and final
  cost capture.
- **Acceptance time:** final-result duration only when the full acceptance
  gate passes.

Observed approval waits and explicitly recorded operator interruptions are
retained within wall-clock totals. They are not subtracted to manufacture
active-model execution time.

Polling and observation gaps matter. An observed completion without a sampled
busy-to-idle transition is an upper bound and marked `<=` in the report. Missing
endpoints remain unavailable, not zero.

Run-01 includes first-run instrumentation, acceptance-adapter calibration and
connector investigation. Its final reviewed-result duration is not directly
comparable to pure generation time or a promised maker completion time.

## Limits and sources

Two repeats per condition are not a reliable variance estimate. Fixed order,
caching, connection reuse, service load, unchanged personal instructions and
internal routing remain potential influences. Sequential oversell checks do
not prove simultaneous-user safety or cross-table atomicity.

Test 1 and Test 2 differ in backend availability and evaluation evidence.
Their cost difference is not an isolated estimate of Dataverse's price.

- [Managed-app launch article](https://www.microsoft.com/en-us/microsoft-copilot/blog/copilot-studio/build-apps-in-copilot-cowork-and-copilot-studio/)
- [Microsoft Dataverse connector reference](https://learn.microsoft.com/en-us/connectors/commondataserviceforapps/)
- [Dataverse date/time behavior](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/behavior-format-date-time-attribute)

The product UI and retained raw cost cards establish the measured consumption.
Documentation establishes supported concepts/contracts, not the actual results
of these application runs.
