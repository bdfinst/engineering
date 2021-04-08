---
published: false
title: InnerSource Development
---

InnerSource development uses the practices of open source development to enable teams to contribute to each other's development efforts in a safe and controlled manner. This allows cross-training, builds cooperation, reduces silos, and enables the ability to flex effort when needed while maintaining quality ownership.

---

## Recommended Practices

As with most things, there are many good practices and Paypal's [InnerSource Commons](https://paypal.github.io/InnerSourceCommons/) is an excellent source for those recommendations and includes a [learning path](https://github.com/InnerSourceCommons/InnerSourceLearningPath) for new practitioners.

There are a few core minimums that teams should focus on first.

1. The code must be sufficiently tested to allow rapid onboarding by an external developer. This should include [unit](../testing-process/unit-testing.html), [functional](../testing-process/functional-testing.html), [contract](http://testing.walmart.com/testsolutions/testing-practices/testing-terms.html#api-test), and [integration](../testing-process/integration-testing.html) tests. Having the testing framework in place not only protects the application from defects and encourages more testing, but also fully describes what the application is doing to the new developer.
2. Prioritized, refined work that is decomposed to a point where few (if any) questions are required to clarify after work begins.
3. A contribution process documented in the source repository, usually in the main `README.md` that allows an external contributor to configure their development environment and understand the team's communication process without requesting the information from a team member directly.

### Tips

- While the version control process for team members should always use **branch and pull**, external contributors should use **fork and pull**. Not only does this simplify access control issues, but it allows an external team to execute a CI process on the work and contribute features as a team.
- External contributors should deliver completed work, not incremental change towards a feature. However, the completed features should be small enough for the application core team to effectively code review.
- The core team should prioritize external code reviews. Outside help is a gift.
- The core team should not expect ongoing support from the external contributors. Outside help is a gift.

---

## Value

As a development team, we want the ability for external contributors to assist us with our backlog so that we can deliver features more rapidly without compromising quality.

As an external contributor, I want the ability to safely implement my own backlog requests and learn new skills in other products so that I can grow my technical and business knowledge as well as help deliver my priority work that may not be a priority to the application core team.

### Acceptance Criteria

- Developer maintained testing process in place.
- Refined backlog understandable by external contributors.
- Documented and verified contribution model using a known good pattern.

{% include playbooks-footer.html %}
