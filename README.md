# Copilot Cowork managed-app benchmark

**29 completed app measurements:** the original 20 apps across three tests,
plus nine additional external-review observations for Tests 1 and 2. Compare
selected models, reasoning settings, final capabilities, guidance and actual
Cowork `/cost` readings without silently combining different methods.

**[Open the interactive report](https://ryanbowie.github.io/copilot-cowork-app-benchmark/)** |
[Findings](FINDINGS.md) | [Method](METHOD.md) | [Measurement data](data.json)

The main page opens with an **overview of all three tests**: short app/test
descriptions, average credits per app, compact charts of configuration averages
and links to each detailed result. The charts use a shared credit scale and show
how many builds contribute to each configuration; the test scopes remain separate.

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

Both additional samples use **zero native self-review prompts**. For the
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

## What was built and tested

**Test 1:** A device catalogue and procurement app with request forms, approver
decisions, a dashboard and virtual stock. Checks cover search/filtering,
validation, approval/rejection, stock and GBP calculations, saved changes after
reopening and desktop/mobile layouts. Each task includes one native self-review.

**Test 2:** A four-view procurement app reading devices and saving requests to
two SharePoint lists. Checks cover live reads, forms, calculated totals, exactly
one saved Pending request, independent server read-back and reopening. The same
six-device/four-request fixture is used for all ten builds; approvals and stock
editing are outside scope. Review is external-only.

**Test 3:** A seven-screen Device Lifecycle Hub with multi-line requests, virtual
manager/finance approvals, asset fulfilment/returns, themes, preferences and a
live read-only Office 365 Users profile. Four planned prompts build, connect,
extend and change the same app. External checks cover data continuity, approval
policy, stock-safe workflows, profile identity and desktop/mobile usability.

## Reading the results

Compare configurations **within a test**. Each test holds its own specification
and review criteria constant, but the three scopes are different. Original
Test 1 includes native self-review; Tests 2 and 3 and both additional samples
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
**GPT 5.5 / Medium** recorded 944 credits and 90/100, with one clarification and
no corrective prompts. Both Opus configurations reached 95/100 in Test 3.
These are observations for the tested scopes, not universal model rankings.

Acceptance requires at least 85/100 and every required critical check. The
[final capability coverage](FINDINGS.md#complex-app-cost-capability-and-maker-guidance)
explains what the scores include; acceptance does not imply full coverage or
production readiness.

## Evidence and privacy

Prompts, visible outputs, screenshots, app checks and cost observations are
retained privately. This repository publishes the completed measurements,
safe benchmark materials and the report, without account-bearing screenshots,
credentials, tenant identifiers, connection identifiers or private app links.

Measured in September 2026. This is an independent empirical report, not a
Microsoft pricing commitment.
