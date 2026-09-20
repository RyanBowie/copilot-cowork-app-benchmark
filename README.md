# Copilot Cowork managed-app benchmark

**33 completed app measurements across four test scopes:** the original 20 apps,
plus nine additional external-review observations for Tests 1 and 2 and three
additional complex-app observations for Test 3, plus one separately scored
capability-stress observation for Test 4. Compare
selected models, reasoning settings, final capabilities, guidance and actual
Cowork `/cost` readings without silently combining different methods.

**[Open the interactive report](https://ryanbowie.github.io/copilot-cowork-app-benchmark/)** |
[Findings](FINDINGS.md) | [Method](METHOD.md) | [Measurement data](data.json)

The main page opens with an **overview of all four tests**: short app/test
descriptions, average credits per app, compact charts of configuration averages
and links to each detailed result. The charts use a shared credit scale and show
how many builds contribute to each configuration; the test scopes remain separate.

**Did higher cost buy better apps? Not consistently.** Tests 1 and 2 showed
the same verified capability coverage within their respective cohorts.
Test 3 sometimes gained fuller preferences and sampled accessibility, but High
reasoning did not consistently improve on Medium. Each test page now compares
every published model/effort setting's costs, corrections and actual feature
coverage, with separate original and additional observations.
Test 4 adds a concrete within-app improvement from corrective guidance, but
its single accepted observation cannot establish a cross-model advantage.
[Read the capability-versus-cost interpretation](FINDINGS.md#did-higher-cost-buy-better-apps).

**Maker decision: start lower-cost, verify, then escalate for a demonstrated
benefit.** Original Test 2 Sonnet Medium used **650 fewer mean credits/app
(74.1% lower)** than Opus High with the same verified 90-point check set,
across two builds per setting. Original Test 3 Opus Medium used **715 fewer
credits (23.3% lower)** than High with the same 95-point check set, but needed
two corrections rather than one; that comparison has one build per setting.
These are observed credit differences, **not guaranteed future or cash savings**.

GPT Medium reached Test 4's core target and nine advanced checks at **1,573
credits**, including one correction. This makes it a credible starting point
for similar complex apps, not proof it is the only capable model. All registered
settings faced the same target, acceptance criteria and planned limits;
higher cost neither excused requirements nor itself triggered a stop.
Test 4's single accepted result cannot establish a five-way model ranking or
a cross-model saving. Opus's fuller preferences and sampled accessibility in
Test 3 remain reasons to consider higher spending when those features matter.
[Model-selection guidance and comparison limits](FINDINGS.md#choosing-a-model-without-paying-for-unneeded-capability).

### Original cohorts

| Test | App scope | Accepted apps | Average final credits / app | Final scores |
|---|---|---:|---:|---|
| [Test 1](https://ryanbowie.github.io/copilot-cowork-app-benchmark/#test-01) | Virtual-data device procurement | 5 / 5 | 643.8 | 95/100 |
| [Test 2](https://ryanbowie.github.io/copilot-cowork-app-benchmark/#test-02) | SharePoint-connected procurement | 10 / 10 | 458 | 90/100 |
| [Test 3](https://ryanbowie.github.io/copilot-cowork-app-benchmark/#test-03) | Complex multi-screen, multi-form app with virtual approvals and a real read-only profile | 5 / 5 | 1,998 | 90-95/100 |

### Additional external-review measurements

| Sample | Reviewed apps shown | Average final credits / app | Final scores |
|---|---:|---:|---|
| Test 1: virtual data | 4 | 382.5 | 100/100 |
| Test 2: SharePoint | 5 | 722.4 | 90/100 |
| Test 3: complex virtual apps | 3 | 1,855.7 | 85-95/100 |

All additional samples use **zero native self-review prompts**. For the
**same four model/effort settings**, the means are **382.5 virtual versus
692.5 SharePoint credits**. The five-app SharePoint mean also includes Opus
Medium; the four-app virtual sample does not. Individual readings, guidance,
timings and prompt versions appear below the original cards and in each test.

This controls the model mix, not the app scope: virtual approvals/stock changes
and connected request tracking remain different applications. Publication
permission also differs between prompt versions. The new virtual method
explicitly scores verified local persistence; historical 95-point scores are
unchanged. See the [additional findings](FINDINGS.md#additional-external-review-measurements)
before comparing averages.

The additional corporate **Test 3** results are **GPT 5.5 Medium: 573**,
**Sonnet 5 High: 2,134**, and **Opus 5 High: 2,860** credits. Comparing exactly
those same three settings gives an original mean of **2,102** versus an
additional mean of **1,855.7**; the descriptive mean across their six observations
is **1,978.8**. The original five-setting mean remains **1,998**. Keep these
denominators distinct rather than interpreting a changed model mix as a price
change. [Cost pairs and capability differences](FINDINGS.md#additional-test-3-complex-apps)
are shown separately in the report.

### Test 4: capability stress

**All five settings are now visible in the chart and testing-status table.**
Four separately registered follow-ups cover Sonnet Medium, Opus High, Opus
Medium and Sonnet High using the identical original prompts, fixtures and
core/advanced checks. Each will undergo independent review, not assessment by
an extra Cowork prompt. Until a final reading and review are available, their
rows show testing/queued status rather than an invented cost or zero score.
The original GPT result remains unchanged. Follow-up provenance is explicit;
only accepted completed apps contribute to the accepted-app average.

The Sonnet Medium follow-up has a final **1,992-credit spend-only reading**,
not a cost to an accepted app or a completed-target capability score. Opus
High is being tested; Opus Medium and Sonnet High remain queued. The accepted
Test 4 average remains **1,573 credits**, from the single accepted GPT result.

An eight-area Device Allocation and Policy Hub exercises interacting money,
policy, budget, inventory and stale-state rules through four planned prompts.
Business data and actors are synthetic; there is no live connector.

| Configuration | First-target credits | First core / advanced | Final credits | Final core / advanced | Corrections |
|---|---:|---:|---:|---:|---:|
| GPT 5.5 / Medium | 1,095 | 100 / 80 | 1,573 | 100 / 90 | 1 |

The average is **1,573 credits across one accepted app**, not a multi-model mean.
One later correction added **478 observed credits** and improved repeated-submit
safety, Escape focus return and Requester field naming. Nine of ten complete
advanced scenarios were verified. The exact request-search/rejection-dialog
scenario remains a coverage gap, not an automatic claim of a remaining defect.
There were no early corrections, clarifications or native self-review prompts.

[Detailed stress findings](FINDINGS.md#test-4-capability-stress) |
[Interactive first/final comparison](https://ryanbowie.github.io/copilot-cowork-app-benchmark/#test-04)

## What was built and tested

| Test | Functional complexity | Business-data integration | Planned authoring |
|---|---|---|---|
| Test 1 | Moderate procurement demo; five core views, single-device requests, one approval step, stock changes and reset | Virtual/local synthetic data | One initial build specification |
| Test 2 | Focused connected request app; four views, single-device requests, no approvals or stock editing | Two real SharePoint lists, with live reads/writes and independent read-back | One initial build specification |
| Test 3 | Complex workflow prototype; seven screens, multi-line requests, staged approvals and asset lifecycle | Seven related virtual business tables; real read-only Office 365 Users profile | Four planned stages on the same app |
| Test 4 | Eight areas; versioned policy, exact-pence pricing, budget reservations, partial fulfilment, stale views and atomic imports | Related synthetic virtual/local tables; no live connector | Four planned stages on the same app |

These are qualitative scope descriptions, not numerical complexity scores.
Corrective guidance is counted separately; original Test 1 also includes a
native self-review. Per-run capability verdicts show actual coverage, rather
than assuming every requested feature passed.

**Test 1:** A device catalogue and procurement app with request forms, approver
decisions, a dashboard and virtual stock. Checks cover search/filtering,
validation, approval/rejection, stock and GBP calculations, saved changes after
reopening and desktop/mobile layouts. The original cohort includes one native
self-review per task; additional observations use external-only review.

**Test 2:** A four-view procurement app reading devices and saving requests to
two SharePoint lists. Checks cover live reads, forms, calculated totals, exactly
one saved Pending request, independent server read-back and reopening. The same
six-device/four-request fixture is used for all ten builds; approvals and stock
editing are outside scope. Review is external-only.

**Test 3:** A seven-screen Device Lifecycle Hub with multi-line requests, virtual
manager/finance approvals, asset fulfilment/returns, themes, preferences and a
live read-only Office 365 Users profile. Four planned prompts build, connect,
extend and change the same app while preserving saved records and relationships.
External checks cover changing approval thresholds without rewriting existing
decisions, revisions/resubmission/cancellation, stock-safe fulfilment, per-unit
assets, Good/Damaged returns, profile identity and desktop/mobile usability.

**Test 3 is more complex in screens, business rules and change management;
Test 2 exercises real business-backend integration.** The lifecycle app remains
a prototype, with simulated approvals and personas. It does not establish
production authorization, concurrent inventory safety or live procurement
transactions. Its real profile read is not equivalent to Test 2's SharePoint
request writes, so cross-test costs do not isolate a connector premium.

**Test 4 targets harder interacting business rules and deliberate conflicting
updates.** It is not a superset of Test 3: it has no live profile or asset-return
workflow. Core acceptance and advanced coverage are separate ten-check
scorecards; their scores are not interchangeable with Test 3's rubric.

## Reading the results

Compare configurations **within a test**. Each test holds its own specification
and review criteria constant, but the four scopes are different. Original
Test 1 includes native self-review; Tests 2-4 and all additional samples
use external-only review. Original and additional averages remain separate.

The headline average is the sum of final task credits divided by completed apps
in that test, weighted by the observed builds across its model/reasoning mix.
It is not a model-specific price quote. Individual build costs and averages for
each configuration remain available in the report.

Build times are shown per app alongside its cost. They sum recorded authoring
turns, including planned changes and corrective/clarification responses, while
excluding external review and screenshot-taking gaps between prompts. These are
approximate observations, not pure model compute time. Build timing is available
for original Tests 2 and 3 and all additional observations; it was not captured
for original Test 1.

Final task credits include the authoring and guidance used to reach the accepted
result. `/cost` readings are cumulative: stage readings are not added together.
Credits are observed task consumption, not a currency price or a complete
deployment/runtime bill.

For the original SharePoint cohort, **Sonnet 5 / Medium** recorded 224 and 230
credits; its additional observation used 301. All three reached 90/100 without
corrective prompts, but the publication-permission difference remains labelled.
For the complex app,
**GPT 5.5 / Medium** recorded 944 credits and 90/100 originally, and 573 credits
and 85/100 in the additional observation. The lower-cost result has different
coverage gaps, not an identical quality score. Opus High reached 95/100 in
both its original and additional observations.
These are observations for the tested scopes, not universal model rankings.

Acceptance requires at least 85/100 and every required critical check. The
[final capability coverage](FINDINGS.md#complex-app-cost-capability-and-maker-guidance)
explains what the scores include; acceptance does not imply full coverage or
production readiness.
Test 4 uses ten-point core checks, so its effective accepted minimum is 90
with all critical checks. Its separate advanced score is not an acceptance gate.

## Evidence and privacy

Prompts, visible outputs, screenshots, app checks and cost observations are
retained privately. This repository publishes the completed measurements,
safe benchmark materials and the report, without account-bearing screenshots,
credentials, tenant identifiers, connection identifiers or private app links.

Measured in September 2026. This is an independent empirical report, not a
Microsoft pricing commitment.
