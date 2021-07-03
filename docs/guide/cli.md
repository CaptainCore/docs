# CLI Commands

## Overview

CaptainCore is a command line application for automating WordPress maintenance. Only administrators of a CaptainCore instance would run commands directly. Regular users will simply use [CaptainCore Manager](https://github.com/CaptainCore/captaincore-manager) installed on a WordPress site.

## How site names work

CaptainCore uses arbitrary site names. When managing multiple sites, there needs to be a way to uniquely identify each site. While domain names seems like a good option, there are times you may want to be managing the same site with the same domain on multiple host providers. Also domain names can be long and sometimes change. On of flip side using a completely arbitrary site ID isn't very human friendly. A site name is something in between. A short but meaningful name that is unchangeable even if the domain name changes.

Site names can also specify a provider using an @ symbol `<site>@<provider>`. This makes dealing with multiple host providers enjoyable. Here's an example coping a site between providers `captaincore copy anchorhost@wpengine anchorhost@kinsta`. Omitting the provider is completely valid however won't be very particular if multiple site names exist.

## Targeting sites

Many commands also support targeting many sites. To target use `@all`, `@production` or `@staging` after the command. These can be combined to filter sites further by chaining other modifiers after the target. For example `@production.updates-on` will target production sites are marked for automatic updates and `@all.offload-on` will target all sites which have offload enabled. 

This allows for flexible repeat process. For example updating themes/plugins on production sites every week with `captaincore update @production.updates-on` and then monthly on staging sites with `captaincore update @staging.updates-on`.

## Fleet mode

With fleet mode enabled a single CaptainCore instance can support sites for many different GUIs (or known as captains). Each captain only has ability to run commands on their respective sites. Internally this works by passing `--captain-id=<captain_id>` onto each `captaincore <command>`. Commands run without a `--captain-id` will default to ID 1. 

Any command can be run across the entire fleet using `--fleet`. For example running `captaincore backup @production --fleet` will loop through all CaptainIDs. For a fleet with 3 CaptainIDs that command will run:
- `captaincore backup @production --captain-id=1`
- `captaincore backup @production --captain-id=2`
- `captaincore backup @production --captain-id=3`

## Commands

Shows commands

```bash
captaincore
```

Adds or updates a site from CaptainCore Manager.

```bash
captaincore site sync <site-id>
```

Deletes a site from CaptainCore.

```bash
captaincore site delete <site>
```

Backups one or more sites.

```bash
captaincore backup generate [<site>...] [@<target>] [--skip-remote] [--skip-db]
```

Download a backup for a site.

```bash
captaincore backup download <site> <backup-id> <payload> [--email=<email>]
```

Get details about a site.

```bash
captaincore site get <site> [--field=<field>] [--bash]
```

Creates [Quicksave (plugins/themes)](https://anchor.host/introducing-quicksaves-with-rollbacks/) of website

```bash
captaincore quicksave generate [<site>...] [@<target>] [--force] [--debug]
```

Rollback from a Quicksave (theme/plugin)

```bash
captaincore quicksave rollback <site> <commit> [--plugin=<plugin>] [--theme=<theme>] [--file=<file>] [--all]
```

SSH connection to a site

```bash
captaincore ssh [<site>...] [@<target>] [--command=<commands>] [--script=<name|file>] -- [--<script-args>=<value>]
```

Generates new snapshot for a site

```bash
captaincore snapshot generate [<site>...] [@<target>] [--email=<email>] [--notes=<notes>] [--filter=<filter-options>] [--skip-remote] [--delete-after-snapshot]
```

Fetches download link for a snapshot

```bash
captaincore snapshot generate [<site>...] [@<target>] [--email=<email>] [--notes=<notes>] [--filter=<filter-options>] [--skip-remote] [--delete-after-snapshot]
```

etches stats from [WordPress.com stats](https://wordpress.com/support/stats/), [Fathom Analytics](https://usefathom.com/) or [Fathom Lite](https://github.com/usefathom/fathom).

```bash
captaincore stats <site>
```

Updates themes/plugins on WordPress sites

```bash
captaincore update [<site>...] [@<target>] [--exclude-themes=<themes>] [--exclude-plugins=<plugins>] [--<field>=<value>]
```

List sites

```bash
captaincore site list [@<target>] [--filter=<theme|plugin|core>] [--filter-name=<name>] [--filter-version=<version>] [--filter-status=<active|inactive|dropin|must-use>] [--field=<field>]
```

## Long running commands

Long running tasks like `captaincore copy` or `captaincore move` can prematurely end due to SSH idle. In order to help reduce disconnects add the following to  `~/.ssh/config` which will keep SSH alive by sending a signal every four minutes (240 seconds) to the remote host.

```
Host *
ServerAliveInterval 240
```

## Real World Examples

Downgrade WooCommerce on sites running a specific WooCommerce version

```bash
captaincore ssh $( captaincore site list --filter=plugin --filter-name=woocommerce --filter-version=3.3.0 ) --command="wp plugin install woocommerce --version=3.2.6"
```

Upgrade Ultimate Member plugin on sites with it installed

```bash
for site in $( captaincore site list --filter=plugin --filter-name=ultimate-member ); do
  captaincore ssh $site --command="wp plugin update ultimate-member"
done
```

Fix bug with Mailgun plugin by patching in missing region setting.

```bash
for site in $( captaincore site list --filter=plugin --filter-name=mailgun ); do
  captaincore ssh $site --command="wp option patch insert mailgun region us"
done
```

Backup sites

```bash
captaincore backup generate @all
captaincore backup generate @production
captaincore backup generate @staging
```

Generate quicksave on all sites

```bash
captaincore quicksave generate @all
```

Monitor check all production sites

```bash
captaincore monitor @production
```

Run WordPress theme/plugin updates on production sites which have been marked for automatic updates

```bash
captaincore update @production.updates-on
```

Launch site. Will change default Kinsta/WP Engine urls to real domain name and drop search engine privacy.

```bash
captaincore ssh <site-name> --script=launch -- --domain=<domain>
```

Update WordPress core on all sites one liner

```bash
captaincore ssh @all --command="wp core update; wp core update-db"
```

Find and replace http to https urls

```bash
captaincore ssh <site-name> --script=apply-https
```