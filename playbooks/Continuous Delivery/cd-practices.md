---
title: CD Best Practices
menus:
  - Continuous Delivery
weight: 99
tags:
  - cd
---

## Focus on hardening pipeline

Its job is to block bad changes. The team's job is to develop its ability to do that.
Only use the emergency process. If a process will not be used to resolve a critical outage, it should not be happening in the CD pipeline.

## Integrate outside the pipeline. Virtualize inside the pipeline.

Direct integration not a good testing method for validating behavior because the data returned is not controlled. It
**IS** a good way to validate service mocks. However, if done in the pipeline it puts fixing production at risk if the
dependency is unavailable.

## Start with Continuous Integration

Less than 10 minutes from commit to versioned artifact.

## CD Cycle Time

Less than 60 minutes from commit to Production.

## Developers responsible for the full pipeline.

No handoffs. Handoffs cause delay and dilute ownership. The team owns their pipeline and the application they deploy from birth to death.

## One or fewer stage gates

Until release and deploy are decoupled, one approval for production. No other stage gates.

## Manual testing for exploration only.

## All test automation pre-commit

Co-located with the system under test. No handoffs for test automation.

Test engineers reviewing test strategies and test cases prior to construction and continuously reviewing the code base for where testing can be more efficient.
The goal is not 100% coverage. The goal is efficient, fast, effective testing.
