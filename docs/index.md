# What is CaptainCore?

::: warning
This project is in alpha development stage, not yet ready for public use.
:::

CaptainCore is WordPress management toolkit for geeky maintenance professionals. 🚤 👨🏽‍💻 🔄

## Outgrowing other solutions

There are many great tools for managing many WordPress from a central dashboard. Tools like [ManageWP](https://managewp.com/), [WP Remote](https://wpremote.com/), [InfiniteWP](https://infinitewp.com/), [MainWP](https://mainwp.com/), [Jetpack](https://jetpack.com/) and a seemingly endless list of other tools. So why build something new from scratch? That's a great question and one I've asked myself many times while building CaptainCore.

As a power user of both Jetpack and ManageWP, I simply outgrew their solutions. Those products are ideal for 10, 50, or maybe 100s of WordPress sites, not 1000s. I wanted creative control to built features and automation which directly makes my life easier as a [WordPress host reseller 🌟](https://anchor.host/make-reselling-wordpress-hosting-awesome/).

This project began in [Feb 2018](https://github.com/CaptainCore/captaincore-cli/commit/9cac109ba72f7d6e79da29cf90751f749c41bd46) as a crude bulk command line backup script and has evolved into my solution for WordPress maintenance.

## Technology overview

CaptainCore is 100% open source built with Vue.js, Vuetify, SSH, Bash, WP-CLI, Go and lots of love. There isn't yet a hosted version. All code is publicly viewable on Github and is the real production code currently powering [Anchor Hosting](https://anchor.host).

## Limitations

CaptainCore talk to each WordPress site over SSH. In theory that should work with any web host which offers SSH however it's really only tested to work with [Kinsta](https://kinsta.com) and [WP Engine](https://wpengine.com). If your not familiar with SSH access then I'd highly recommend trying out a much easier to use tool like [ManageWP](https://managewp.com).

## What can it really do?

OK enough warnings, here is a short list of what CaptainCore can do.

- **Complete Maintenance Visibility** - Gathers daily file level changes for themes and plugins. Know preciously what changed and when. Easily rollback any theme or plugin to any version.
- **Painless Site Monitoring** - Track 100s or 1000s of sites and receive a single email report as site health changes. No more digging through emails to find out what’s happening.
- **Very Efficient Long-Term Backups** - [Powered by Restic](https://captaincore.io/development-update/captaincore-update-26-restic-infused-backups/), backups are incremental, de-duplicated, encrypted and stored with a cloud provider. With very little overhead backups are fully restorable to any previous backup point.