# Benchmark method

This report presents three complete cohorts: five virtual-data apps, ten
SharePoint-connected apps and five complex multi-prompt apps. Every enumerated
run in those cohorts has an observed final cost and an accepted final assessment.

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

## Cost and timing

Record the actual native `/cost` card after authoring checkpoints and at the
end of each task. The reported unit is credits and the confirmed scope is the
Cowork task. Preserve the observed numbers rather than estimating token prices
or substituting another product's billing.

All stage readings are cumulative. The **final reading is the task total**;
do not add earlier readings to it. Final costs include any guidance and, for
Test 1, native review. Shared setup and app runtime are not included in these
build-task totals. Do not infer a currency conversion or a complete tenant bill.

The headline **average final credits per app** is the arithmetic mean of all
final task readings in the selected test: 3,219 / 5 = 643.8 for Test 1,
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
test-session elapsed time. Test 1 lacks build-completion timing. Tests 2 and 3
have complete authoring coverage; the bounds and counts are in
`data.json` under each run's `timing.build`.

## Interpretation and evidence

Compare configurations within the same test. Different scope, backend and
review method prevent treating cross-test differences as the isolated cost of
a model or connector. Test 2 has two observations per setting; Test 3 has one.
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
