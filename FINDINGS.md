# Completed benchmark findings

The 20 original apps in Tests 1-3 and twelve additional reviewed observations meet
their final scoring and critical-check gates. Costs below are observed
cumulative Cowork task credits. Keep original and additional samples distinct;
app scope, model mix, review method and publication permission affect comparison.

**Read the costs against the workload:** Test 1 is a moderate virtual procurement
demo with approvals and stock changes; Test 2 is a narrower four-view app with
real SharePoint reads/writes; Test 3 is a seven-screen, multi-line workflow
prototype evolved through four planned stages. Test 3 adds linked virtual
tables, manager/finance routing, revisions, fulfilment/returns, themes and
preferences, but only its read-only profile is live. Its greater workflow
complexity is not a claim of greater production readiness or live business
integration. See the [scope comparison](README.md#what-was-built-and-tested)
and [complexity method](METHOD.md#comparing-app-complexity).

## Did higher cost buy better apps?

**Not consistently.** The simpler scopes showed no broader verified feature
coverage with higher spending. Complex apps showed some specific gains, but
not a universally better core application or a consistent benefit from High
reasoning. These are findings about the completed apps shown, not success-rate
estimates or a universal model ranking.

| Scope | Cost comparison within the same cohort | What the additional spend demonstrated |
|---|---|---|
| Original Test 1 | Sonnet Medium mean 357 vs Opus Medium 1,083 credits; both 95/100 | Same awarded coverage; no broader measured capability |
| Additional Test 1 | Sonnet Medium 215 vs Opus High 826 credits; both 100/100 | Same verified procurement checks |
| Original Test 2 | Sonnet Medium mean 227 vs Opus High mean 877 credits; both 90/100 | Same live read/write, validation, server read-back and reopen checks |
| Additional Test 2 | Sonnet Medium 301 vs Opus High 1,130 credits; both 90/100 | No extra scored capability; connection-error coverage still unverified |
| Additional Test 3 | GPT Medium 573/85 vs Opus High 2,860/95 | 2,287 extra credits for fuller preferences and sampled accessibility coverage, not a different core approval/asset workflow |

Test 1's original 95 and additional 100 scores use different
persistence-scoring/review methods: **that is not a model improvement**.
Equal checklist coverage also does not establish identical visual polish,
code quality or reliability beyond the measured scope.

### Complex-app differences by model and reasoning

| Selected configuration | Original credits / score | Additional credits / score | Verified strengths and limits |
|---|---:|---:|---|
| GPT 5.5 / Medium | 944 / 90 | 573 / 85 | Core workflows and cost-centre handling verified. Original meaningful density worked; additional meaningful density was not demonstrated. Default-department consumption remained incomplete; additional sampled light error contrast was below target. Save/Cancel and preference persistence worked. |
| Sonnet 5 / Medium | 1,326 / 90 | No published observation | Full preference check verified, but cost-centre handling was not met. |
| Sonnet 5 / High | 2,289 / 90 | 2,134 / 85 | Cost-centre handling verified. Additional meaningful density changed rows by 4px, but default-department consumption remained unverified and sampled light error contrast was below target. |
| Opus 5 / Medium | 2,358 / 95 | No published observation | Full preference, cost-centre and sampled accessibility checks verified. |
| Opus 5 / High | 3,073 / 95 | 2,860 / 95 | The same full checks verified. Additional density changed rows by 8px; the saved department was actually used by Approvals and all-requests filters. |

All complex apps retained unverified profile fault/Retry coverage. The
additional GPT and Sonnet High apps scored the same 85, but Sonnet had a real
density effect: **equal scores did not mean identical functionality**.
All accepted apps already passed the critical workflow gates.

**Did High reasoning help?** In original Test 3, Opus High cost **715 more**
than Opus Medium for the same 95-point check set, although it needed one
correction rather than two. Sonnet High cost **963 more** than Medium at the
same 90-point score, exchanging strengths: High verified cost-centre handling;
Medium verified the full preference check. In Tests 1 and 2, High added no
verified checks within either cohort. It was not always more expensive:
original Test 1 Opus High cost 191 fewer credits than Opus Medium.

**Did additional builds improve?** They were fresh apps, not later versions
of one app. GPT fell from 944 to 573 credits but from 90 to 85 points; Sonnet
High fell from 2,289 to 2,134 credits but from 90 to 85 points. Opus High fell
from 3,073 to 2,860 credits with the same 95-point coverage. Lower observed
spending did not itself mean a better app, and changed publication permission
prevents treating these differences as an isolated model-price effect.

**Did further work improve an individual app?** Yes: the additional accepted
Opus High app used **429 credits after its last planned stage** for a final
mobile-layout refinement, finishing at 95/100 while retaining business state.
This is a concrete usability improvement from corrective work, not a general
repair tariff or proof that the model premium caused that improvement.

**Maker takeaway:** start with the lower-cost settings for the simpler tested
scopes. For complex apps, pay attention to the particular capability you need:
the Opus results showed broader preference/accessibility coverage, but High
was not consistently better than Medium. Independently exercise the real
workflow and settings rather than assuming higher spend guarantees quality.

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
The original cohort has one observation per setting; the additional pairs
below extend three settings. Neither establishes a universal best model.

Build time includes every planned authoring stage and additional clarification
or correction response. It excludes external review, screenshot-taking gaps,
time between prompts, `/cost` commands and native self-review. For example,
GPT Medium's **21m 43s** includes both its initial response and clarification,
plus all three planned follow-ups, rather than treating its first reply as
the complete app. Within-turn waits and observation uncertainty remain included.

## Additional external-review measurements

The additional samples retain the original results above and use **no native
self-review prompts**. Every value below is a completed app's final cumulative
task reading, including its recorded corrections. There are zero clarification
prompts in these twelve additional observations.

### Additional Test 1: virtual procurement

| Configuration | Final credits | Score | Corrections | Build time, approx. | Prompt |
|---|---:|---:|---:|---:|---|
| Sonnet 5 / Medium | 215 | 100/100 | 0 | 9m 52s | virtual-v1 |
| Opus 5 / High | 826 | 100/100 | 1 | 15m 01s | virtual-v1 |
| Sonnet 5 / High | 220 | 100/100 | 0 | 11m 13s | virtual-v2 |
| GPT 5.5 / Medium | 269 | 100/100 | 1 | 9m 05s | virtual-v2 |
| **Total / mean** | **1,530 / 382.5** | **4 reviewed apps** | **2** | | |

The four shown settings each have one additional observation. The new method
explicitly verifies and scores local persistence, alongside approvals,
rejections, stock safety and reset. Original 95/100 scores and paid-review costs
remain unchanged. The two prompt versions differ only in private owner-only
publication permission; keep that difference visible.

### Additional Test 2: SharePoint procurement

| Configuration | Final credits | Score | Corrections | Build time, approx. |
|---|---:|---:|---:|---:|
| Sonnet 5 / Medium | 301 | 90/100 | 0 | 11m 55s |
| Opus 5 / High | 1,130 | 90/100 | 1 | 15m 13s |
| Opus 5 / Medium | 842 | 90/100 | 1 | 14m 36s |
| Sonnet 5 / High | 1,025 | 90/100 | 2 | 27m 37s |
| GPT 5.5 / Medium | 314 | 90/100 | 0 | 7m 49s |
| **Total / mean** | **3,612 / 722.4** | **5 reviewed apps** | **4** | |

All five use the identical `sharepoint-v2` prompt. Each demonstrates live
catalogue data, complete request creation, independent backend read-back and
reopen persistence, with unchanged stock and no invalid-input writes. All retain
the same unverified BC09 connection-error/no-fallback coverage.

### Comparing the same four settings

| Configuration | Additional virtual credits | Additional SharePoint credits |
|---|---:|---:|
| Sonnet 5 / Medium | 215 | 301 |
| Opus 5 / High | 826 | 1,130 |
| Sonnet 5 / High | 220 | 1,025 |
| GPT 5.5 / Medium | 269 | 314 |
| **Equal-weight mean** | **382.5** | **692.5** |

This removes the difference in model mix between the four-app and five-app
additional samples. It does **not** make virtual approval/stock workflows and
SharePoint request tracking equivalent, or isolate a connector premium.
Publication permission and the original Test 1's paid self-review also prevent
silently pooling the historical and new means.

**Maker guidance:** Sonnet Medium is a cost-supported starting point for these
small procurement scopes; the additional virtual result used 215 credits and
the connected result 301, both without corrective guidance. GPT Medium was
close on connected cost at 314 with no correction. Higher effort did not
guarantee fewer corrections, lower cost or a higher final score. Use the
per-setting readings and actual capability coverage, not a cross-test headline
average, and do not treat these small samples as a guaranteed future price.

### Additional Test 3: complex apps

Three additional corporate-tenant apps completed all four planned stages and
the independent final acceptance checks. Original results remain unchanged.
The business prompts and rubric are consistent; the amended foundation prompt
permits private owner-only publication. No native self-review prompt was sent.

| Configuration | Final credits | Score | Corrections | Build time, approx. |
|---|---:|---:|---:|---:|
| GPT 5.5 / Medium | 573 | 85/100 | 1 | 21m 09s |
| Sonnet 5 / High | 2,134 | 85/100 | 1 | 49m 11s |
| Opus 5 / High | 2,860 | 95/100 | 2 | 42m 45s |
| **Total / mean** | **5,567 / 1,855.7** | **3 reviewed apps** | **4** | |

There were no clarification prompts. Times use submission-to-first-observed-idle
intervals, not the later idle-confirmation timestamp or external review time.

| Configuration | Foundation | Profile | Workflows | Policy/forms | Final task total |
|---|---:|---:|---:|---:|---:|
| GPT 5.5 / Medium | 183 | 276 | 397 | 573 | 573 |
| Sonnet 5 / High | 433 | 654 | 1,232 | 2,134 | 2,134 |
| Opus 5 / High | 521 | 1,219 | 1,860 | 2,431 | 2,860 |

These readings are **cumulative, not additive**. Final totals include the
corrections used to reach acceptance, including any after the final planned
stage. Stage differences do not isolate connector charges.

| Configuration | Original credits | Additional credits | Mean of two | Original / additional score |
|---|---:|---:|---:|---:|
| GPT 5.5 / Medium | 944 | 573 | 758.5 | 90 / 85 |
| Sonnet 5 / High | 2,289 | 2,134 | 2,211.5 | 90 / 85 |
| Opus 5 / High | 3,073 | 2,860 | 2,966.5 | 95 / 95 |
| **Same-setting means** | **2,102** | **1,855.7** | **1,978.8** | |

The original overall Test 3 mean remains **1,998 across five settings**. The
matched comparison above uses exactly three settings on both sides; its paired
mean covers six observations. Do not treat the different sample composition or
publication permission as a measured model-price change.

All three demonstrate the critical multi-screen, multi-line, approval,
stock-safe fulfilment, continuity, theme, real-profile and responsive
requirements. Their noncritical coverage differs:

| Configuration | Coverage outside the awarded points |
|---|---|
| GPT 5.5 / Medium | Profile fault/Retry unverified; meaningful density/default-department consumption not demonstrated; sampled light-theme error text below 4.5:1 |
| Sonnet 5 / High | Profile fault/Retry and default-department consumption unverified; sampled light-theme error text below 4.5:1 |
| Opus 5 / High | Profile fault/Retry unverified |

Save/Cancel and preference persistence work in all three. Sonnet High has a
measured 4px request-row density change; Opus High has an 8px change and consumes
the default department in Approvals and all-requests filters. Do not infer that
either filter sets a new request's department. The profile is genuinely read-only
and was reverified after each final native reopen.

**Maker guidance:** GPT Medium remains the lowest observed completed cost in
these matched complex-app results, but its additional 85/100 result has more
coverage gaps than its original 90/100 result. Opus High reached 95/100 twice at
higher cost, using one and two corrective prompts respectively. Choose against
the actual required capabilities and review budget, not just the smallest
credit number. Two observations per shown setting do not establish reliable
variance, success rates or future prices.

## Interpretation and limits

Acceptance means at least 85/100 and every required critical check, not complete
coverage or production readiness. The synthetic fixtures do not establish
production authorization, concurrency, large-list scale or reliable future
pricing. Selected Cowork settings do not prove internal app-builder routing.

See [METHOD.md](METHOD.md) for scope, controls, cost semantics and evidence
handling, or [data.json](data.json) for exact final measurements and capability
verdicts.
