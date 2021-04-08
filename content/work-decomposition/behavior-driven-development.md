---
published: false
title: Behavior Driven Development
menus:
  - Work Decomposition
  - Test Architecture
tags: [pending]
---

Behavior Driven Development is the collaborative process where we discuss the intent and behaviors of a feature and
document the understanding in a declarative, testable way. These testable acceptance criteria should be the
[Definition of Done](./../workflow-management/definition-of-done.html) for a
user story.
BDD is **not** a technology or automated tool. BDD is the process for **defining** the behavior. We can then write
automated tests for those behaviors.

---

## Recommended Practices

Gherkin is the domain specific
language that allows acceptance criteria to be expressed in "Arrange, Act, Assert" in a
way that is understandable to all stakeholders.
Example:

```gherkin
As an hourly associate I want to be able to log my arrival time so that I can be
paid correctly.
Given I am not clocked in
When I enter my associate number
Then my arrival time will be logged
And I will be notified of the time
Given I am clocked in
When I enter my associate number
And I have been clocked in for more than 5 minutes
Then I will be clocked out
And I will be notified of the time
Given I am clocked in
When I enter my associate number
And I have been clocked in for less than 5 minutes
Then I will receive an error
```

---

### Using Acceptance Criteria to Negotiate and Split

With the above criteria, it may be acceptable to remove the time validation and
accelerate delivery of the time logging ability. After delivery, the validation
may not be required. If true, we've saved money and time by NOT delivering
unneeded features.
First we deliver the ability to clock in and see if we really do need the ability
to verify.

```gherkin
As an hourly associate I want to be able to log my arrival time so that I can be
paid correctly.
Given I am not clocked in
When I enter my associate number
Then my arrival time will be logged
And I will be notified of the time
Given I am clocked in
When I enter my associate number
Then I will be clocked out
And I will be notified of the time
```

If, in production, we discover that the sanity check is required to prevent time
clock issues, we can quickly add that behavior.

```gherkin
As an hourly associate I want to be prevented from clocking out immediately after
clocking in.
Given I am clocked in
And I have been clocked in for more than 5 minutes
When I enter my associate number
Then I will be clocked out
And I will be notified of the time
Given I am clocked in
And I have been clocked in for less than 5 minutes
When I enter my associate number
Then I will receive an error
```

---

### Tips

- Scenarios should be written from the point of view of the consumer.
- Scenarios should be focused on a specific function and should not attempt to
  describe multiple behaviors.
- If a story has more than 6 acceptance criteria, it can probably be split.
- No acceptance test should contain more than 10 conditions. In fact, much less
  is recommended.

---

## References

- [Gherkin Reference](https://cucumber.io/docs/gherkin/reference/)
- [BDD Process Information](https://lizkeogh.com/behaviour-driven-development/)
- [Better Executable Specifications](https://www.youtube.com/watch?v=5CXSEINRojM) - Dave Farley

---

_[Back To Work Decomposition Journey](./work-breakdown.html)_
