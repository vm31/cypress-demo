import './commands';
import addContext from 'mochawesome/addContext'; // Correct import

// Register the reporter
import 'cypress-mochawesome-reporter/register';

// Handle uncaught exceptions in Cypress
Cypress.on('uncaught:exception', (err: Error) => {
  console.error('Uncaught Exception:', err);
  if (err.message.includes('jQuery is not defined')) {
    return false; // Ignore specific jQuery-related exceptions
  }
  return true; // Allow other exceptions to fail the test
});

// Add screenshots to Mochawesome reports
Cypress.on('test:after:run', (test: Mocha.Test, runnable: Mocha.Runnable) => {
  if (test.state === 'failed') {
    // Ensure runnable.parent exists before accessing it
    const parentTitle = runnable.parent ? runnable.parent.title : 'Unknown Parent';

    // Construct the absolute screenshot path
    const screenshotPath = `${Cypress.config('screenshotsFolder')}/${Cypress.spec.name}/${parentTitle} -- ${test.title} (failed).png`;

    // Create the context object
    const context = {
      runnable: runnable, // Pass the runnable object
      test: test // Pass the test object
    };

    // Use addContext to attach the screenshot with the absolute path
    addContext(context, {
      title: 'Screenshot',
      value: screenshotPath // Use absolute path for embedding
    });
  }
});
