# CLI Commands


## Commands

Shows commands

```bash
captaincore
```

Adds a site to CaptainCore.

```bash
captaincore site add <site> --id=<id> --domain=<domain> --username=<username> --password=<password> --address=<address> --protocol=<protocol> --port=<port> --staging_username=<staging_username> --staging_password=<staging_password> --staging_address=<staging_address> --staging_protocol=<staging_protocol> --staging_port=<staging_port> [--preloadusers=<preloadusers>] [--homedir=<homedir>] [--s3accesskey=<s3accesskey>] [--s3secretkey=<s3secretkey>] [--s3bucket=<s3bucket>] [--s3path=<s3path>]
```

Updates a site in CaptainCore.

```bash
captaincore site update <site> --id=<id> --domain=<domain> --username=<username> --password=<password> --address=<address> --protocol=<protocol> --port=<port> --staging_username=<staging_username> --staging_password=<staging_password> --staging_address=<staging_address> --staging_protocol=<staging_protocol> --staging_port=<staging_port> [--preloadusers=<preloadusers>] [--homedir=<homedir>] [--s3accesskey=<s3accesskey>] [--s3secretkey=<s3secretkey>] [--s3bucket=<s3bucket>] [--s3path=<s3path>]
```

Removes a site from CaptainCore CLI.

```bash
captaincore site delete <site>
```

Backups one or more sites.

```bash
captaincore backup [<site>...] [@<target>] [--use-direct] [--skip-remote] [--skip-db] [--with-staging]
```

Get details about a site.

```bash
captaincore site get <site> [--field=<field>] [--bash]
```

Creates [Quicksave (plugins/themes)](https://anchor.host/introducing-quicksaves-with-rollbacks/) of website

```bash
captaincore quicksave [<site>...] [@<target>] [--force] [--debug]
```

Rollback from a Quicksave (theme/plugin)

```bash
captaincore rollback <site> <commit> [--plugin=<plugin>] [--theme=<theme>] [--all]
```

Login to WordPress using links

```
captaincore login <site> <login> [--open]
```

SSH wrapper

```bash
captaincore ssh [<site>..] [@<target>] [--command=<commands>] [--script=<name|file>] [--<script-argument-name>=<script-argument-value>]
```

Snapshots one or more sites.

```bash
captaincore snapshot [<site>...] [@<target>] [--email=<email>] [--skip-remote] [--delete-after-snapshot]
```

Shows last 12 months of stats from self hosted [Fathom Lite](https://github.com/usefathom/fathom).

```bash
captaincore stats <site>
```

Updates themes/plugins on WordPress sites

```bash
captaincore update [<site>...] [@<target>] [--exclude-themes=<themes>] [--exclude-plugins=<plugins>] [--<field>=<value>]
```

List sites

```
captaincore site list [@<target>] [--filter=<theme|plugin|core>] [--filter-name=<name>] [--filter-version=<version>] [--filter-status=<active|inactive|dropin|must-use>] [--field=<field>]