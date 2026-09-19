# Benchmark method

This report preserves three original complete cohorts: five virtual-data apps,
ten SharePoint-connected apps and five complex multi-prompt apps. A separate
cost cross-check adds four reviewed virtual observations and five SharePoint
observations. Every measurement shown has an observed final cost and an
accepted final assessment; the methods and sample sizes remain distinct.

## Controls shared within each test

Start a fresh Cowork task and managed app for each run. Select and record the
model and reasoning setting before submitting the same authoring specification.
Keep the starting fixture, requirements and acceptance checks consistent within
the cohort. Record any clarification or corrective prompts separately from
planned changes.

Exercise the actual app independently, including its forms, data operations,
reopening and desktop/mobile layout. A completion message or compile alone is
not acceptance. Evaluate the delivered app against its rubric: at least 85/100
and every required critical check. Unverified checks earn no points.

## Test 1: virtual-data procurement

Five builds: Sonnet 5 Medium twice, and Sonnet 5 High, Opus 5 Medium and Opus 5
High once each. Virtual/local business data is allowed. Managed-store
persistence, AC14 in the original rubric, is not a required acceptance gate for
this test. Recorded 95/100 point totals are retained without adding storage
points.

Each task receives one identical native self-review prompt in addition to
independent external checking. Its final `/cost` therefore includes build and
native review. Do not treat this as the external-only review method of Tests 2
and 3.

Materials: [build prompt](benchmark/build-prompt.txt),
[native review prompt](benchmark/review-prompt.txt),
[original rubric](benchmark/acceptance.json). Apply the virtual-data scope above;
the effective final check requirements are also recorded in `data.json`.

## Test 2: SharePoint-connected procurement

Five configurations are each tested twice, in reverse-order blocks:
Sonnet 5 Medium, Opus 5 High, Opus 5 Medium, Sonnet 5 High and GPT 5.5 Medium.
The app contains Dashboard, Catalogue, New request and My requests.
Approval/rejection, inventory editing and app reset are outside this scope.

All ten builds use the same established demo-tenant SharePoint connection and
two synthetic lists. The starting fixture contains six device models, 25
available units and four requests, including three Pending with GBP 3,800
pending value. Restore and independently verify that fixture between runs.

Acceptance uses ten checks worth ten points each. Each app must read the live
lists, submit a complete Pending request, support independent server read-back,
and retain the request after reopening. The controller reviews the app and
backend externally; no native self-review prompt is submitted. Clarification
and corrective prompts are each limited to two per run and are counted.

Materials: [build prompt template](benchmark/test-02-sharepoint-clean/build-prompt-template.txt),
[acceptance rubric](benchmark/test-02-sharepoint-clean/acceptance.json).
The public template uses placeholders rather than private connection values.

## Test 3: complex multi-prompt virtual-data app

Five corporate-tenant apps, with one observation per configuration:
Sonnet 5 Medium, Opus 5 High, Opus 5 Medium, Sonnet 5 High and GPT 5.5 Medium.
Every app receives four identical ordered prompts:

1. [Build the foundation](benchmark/test-03/stage-01-build.txt): related virtual
   business tables, multiple screens and forms.
2. [Connect the existing app](benchmark/test-03/stage-02-connect-profile.txt):
   real read-only Office 365 Users profile and a profile page.
3. [Extend workflows](benchmark/test-03/stage-03-change.txt): virtual approvals,
   asset lifecycle, themes and preferences.
4. [Change requirements](benchmark/test-03/stage-04-change.txt): approval policy,
   revisions, cost centres and responsive refinement.

Business data and approval actors remain synthetic and virtual/local.
Only the signed-in user's profile is live; synthetic personas do not replace
that identity. Independently verify the profile response and displayed fields
inside the app, including after reopening.

Use the same twenty-check rubric, with five points per check. Final scoring
covers the complete four-stage target. Verify data continuity across the planned
changes, approval thresholds, required comments, stock-constrained fulfilment,
returns, themes, preferences, desktop/mobile layouts and sampled contrast.

Review is external-only. Three planned follow-up prompts per app are not
corrections or self-reviews. Count any additional clarification or corrective
guidance separately and retain it in the final task cost.

Materials: [protocol](benchmark/test-03/protocol.json),
[rubric](benchmark/test-03/acceptance.json),
[policy carryover case](benchmark/test-03/policy-carryover-case.json),
[low-stock crossing case](benchmark/test-03/low-stock-crossing-case.json).

## Additional external-review cost cross-check

The additional virtual sample contains one observation each for Sonnet Medium,
Opus High, Sonnet High and GPT Medium. The connected sample contains those four
settings plus Opus Medium. All nine use independent external review, zero native
self-review prompts, and at most two narrowly evidenced corrections or two
clarifications. No configuration mean is represented as a repeatability estimate.

The virtual business specification includes approvals/rejections, stock
transitions, oversell prevention, confirmed reset and explicitly allowed
browser-local persistence. The same twenty checks are applied within this
sample, including actual reload/reopen persistence. Its recorded 100/100 scores
do not retrospectively increase the original Test 1 scores.

The connected business scope is the same four-view app as original Test 2.
Restore the exact six-device/four-request fixture before each build, save one
complete Pending request, independently read it back and reopen it. Invalid
submissions must leave every backend row unchanged. Desktop and actual 390px
mobile controls and contained table scrolling are exercised. BC09 remains
unverified and receives no points.

The virtual observations span two frozen prompt versions: `virtual-v1` for
Sonnet Medium/Opus High and `virtual-v2` for Sonnet High/GPT Medium. Their business
requirements are identical; version 2 explicitly permits private owner-only
publication. All five additional connected builds use the same
`sharepoint-v2` prompt with that permission. Current completed-result acceptance
allows private publication, not sharing. Preserve original prompt identities
and historical evidence rather than rewriting the earlier protocol.

Final review, actual final cost and the conversation archive are retained before
user-authorized deletion of an exact published app. Only the controller's owned
synthetic SharePoint request is then removed; original fixture rows, lists and
connections are preserved. Cleanup is not a billed Cowork prompt.

Raw additional means are **1,530 / 4 = 382.5** virtual and
**3,612 / 5 = 722.4** SharePoint credits. The equal-model-mix comparison uses one
observation for each of the four common settings: **382.5 versus 692.5**.
It excludes the SharePoint-only Opus Medium value from the matched mean, not
from its published results. Different business scope and publication permissions
still prevent treating the difference as an isolated connector price.

## Cost and timing

Record the actual native `/cost` card after authoring checkpoints and at the
end of each task. The reported unit is credits and the confirmed scope is the
Cowork task. Preserve the observed numbers rather than estimating token prices
or substituting another product's billing.

All stage readings are cumulative. The **final reading is the task total**;
do not add earlier readings to it. Final costs include any guidance and, for
original Test 1, native review. Shared setup and app runtime are not included in these
build-task totals. Do not infer a currency conversion or a complete tenant bill.

The headline **average final credits per app** is the arithmetic mean of all
final task readings in the selected original cohort: 3,219 / 5 = 643.8 for Test 1,
4,580 / 10 = 458 for Test 2, and 9,990 / 5 = 1,998 for Test 3. Each build receives
equal weight, including repeated settings. This describes the observed
model/reasoning mix, not a single model's price. Per-configuration averages use
only that configuration's builds; individual readings remain visible.

Reported **build time per app** sums the recorded authoring turns: initial build,
planned updates, clarifications and corrections. Match each prompt submission
to its completion observation by prompt identifier. Use the first observed idle
timestamp, before the monitor's additional idle-confirmation wait. Where a last
busy sample exists, it supplies the lower bound; the displayed time uses the
first-idle upper endpoint, rounded to seconds.

This excludes external review, screenshot-taking gaps, time between prompts,
`/cost` commands and native self-review. Both an initial clarification question
and the response to its answer are included, but time waiting for the answer
between turns is not. Waits within an authoring turn remain included, so this is
an approximate observed authoring duration, not pure model compute time.

All authoring prompts must have completion observations to report a build total.
Missing or partial coverage remains unavailable, never zero or a substitute
test-session elapsed time. Original Test 1 lacks build-completion timing.
Original Tests 2 and 3 and the additional observations have complete authoring
coverage; the bounds and counts are in
`data.json` under each run's `timing.build`.

## Interpretation and evidence

Compare configurations within the same test. Different scope, backend and
review method prevent treating cross-test differences as the isolated cost of
a model or connector. Original Test 2 has two observations per setting and one
additional observation per setting under amended publication permission;
the published original Test 3 cohort has one.
These sample sizes do not establish reliable variance, success rates or future
prices. Order, caching, service load and internal builder routing may influence
the observations.

Acceptance is not full coverage or production readiness. The report retains
the exact final scores and capability gaps, including unverified profile
fault/Retry coverage in Test 3 and connection-error/no-fallback coverage in
Test 2. Synthetic personas and sequential stock checks do not establish real
authorization or concurrent safety.

Exact prompts, visible outputs, screenshots, checks and cost observations are
retained privately. Public exports contain completed measurements and safe
benchmark materials, not credentials, account-bearing screenshots, tenant or
connection identifiers, or private app/task links.
