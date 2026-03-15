/**
 * BCMS Manual – Guided Tour Loader
 * Loads Shepherd.js tours from JSON files in docs/assets/demos/
 * Usage in Markdown: add a button with data-tour="tour-name"
 * e.g. <button data-tour="live-feed">Start Demo</button>
 */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-tour]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var tourName = btn.getAttribute('data-tour');
      fetch('/assets/demos/' + tourName + '.json')
        .then(function (r) { return r.json(); })
        .then(function (config) { launchTour(config); })
        .catch(function (e) { console.warn('Tour not found:', tourName, e); });
    });
  });
});

function launchTour(config) {
  if (typeof Shepherd === 'undefined') {
    console.warn('Shepherd.js not loaded. Add it to extra_javascript in mkdocs.yml.');
    return;
  }
  var tour = new Shepherd.Tour({
    useModalOverlay: true,
    defaultStepOptions: {
      classes: 'bcms-tour-step',
      scrollTo: { behavior: 'smooth', block: 'center' }
    }
  });
  (config.steps || []).forEach(function (step) {
    tour.addStep(step);
  });
  tour.start();
}
