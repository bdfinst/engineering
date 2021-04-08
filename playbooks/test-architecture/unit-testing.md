---
title: Unit Testing
menus:
  - Test Architecture
tags:
  - test
---

**_The smallest testable part of any component. Typically has only a few inputs and a single output._**

## Recommended Practices

- Only commit new code if it has corresponding unit tests.
- Tests run automatically before commiting, while verifying PRs, and during any build.
- Target behaviors of functions, methods, classes, and components in isolation
- Unit tests should be deterministic and should never fail unless the code is broken. Delete tests that fail randomly. They are
  worse than not having tests since their neither verify behavior nor provide confidence.
- Always test edge cases with unit test.

## Tips

- If a test requires too much mocking, the application code is generally too entangled and should be refactored.
- If it's going over a network, it's not a unit test.

## References

- Martin Fowler's [Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)
- [SDE Testing Team Site](http://testing.walmart.com/index.html)
- [Testing Terms](http://testing.walmart.com/testsolutions/testing-practices/testing-terms.html)
- [Testing Tools](http://testing.walmart.com/testsolutions/tools/index.html)

---

{% include testing-process-footer.html %}
