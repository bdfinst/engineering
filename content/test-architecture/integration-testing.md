---
title: Integration Testing
menus:
  - Test Architecture
tags:
  - test
---

An integration test is a deterministic test to verify how the unit under test interacts with other units without directly accessing external sub-systems. For the purposes of clarity, “integration test” is not a test that broadly integrates multiple sub-systems. That is an E2E test.

Some examples of an integration test are validating how multiple units work together (sometimes called a “sociable unit test”) or validating the portion of the code that interfaces to an external network sub-system while using a test double to represent that sub-system.

<p>
<small>Validating the behavior of multiple units with no external sub-systems</small><br>
<img src="../../images/integration-test.png" width="50%">
</p>

<p>
<small>Validating the portion of the code that interfaces to an external network sub-system</small><br>
<img src="../../images/network-integration-test.png" width="15%">
</p>

Integration is where most defects occur, so skipping integration tests should never happen. When integrating multiple units of code
within the sub-system, integration tests can give you higher effective coverage with fewer tests. See [trophy test patter](http://testing.walmart.com/testsolutions/testing-practices/testing-terms.html#test-trophy)

## Recommended Practices

- When testing across network interfaces, use test doubles to keep the test deterministic.
  - Service virtualization tools like [Mountebank](http://www.mbtest.org/), [Wiremock](http://wiremock.org/), or [Prism](https://github.com/stoplightio/prism)
- Use [contract tests](./contract-testing.html) asynchronous to the delivery pipeline to verify the integration test doubles
- When testing inside a sub-system, using more integration test and fewer unit tests to get more effective test coverage with fewer tests to execute. This is faster and easier to maintain.
- Use coverage reports to find risk areas that are not covered and add unit tests for those.

## References

- Martin Fowler's [Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)
- [Testing Terms](http://testing.walmart.com/testsolutions/testing-practices/testing-terms.html)
- [Testing Tools](http://testing.walmart.com/testsolutions/tools/index.html)

---

{% include testing-process-footer.html %}
