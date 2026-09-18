# Copilot Cowork managed-app benchmark

**20 completed apps across three controlled tests**, comparing selected models,
reasoning settings, final capability scores, additional guidance and actual
Cowork `/cost` readings.

**[Open the interactive report](https://ryanbowie.github.io/copilot-cowork-app-benchmark/)** |
[Findings](FINDINGS.md) | [Method](METHOD.md) | [Measurement data](data.json)

| Test | App scope | Accepted apps | Average final credits / app | Final scores |
|---|---|---:|---:|---|
| [Test 1](https://ryanbowie.github.io/copilot-cowork-app-benchmark/#test-01) | Virtual-data device procurement | 5 / 5 | 643.8 | 95/100 |
| [Test 2](https://ryanbowie.github.io/copilot-cowork-app-benchmark/#test-02) | SharePoint-connected procurement | 10 / 10 | 458 | 90/100 |
| [Test 3](https://ryanbowie.github.io/copilot-cowork-app-benchmark/#test-03) | Complex multi-screen, multi-form app with virtual approvals and a real read-only profile | 5 / 5 | 1,998 | 90-95/100 |

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
and review criteria constant, but the three scopes are different. Test 1 includes
native self-review; Tests 2 and 3 use external-only review.

The headline average is the sum of final task credits divided by completed apps
in that test, weighted by the observed builds across its model/reasoning mix.
It is not a model-specific price quote. Individual build costs and averages for
each configuration remain available in the report.

Build times are shown per app alongside its cost. They sum recorded authoring
turns, including planned changes and corrective/clarification responses, while
excluding external review and screenshot-taking gaps between prompts. These are
approximate observations, not pure model compute time. Build timing is available
for Tests 2 and 3; it was not captured for Test 1.

Final task credits include the authoring and guidance used to reach the accepted
result. `/cost` readings are cumulative: stage readings are not added together.
Credits are observed task consumption, not a currency price or a complete
deployment/runtime bill.

For the SharePoint app, **Sonnet 5 / Medium** recorded 224 and 230 credits, with
90/100 and no corrective prompts in either build. For the complex app,
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
