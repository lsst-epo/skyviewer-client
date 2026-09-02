# Contributing to `skyviewer-client`

First off, thank you for your interested in furthering the development of Skyviewer! We are excited that there is external interest in advancing Skyviewer's functionality and improving stability and performance.

**Please read through this in its entirety before opening a PR.**

## Process for Contributing

First, please check the current issues log (both active and closed issues) for a similar proposal.

If you do not see a similar issue then create a new issue and include the following information before opening up a PR:

1. The type of contribution (`bugfix`, `feature`, `optimization`)
2. Whether or not you will be coding the implementation yourself or using an LLM/agent-assisted workflow, or are simply requesting that we add a feature or fix an issue
3. The ideal timeline you would like to see your contribution implemented
4. We will respond if we can take on your contribution, or if we cannot because it is not part of our development roadmap, not something we are willing to support, not aligned with the best practices we adhere to, and not if we handle the same thing the contribution is addressing at a different point in our architecture

After we agree that your contribution is something we are willing to accept into our codebase via Issue comment, do the following:

1. Fork the repo
2. Optional: If the Rubin EPO has pushed changes to the remote branch after you forked the repo then please _rebase_ those incoming changes on your forked branch, *do not create a merge commit*
3. Create a feature branch based on the `develop` branch of `lsst-epo/skyviewer-client`
4. Implement your change on your feature branch
5. *Squash all commits into a single commit*
6. Open a PR from your fork feature branch to the `develop` branch of `lsst-epo/skyviewer-client`
7. Await review or request for changes

## Code of Conduct

We do allow for AI-assisted PRs to merge into our repo for small changes, but we ask that you be upfront about your AI-use prior to opening a PR. We also ask that you do not allow your agent to open the PR (Claude, Codex, etc. contributors will not be approved/merged, you must be the sole contributor in the PR). 

In our experience, agent-written code can be myopic and not aligned to the software development patterns we as a team adhere to. As such, we may merge your PR, but we also may review your PR, close it, open up our own PR with a different implementation and add you as a contributor.

Please note that the Computer Fraud and Abuse Act (CFAA) makes it illegal to scan a live website you do not own for vulnerabilties. 

## FAQs

> Is there a guarantee that my PR will be approved?

No, we do not guarantee that your PR will be approved. We would like to be able to approve any contributions that external users provide, but cannot due to our limited capacity as a team, the different priorities we have for Skyviewer, and if we perceive an alternative implementation as a more desirable solution. That being said there's a good chance your PR will be approved as long as it is thoroughly tested. Opening up an issue ahead of the PR will ensure that your time is well spent.

> Can I use Claude Code/Codex/Antigravity/etc. to write my contributing code?

Yes, however your agent must not be included as a contributor on the PR and you must be upfront about your AI usage in the initial Github issue.

> How can I get in touch with your team regarding a question I have about Skyviewer?

Please open up an issue with your question and we will respond as soon as possible.