---
title: Definition of Terms
tags:
      - glossary
---




- [{{ page.title }}](#-pagetitle-)
      - [Continuous Delivery](#continuous-delivery)
      - [Continuous Deployment](#continuous-deployment)
      - [Continuous Integration](#continuous-integration)
      - [Definition of Done](#definition-of-done)
      - [INVEST](#invest)
      - [Vertical Sliced Story](#vertical-sliced-story)
      - [Ready to Start](#ready-to-start)
      - [Toil](#toil)
#### Continuous Delivery

The ability to deliver the latest changes to production **on demand**.

#### Continuous Deployment

Delivering the latest changes to production **as they occur**.

#### Continuous Integration

A development process where each developer integrates tested,
changes to trunk very frequently or at least once per day. Trunk is kept ready to deploy at all times.

> Continuous integration requires that every time somebody commits any change, the entire application is built and a comprehensive
> set of automated tests is run against it. Crucially, if the build or test process fails, the development team stops whatever they
> are doing and fixes the problem immediately. The goal of continuous integration is that the software is in a working state all the
> time.

> Continuous integration is a practice, not a tool. It requires a degree of commitment and discipline from your development team.
> You need everyone to check in small incremental changes frequently to mainline and agree that the highest priority task on the
> project is to fix any change that breaks the application. If people don't adopt the discipline necessary for it to work, your
> attempts at continuous integration will not lead to the improvement in quality that you hope for.

Excerpt From: Jez Humble & David Farley. "Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment
Automation."

#### Definition of Done

Feature: All stories are deployed to production.

Story: All agreed behaviors are implemented and the story is deployed to production.

#### INVEST

All stories must be:

- **I**ndependently deployable
- **N**egotiable
- **V**aluable
- **E**stimable
- **S**mall
- **T**estable

#### Vertical Sliced Story

A story should represent a response to a request that can be deployed
independently of other stories. It should be aligned across the tech stack so
that no other story needs to be deployed in concert to make the function work.

Examples:

- Submitting a search term and returning results.
- Requesting user information from a service and receiving a response.

#### Ready to Start

- Testable acceptance criteria.
- Dependencies noted so that can be appropriately coded around, if required.
- Spikes identified and time boxed.
- Tasks decomposed to allow a maximum number of team members to swarm.
- All contract changes documented for contract test changes.

#### Toil

The repetitive, predictable, constant stream of tasks related to
maintaining an application.

[SRE Workbook: Eliminating Toil](https://landing.google.com/sre/workbook/chapters/eliminating-toil/)

{% include playbooks-footer.html %}
