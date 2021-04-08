---
published: false
title: Contract Testing
menus:
  - Test Architecture
tags:
  - test
---

## Purpose

Contract tests are divied into two validation perspectives, consumer and provider.

### Consumer

When performing integration testing, a good practice for CD is to use contract test doubles for external dependencies to
maintain determinism in the pipeline. However, these test doubles need to be verified frequently to make sure they are
still valid.

A consumer contract test is used to validate the contract test doubles. These are executed using the live dependencies
and validate the portion of the code that interfaces to the sub-system. Because they use live dependencies, they are
non-deterministic and should not break the build. A consumer contact test validates contract format, not specific data.

<img src="../../images/contract-test.png" width="30%">

### Provider

A provider contract test is a unit test of the interface schema. It validates that no breaking changes are made to the
API by checking response codes and required properties are correct and of the expected type.

## Recommended Practices

- Contract tests, like [integration tests], should be scoped to exercise the interface layer in isolation and should avoid entangling business logic.
- Configuring the system for a consumer contract test is similar as that for an end to end test. As such, the same concerns for test data management and side effects may apply, depending on the system architecture.
- In complex systems where test data management is prohibitivily expensive or slow, a provider maintained [Technical Compatability Kit](https://paulhammant.com/2019/06/14/tcks-and-servirtium/) is a better solution.
- In systems where services tightly collaborate, [Consumer Driven Contracts](https://martinfowler.com/articles/consumerDrivenContracts.html) are a better solution.

## References

- Utilize [Contract Testing Training](https://strati.walmart.com/blog/2019-11-05-contract-testing-training.html) created by the Dojo and hosted by Strati
- [Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)
- [Contract Tests](https://martinfowler.com/bliki/ContractTest.html)

---

{% include testing-process-footer.html %}
