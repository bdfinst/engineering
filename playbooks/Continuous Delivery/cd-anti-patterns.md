---
title: CD Anti-patterns
menus:
  - Continuous Delivery
weight: 1
tags:
  - cd
---

## Work Breakdown

### Stories without testable acceptance criteria

- All stories should be defined with acceptance tests to make developer driven testing function correctly.
- Acceptance tests define "done" for the story.

### Stories too large

- Stories represent a single, small, observable behavior change. Stories should require no more than two days for a team to deliver.

## Workflow Management

- Rubber band scope
- No definition of "Done"
- No definition of "Ready"
- Focusing on individual tasks completed
- Assigning tasks
- Estimation based on resource assignment

## Assigning tasks for the sprint

This results in each team member working in isolation on a task list instead of the team
focusing on delivering the next high value item. Each team member should pull the next priority item only after helping others
complete work in progress.

## Co-dependant releases

Multi-team release trains increase batch size and reduce delivery frequency. Teams cannot improve efficiency if they are constantly waiting. Handle dependencies with code, do not manage them with process.

## Handoffs to QA for testing

In CI/CD, testing is completed before submitting code for review.

## Excessive backlog

Extends lead time. Indicates over utilized team or ineffective backlog review.

- Continuously review backlog for expired requests and remove them.
- Reassign components to less utilized teams.

## Early story refining

Stories refined too long in advance create overproduction waste. Odds are that they will require re-refining.

Time is better spent delivering the current priorities.

## Manual test as a stage gate

Manual testing is neither repeatable nor deterministic.

Use continuous exploratory testing to find missing tests that should be added.

## Meaningless retrospectives

Retrospectives should be metrics driven. Improvement items should be treated as business features.

## Hardening / Testing / Tech Debt Sprints

**Just no.** These are not real things. Sprints represent work that can be
delivered to production.

## Moving "resources" on and off teams to meet "demand"

Teams take time to grow, they cannot be "constructed". Adding or removing anyone
from a team lowers the team's maturity and average problem space expertise. Changing too many people on a team
reboots the team.

## One delivery per sprint

Sprints are planning increments, not delivery increments. Plan what will be delivered daily during the sprint.

## Skipping demo

If the team has nothing to demo, demo that. Never skip demo.

## Committing to distant dates

Uncertainty increases with time. Distant deliverables need detailed analysis.

## Not committing to dates

Commitments drive delivery. Commit to the next Minimum Viable Feature.

## Velocity as a measure of productivity

Velocity is planning metric. "We can typically get this much done in this much time." It's an estimate of relative capacity that tends to change over time and these changes don't necessarily indicate a shift in productivity. It's also an arbitrary measure that varies wildly between organizations, teams and products. There's no credible means of translating it into a normalized figure that can be used for meaningful comparison.

By equating velocity with productivity there is created an incentive to optimize velocity at the expense of developing quality software.
