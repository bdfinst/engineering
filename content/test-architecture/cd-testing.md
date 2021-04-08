---
title: Designing Tests for CI/CD
menus:
  - Test Architecture
tags:
  - test
  - cd
---

The purpose of a well designed test suite is to move the detection of any defect as close as possible to the source of the defect.
Optimally, the individual developer who created the defect will be quickly informed so that they can learn how to prevent that
defect in the future, thus reducing future defects at the source. Good test architecture is critical to achieve that goal.

> Goal: Bug Repellent
>
> Yes, tests find bugs—but that really isn't what automated testing is about. Automated testing tries to prevent bugs from being
> introduced. Think of automated tests as "bug repellent" that keeps nasty little bugs from crawling back into our software after
> we have made sure it doesn't contain any bugs. Wherever we have regression tests, we won't have bugs because the tests will point
> the bugs out before we even check in our code. (We are running all the tests before every check-in, aren't we?

Excerpt From: Gerard Meszaros. "xUnit Test Patterns: Refactoring Test Code

### Mindset

- Our primary role is to keep the pipeline quality signal trustworthy and improve its ability to to make the application prove it is
  production worthy. If we don't trust a test, we remove it from the deployment flow until it is stable.
- We want tests to detect a defect as close to the source as possible. While not always possible, our goal is to inform the developer who created the defect so they can learn and prevent repetition.
- We are testing everything about the artifact, not only the code. To do that, we use the same artifact in every environment and
  always test every artifact the same way. No branch deploys.

### Tests that should run in the pipeline

Only [deterministic](http://testing.walmart.com/testsolutions/testing-practices/testing-terms.html#deterministic-test) tests should be run in the deployment pipeline. Determinism means that any failure of the test is a positive indicator of a
problem in the code we've changed. Determinism is compromised by dependance on eternal resources that cannot be controlled by the
test. It is also impacted by activities like loading production data for the test or using one data set for multiple test runs. Both
are anti-patterns for determinism.

- [Static Tests](http://testing.walmart.com/testsolutions/testing-practices/testing-terms.html#static-test): Are there code smells or security issues?
- [Unit Tests](./unit-testing.html): Does this method / function work?
- [Integration Tests (Network)](./integration-testing.html): Do I understand this API response?
- [Integration Tests (Functional)](./integration-testing.html): Does this group of method/function perform the expected business flow?
- [Component Functional Tests](./functional-testing.html): Does this component work well as a whole?

### Continuous testing outside the pipeline

[Non-deterministic](http://testing.walmart.com/testsolutions/testing-practices/testing-terms.html#non-deterministic-test) tests are important for verifying tests that may use mocks for integration. We use mocks to keep the tests from
being flakey, but the results are only as good as the accuracy of the mocks.

- [Contract Tests](./contract-testing.html): Are our network integration test mocks correct?
- [Performance Tests](http://testing.walmart.com/performance/index.html): Is our performance degrading below standards?
- [Resiliency Tests](http://testing.walmart.com/resiliency/index.html): How well do we handle unexpected instability of dependencies
  or environments?
- [End to end (E2E) Tests](./e2e-testing.html): Do user flows work as expected?

### Test Stability

Making the test suite trustworthy is far more important than focusing on how much of the system is exercised. It is better to have 50% of the system
tested with stable tests than 100% of the system tested with results that cannot be trusted.

> The next step in creating a stable quality signal is to take a set of automated tests and run them to check for repeatability. If
> you don't have any automated tests, it's a good opportunity to write a few. Because our goal is to validate the stability of our
> tests, we don't want to change too many variables at a time. Therefore, we're going to use the same environment with the same
> code and the same deployment, and we're going to run all of our automated tests 20 times in a row. We need to capture those
> results and throw them in a database for analysis. You will have some tests that are stable and always passing. You'll have some
> tests that are finding a known defect and always failing. What I find with most organizations is you also have a lot of tests
> that are toggling between pass and fail. We can't use the failing tests as a quality signal until we get the associated defect
> fixed, and we can't use the toggling or flaky tests until we get them fixed. The failing tests and the flaky tests need to be
> removed until we address the issues because they are just sending a bad signal.

Excerpt From: Gary Gruver. "Engineering the Digital Transformation"

### Testing Type Priority

1. [Network integration Tests](https://martinfowler.com/bliki/IntegrationTest.html) tests should be the first focus. Interface boundaries are where most
   errors occur, are the hardest thing to change, and therefore have the highest
   risk. Structure your integration tests to be narrowly focused on that portion of the code that interacts with the external
   sub-system. It's recommended to use contract mocks or virtual services to keep integration tests deterministic. When mocks are
   required, it's required to run [contract
   tests](http://testing.walmart.com/testsolutions/testing-practices/testing-terms.html#contract-test) on a schedule to validate the
   contract mocks. How often? How unstable is the dependency contract?

   - Make sure the organization has a working agreement on API management
     - All APIs must provide machine readable API mocks that are versioned with the source
     - All mocks must be tested by the provider with contract tests
     - No breaking API changes are allowed without versioning and a migration path

2. [Functional Integration
   Tests](http://testing.walmart.com/testsolutions/testing-practices/testing-terms.html#integration-test) are used to verify
   that units within the sub-system deliver the expected result for the core business logic. When attempting to balance coverage and speed, these give the best
   balance. However, it may be difficult to fully exercise more complicated or critical units. Unit testing those is required.
3. [Unit Tests](./unit-testing.html) exercise methods and functions. They allow the finest levels of control and granularity, but
   excessive unit testing can cause long test runs. Keep track of CI test duration to keep it short.
4. Performance test should be done early in development and trends should be
   tracked over time. These should not wait until the end.
5. Resiliency tests should validate the ability of the system to handle failure.
   This should also be started as early as possible.
6. [End to end (E2E)](./e2e-testing.html) should be the least used tests. They are
   useful for validating a user's journey, but are not reliable for detecting defects. Since they are non-deterministic and cover
   more of the code in a less controlled way, they will report false positives. Over time, failures will be ignored as noise.

<img src="../../images/CI_CD Flow - No Dependencies.png" class="img-responsive" width="100%">

### Starting an Area Testing Strategy

It's not recommended to set code coverage targets because they result in meaningless tests. Instead, any application below 60% should see steady growth.
No new code should be accepted that does not also include all relevant tests. Depending on the application, 75%-95% code coverage is
sufficient.

Correctly architecting tests and implementing is a skill that is usually more difficult than writing production code. Teams new to
it will not be good at it right away. Find mentors.

---

## References

- [Kent Beck Test Desiderata](https://medium.com/@kentbeck_7670/test-desiderata-94150638a4b3)
- [Google Testing Blog](https://testing.googleblog.com/)
- [Principles of Continuous Delivery](https://continuousdelivery.com/principles/)

{% include playbooks-footer.html %}
