---
published: false
title: Component Functional Testing
menus:
  - Test Architecture
tags:
  - test
---

Functional tests verify larger business behaviors. While unit tests seek to verify the behavior of a single unit of code, a
functional test verifies a business scenario.

## Recommended Practices

- Utilize [Behavior Driven
  Development(BDD)](../work-decomposition/behavior-driven-development.html) to
  increase understanding of what is being requested and define functional behavior.
- Create small, focused scenarios that only test one component and that limit the scope to help quickly identify a broken behavior.

## Tips

- If the behavior of the system changes, write new functional scenarios before work begins.
- Use a subset of the team (i.e. [The Three Amigos](https://www.agilealliance.org/glossary/three-amigos/) to rough draft scenarios before bringing them before the team.
- Discuss and validate scenarios as a team to ensure everyone understands what is being developed and how it will be tested.

## References

- Martin Fowler's [Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)
- [SDE Testing Team Site](http://testing.walmart.com/index.html)
- [Testing Terms](http://testing.walmart.com/testsolutions/testing-practices/testing-terms.html)
- [Testing Tools](http://testing.walmart.com/testsolutions/tools/index.html)

---

{% include testing-process-footer.html %}
