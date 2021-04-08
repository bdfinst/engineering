---
layout: wmt/docs
title: Task Decomposition
side-navigation: cd-navigation.html
---

<img src="/assets/img/devops-dojo-motto.png" class="img-responsive" width="300px" />

# {{ page.title }}

## What does a good task look like?

A development task is the smallest independently deployable change to implement
acceptance criteria.

---

### Recommended Practices

Create tasks that are meaningful and take less than two days to complete.

```gherkin
Given I have data available for Integration Frequency
Then score entry for Integration Frequency will be updated for teams

Task: Create Integration Frequency Feature Flag.
Task: Add Integration Frequency as Score Entry.
Task: Update Score Entry for Integration Frequency.
```

Use [Definition of Done](../workflow-management/definition-of-done.html) as your
checklist for completing a development task.

---

### Tips

- If a task includes integration to another dependency, add a simple contract
  mock to the task so that parallel development of the consumer and provider will
  result in minimal integration issues.
- Decomposing stories into tasks allows teams to swarm stories and deliver value
  faster

---

### Value

As a development team, I want stories decomposed into small independently
deployable changes, so that we can deliver value as rapidly as possible.

---

_[Back To Work Decomposition Journey](./work-breakdown.html)_
