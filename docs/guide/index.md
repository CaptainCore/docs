# Getting Started

Eventually there will be 2 ways to run CaptainCore, hosted and self-hosted. If your interested in the easy to use hosted version, then [sign up here](https://captaincore.io/early-access/) to be notified when early access is ready or experience it as a customer through [Anchor Hosting](https://anchor.host).

Running your own CaptainCore instance requires the following:
 - WordPress site with [CaptainCore Manager](https://github.com/CaptainCore/captaincore-manager).
 - Ubuntu VPS with [CaptainCore](https://github.com/CaptainCore/captaincore) running [`captaincore server`](https://github.com/CaptainCore/captaincore).

## Installing CaptainCore

On Linux use the automated installer. This will check the current version and install if an update is available. This will handle installing a number of required 3rd party applications.

```bash
curl -s https://captaincore.io/install.sh | sudo bash
```

## Configure Caddy in front of CaptainCore server

Running `captaincore server`will start the server locally on port 8000. In order to run publicly over HTTPS, it's recommended to configure Caddy as a reverse proxy in front of CaptainCore. See Caddy documentation for [installing](https://caddyserver.com/docs/install#static-binaries) and running as a [linux service](https://caddyserver.com/docs/install#linux-service). Create a `~/Caddyfile`with the public domain name and reverse proxy configuration. Be sure to point DNS to your server's public IP.

```json
captaincore.my-domain.tld {
        reverse_proxy :8000
}
```

Update the default Caddy linux service for ExecStart and ExecReload lines to the following.

```bash
ExecStart=/usr/bin/caddy run --environ --config /home/username/Caddyfile
ExecReload=/usr/bin/caddy reload --config /home/username/Caddyfile
```

## Setup CaptainCore as a Linux service

Create `/etc/systemd/system/captaincore.service` and replace User and Group with appropriate values for your system.

```bash
[Unit]
Description=CaptainCore
Documentation=https://docs.captaincore.io
After=network.target network-online.target
Requires=network-online.target

[Service]
Type=simple
User=username
Group=caddy
ExecStart=/usr/bin/captaincore server
Restart=always
AmbientCapabilities=CAP_NET_BIND_SERVICE

[Install]
WantedBy=multi-user.target
```
After creating your service file for CaptainCore, run the following. This will keep `captaincore server` always running in the background.

```bash
sudo systemctl daemon-reload
sudo systemctl enable captaincore
sudo systemctl start captaincore
```

## Connecting to an instance from WordPress for GUI

Any WordPress site can connect to a CaptainCore instance to provider a GUI. Download and install latest version of CaptainCore's WordPress plugin.

![Activate CaptainCore WordPress plugin](/assets/img/activate-captaincore-plugin.png)

This will prompt to connect to a CaptainCore instance. Fill out info provided by your CaptainCore instance.

![Connect to instance](/assets/img/connect-instance.png)