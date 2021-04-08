---
layout: wmt/docs
title: Deploy Metrics Configuration
side-navigation: cd-navigation.html
---

<img src="/assets/img/devops-dojo-motto.png" class="img-responsive" width="300px" />

# {{ page.title }}

Measuring the frequency of production deployments matters because:

- Frequent deployments of small changes indicate less risk in the pipeline
- Deploying frequently provides confidence that the pipeline is capable of
  deploying on demand without drama or heroics when the need arises
- The ability to deploy frequently provides access to additional feedback loops
  in the form of user feedback and pipeline runs

Production is the only thing that matters because it’s only in production that
value can be realized. The value usually comes in the form of revenue, feedback, or a combination of both.

## Recommended Practices

Ensure that all artifacts have the [Hygieia Deploy Widget](http://insights.walmart.com/docs/hygieia/widgets/deploy-widget.html) configured to point to
the correct deployable. This widget will be found on the product dashboards of each
artifact.

Some user configuration is required to poll data for deployments depending on
the system used for production deployment.

### OneOps

At the moment the only deployments that get automatically configured to send
deployment information are from OneOps and Managed servlet, provided the [Concord
task](https://strati.walmart.com/products/concord/plugins/oneops.html#oneops-task)
or Managed Servlet Concord flow are used. If you are not using those resources,
you will need to manually record your deployment.

In order for Hygieia to poll data, the [Hygieia Deploy
Widget](http://insights.walmart.com/docs/hygieia/widgets/deploy-widget.html#oneops-configure-widget)
needs to be correctly configured using the artifacts org/assembly/component

**Special Note**

Since Managed Servlet requires different assemblies by environment, you will
need to ensure that your production assembly is the one configured for your
deploy widget. You cannot configure both.

### WCNP Deployment

Currently [WCNP](https://wcnp.walmart.com/docs/kitt/intro.html) does not
automatically publish deploy metrics to Hygieia. For this, you will need to fire
off a postDeploy action.

You can reference [heimdall's kitt.yaml](https://gecgithub01.walmart.com/strati/heimdall/blob/master/kitt.yml)
for reference on how to set this up.

### Anything Else

If you are deploying to a VM, a bare metal server, or any other type of
deployment with Concord, you can utilize the [Insights Concord
plugin](https://strati.walmart.com/products/concord/plugins/insights.html#examples)
as part of your flow.

If you are using some other deploy method, you will need to use the [Hygieia
deploy API](http://insights.walmart.com/docs/hygieia/widgets/deploy-widget.html#api) to
publish your information to Hygieia directly. This should be considered a last resort.

If you are using Looper to deploy, you need to [switch deployments to Concord
immediately](https://strati.walmart.com/blog/2019-05-21-oneops-deployment-looper.html).

## Value

As a team, the use of accurate deployment metrics enhances our ability to understand how
frequently we provide value and validate that we are able to deploy on demand.

## Acceptance Criteria

- Method of deployment configuration method identified.
- Deploy widget correctly configured and populated.

---

_[Back To Bifrost](../index.html)_

{% include playbooks-footer.html %}
