# Features

## Quicksaves

Quicksaves gather daily file level changes for themes and plugins. This solves the question "What changed and when?". The first place to review when troubleshooting technical issues with WordPress sites. Easily rollback any theme or plugin to any version.

## Backups
Daily, incremental, super efficient backups powered by Restic. Backups are stored within a B2 bucket unique per environment. Restic only stores data blocks that have changes which enables full restoration capabilities lasting for years with very little overhead. Backups are generated on the CaptainCore instance with very little impact on your production WordPress sites.

## Uptime Monitor
A zero config and built in uptime monitor. Every site added to CaptainCore will automatically be scanned for a valid HTTP response code and ending `</html>` markup. Notifications are bundled so whether your tracking hundreds are 1000s of sites, you only ever receive 1 notification per active incident with a complete summary.

## Health Checks
Daily captures Chrome devtool errors into a single location for easy review of frontend issues. Great way to make sure all websites are running healthy.

## DNS Manager
Powered by Constellix API, provides a convenient interface for managing DNS records. Both customers and folks with shared access can see and manage DNS records their own sites.

## Filters
Powerful site filtering options which allows for granular control of targeting sites. For example select all sites which have WooCommerce v4.5.2 and run the following WP-CLI command `wp plugin update woocommerce && wp wc update `.

## Scripts
Full shell scripting and WP-CLI capabilities. Ability to automate anything you can script.