# TaskRunner

A tiny command-line task runner. Used as a demo repository for Trace Lens.

## Installation

```bash
npm install -g taskrunner-demo
```

## Configuration

| Option | Flag | Default | Description |
|--------|------|---------|-------------|
| timeout | `--timeout` | 60 | Seconds before a task is cancelled |
| retries | `--retries` | 3 | Number of retry attempts |
| logLevel | `--log-level` | info | Verbosity of logs |
| outputFormat | `--format` | json | Format of the output |
| legacyMode | `--legacy-mode` | false | Use the old scheduler |

## Quick notes

- Default timeout is 60 seconds.
- Failed tasks are retried 3 times by default.
- Pass `--legacy-mode` to use the old scheduler.

See [docs/configuration.md](docs/configuration.md) and [docs/usage.md](docs/usage.md) for details.
