---
title: Integration Metrics Configuration
---

Measuring the frequency of code integration matters because:

- Frequent integration of small, tested changes introduces less risk in the pipeline.
  base.
- Integrating code frequently provides confidence that changes have not introduced regression and eases triage of pipeline failures.
- The ability to integration frequently provides access to additional feedback loops
  in the form of pull request and pipeline runs

Small code changes integrated frequently in to trunk helps ensure the new code
is what the team agreed upon. While, also allowing the team to pivot sooner if need arises.

## Recommended Practices

- Ensure that all artifacts have the [Hygieia Code Repo
  Widget](http://insights.walmart.com/docs/hygieia/widgets/code-repo-widget.html#code-repo-widget)
  configured to point to the correct repository. This widget will be found on the
  product dashboards of each artifact.
- Ensure the code repo widget is point to the trunk branch.
- Use trunk as the source of truth. Following a [Trunk Base Development](./tech-tips/branching.html) style
  will insure the data is accurate.

## Tips

- Having a correctly configured
  [insights.yml](http://insights.walmart.com/docs/hygieia/metadata.html) file
  will help with the auto onboarding processes.
- You can reference [Teamroster Repo Alignment Playbook](./teamroster-repo-alignment.html) for more information.

## Value

As a team, the use of accurate integration metrics enhances our ability to
understand how frequently the team is validating non-breaking code changes with the team
and pipeline. While also helping reduce the size of each story with proper [Work Decomposition](./work-decomposition/work-breakdown.html)
and reduce waste.

## Acceptance Criteria

- Code repo widget correctly configured and populated.

---

_[Back To Bifrost](../../index.html)_

{% include playbooks-footer.html %}
