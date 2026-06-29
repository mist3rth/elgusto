const fs = require('fs');
const data = JSON.parse(fs.readFileSync('auditlighthouse-20260629T164349.json', 'utf8'));

console.log('--- Scores ---');
const categories = data.categories;
if (categories.performance) console.log('Performance:', categories.performance.score * 100);

console.log('\n--- Failed Performance Audits ---');
const audits = data.audits;
for (const key in audits) {
  const audit = audits[key];
  if (audit.score !== null && audit.score < 0.9 && audit.details && audit.details.type === 'opportunity') {
    console.log(`\n[${audit.id}] ${audit.title} (Score: ${audit.score})`);
    console.log(`Potential savings: ${audit.details.overallSavingsMs}ms / ${audit.details.overallSavingsBytes} bytes`);
    if (audit.details.items) {
      audit.details.items.forEach(item => {
        console.log(`  - ${item.url ? item.url : 'N/A'} (Savings: ${item.wastedBytes || item.wastedMs})`);
      });
    }
  }
}

console.log('\n--- Diagnostics ---');
for (const key in audits) {
  const audit = audits[key];
  if (audit.score !== null && audit.score < 0.9 && audit.details && audit.details.type !== 'opportunity' && audit.scoreDisplayMode !== 'informative' && audit.scoreDisplayMode !== 'notApplicable' && audit.scoreDisplayMode !== 'manual') {
    console.log(`\n[${audit.id}] ${audit.title} (Score: ${audit.score})`);
    console.log(audit.description);
  }
}
