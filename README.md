# Copilot Cowork managed-app benchmark

**20 completed apps across three controlled tests**, comparing selected models,
reasoning settings, final capability scores, additional guidance and actual
Cowork `/cost` readings.

**[Open the interactive report](https://ryanbowie.github.io/copilot-cowork-app-benchmark/)** |
[Findings](FINDINGS.md) | [Method](METHOD.md) | [Measurement data](data.json)

| Test | App scope | Accepted apps | Final task credits | Final scores |
|---|---|---:|---:|---|
| [Test 1](https://ryanbowie.github.io/copilot-cowork-app-benchmark/#test-01) | Virtual-data device procurement | 5 / 5 | 3,219 | 95/100 |
| [Test 2](https://ryanbowie.github.io/copilot-cowork-app-benchmark/#test-02) | SharePoint-connected procurement | 10 / 10 | 4,580 | 90/100 |
| [Test 3](https://ryanbowie.github.io/copilot-cowork-app-benchmark/#test-03) | Complex multi-screen, multi-form app with virtual approvals and a real read-only profile | 5 / 5 | 9,990 | 90-95/100 |

## Reading the results

Compare configurations **within a test**. Each test holds its own specification
and review criteria constant, but the three scopes are different. Test 1 includes
native self-review; Tests 2 and 3 use external-only review.

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
