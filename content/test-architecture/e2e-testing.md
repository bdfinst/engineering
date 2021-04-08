---
published: false
title: End to End Testing
menus:
  - Test Architecture
tags:
  - test
---

End to end tests focus on verifying user journeys through a system. A properly designed test suite will have minimal end to end
testing due to their cost and fragility.

## Recommended Practices

- For any moderately sized application, it's mathematically infeasible to test all paths with this kind of test. Instead, E2E tests
  should verify some critical paths but should not be trusted to prevent defect penetration.
- Any E2E test should be co-located and versioned with the application code at the beginning of the process flow. Separate
  repositories will result in version drift and wasted time running the wrong test.

## Tips

- E2E tests are not deterministic. They can fail for reasons unrelated to code quality. It's good practice to keep these tests as
  scheduled jobs that do no block the delivery pipeline.

## References

- Martin Fowler's [Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)
- [SDE Testing Team Site](http://testing.walmart.com/index.html)
- [Testing Terms](http://testing.walmart.com/testsolutions/testing-practices/testing-terms.html)
- [Testing Tools](http://testing.walmart.com/testsolutions/tools/index.html)

---

{% include testing-process-footer.html %}
