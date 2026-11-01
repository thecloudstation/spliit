#!/bin/sh
# With ACCESS_PASSWORD the public port is a password gate. Without it the app runs as before.
if [ -z "$ACCESS_PASSWORD" ]; then exec /bin/sh /usr/app/scripts/container-entrypoint.sh; fi
HASH=$(caddy hash-password --plaintext "$ACCESS_PASSWORD")
printf ':3000 {\n\tbasic_auth {\n\t\tadmin %s\n\t}\n\treverse_proxy 127.0.0.1:13000\n}\n' "$HASH" > /tmp/Caddyfile
caddy run --adapter caddyfile --config /tmp/Caddyfile &
export PORT=13000
exec /bin/sh /usr/app/scripts/container-entrypoint.sh
