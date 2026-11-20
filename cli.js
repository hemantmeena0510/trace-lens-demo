#!/usr/bin/env node
const defaults = require("./config");

function parseArgs(argv) {
  const options = { ...defaults };
  for (let i = 0; i < argv.length; i++) {
    switch (argv[i]) {
      case "--timeout": options.timeout = Number(argv[++i]); break;
      case "--retries": options.retries = Number(argv[++i]); break;
      case "--log-level": options.logLevel = argv[++i]; break;
      case "--format": options.outputFormat = argv[++i]; break;
      case "--legacy-mode": options.legacyMode = true; break;
      default:
        console.error(`Unknown option: ${argv[i]}`);
        process.exit(1);
    }
  }
  return options;
}

module.exports = { parseArgs };

if (require.main === module) {
  console.log(JSON.stringify(parseArgs(process.argv.slice(2)), null, 2));
}
