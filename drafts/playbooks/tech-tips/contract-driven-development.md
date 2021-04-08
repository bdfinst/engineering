---
title: Contract Driven Development
---

Contract-Driven Development is an approach to software construction combining
ideas from [Design by Contract](https://en.wikipedia.org/wiki/Design_by_contract), from [Test-Driven
Design](https://www.linkedin.com/learning/programming-foundations-test-driven-development-2/small-steps-to-great-things),
from work on formal methods,
and from advances in automatic testing. Just as TDD designs the interfaces and behaviors of methods, CDD designs the
interactions between larger components.

The goals of CDD are:

1. Bring risk forward by defining and testing system integration first.
2. Verify the consumer experience of a proposed contract to ensure the API is clear and resilient to misunderstandings
   and defects.

## Recommended Practices

- Self explanatory terms aligned to domain language
- Service provider and consumers work together
- Service providers deliver tested contract mocks to enable parallel integration testing first
- Establish a versioning system early
- For any new service:
  - Deploy readiness probe
  - Deploy tested contract
  - Verify with consumer(s)
  - Deploy small changes to implement underlying behavior
- For existing services
  - Evolve, do not break contracts
  - Large changes require versioning and support for previous version while in use.
- Both consumers and providers verify contract matches on every build.
- Use tools and standards ([OpenAPI](https://swagger.io/docs/specification/about/), GraphQL, etc).

## Tips

- Don't over-test. Consumers should validate the schema and response codes are understood, not how the provider achieved
  that result.
- As in all testing, happy path is just the start.
- Make sure you're using test doubles in the pipeline and validating the doubes with contract test frequently
- Don't test for properties not used

## Common issues

- Producer and consumer working independently and not checking with each other often
- Producer and consumer do not test contracts often
- Breaking contract changes
- Generic terms not aligned to domain
- Testing values received
- Contract not documented with code. (e-mail, slack, word, etc)

---

## References

- [Contract Driven Development presentation](../../../presos/contract-driven-development/index.html)
- [Testing Terms](https://engineering.walmart.com/docs/testing/glossary)
- [Collaborative Contract Driven Development](https://www.youtube.com/watch?v=buJdbBNJARc)

## Value

As a team we want to define and test our contracts often in order to have confidence when integrating with
other teams so that we can work faster together while increasing the quality to our customers.

## Acceptance Criteria

- API changes are available for consumer testing prior to other changes
- When possible, consumers are consulted for user experience feedback
- Both consumers and providers test on every build
- API documentation is versioned and in machine readable format

## Samples

- [JavaScript Coding Sample](https://gecgithub01.walmart.com/strati/contract-test-example)
- [Java Coding Sample](https://gecgithub01.walmart.com/strati/contract-test-examples-java)

---

_[Back To Bifrost](../../index.html)_

{% include playbooks-footer.html %}
