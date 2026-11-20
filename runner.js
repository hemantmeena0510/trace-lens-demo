const defaults = require("./config");

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runTask(task, options = {}) {
  const { retries, timeout } = { ...defaults, ...options };
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await Promise.race([
        task(),
        wait(timeout * 1000).then(() => { throw new Error("Task timed out"); }),
      ]);
    } catch (err) {
      if (attempt === retries) throw err;
      await wait(100);
    }
  }
}

module.exports = { runTask };
