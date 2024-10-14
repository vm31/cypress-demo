import './commands';
import addContext from 'mochawesome/addContext'

Cypress.on('uncaught:exception', (err: Error) => {
  console.error('Uncaught Exception:', err);
  if (err.message.includes('jQuery is not defined')) {
    return false; // Ignore specific jQuery-related exceptions
  }
  return true; // Allow other exceptions to fail the test
});

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    addContext({test}, { title: "Screenshot", value:`${Cypress.config('screenshotsFolder')}/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png` })
  }
})
