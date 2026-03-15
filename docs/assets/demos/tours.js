/**
 * BCMS Manual – Guided Tour Loader
 * Loads Shepherd.js tours from JSON files in docs/assets/demos/
 * Usage in Markdown: add a button with data-tour="tour-name"
 * e.g. <button class="md-button md-button--primary" data-tour="dashboard">▶ Start Tour</button>
 */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-tour]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var tourName = btn.getAttribute('data-tour');
      // Use relative path so it works under any slug (e.g. manual.w3ns.io/ventur/)
      var base = (document.querySelector('base') || {}).href || (window.location.origin + '/');
      fetch(base + 'assets/demos/' + tourName + '.json')
        .then(function (r) { return r.json(); })
        .then(function (config) { launchTour(config); })
        .catch(function (e) { console.warn('Tour not found:', tourName, e); });
    });
  });
});

function resolveAction(action, tour) {
  if (typeof action === 'function') return action;
  if (action === 'next')     return function () { tour.next(); };
  if (action === 'back')     return function () { tour.back(); };
  if (action === 'complete') return function () { tour.complete(); };
  if (action === 'cancel')   return function () { tour.cancel(); };
  return function () { tour.next(); };
}

function launchTour(config) {
  if (typeof Shepherd === 'undefined') {
    console.warn('Shepherd.js not loaded. Add it to extra_javascript in mkdocs.yml.');
    return;
  }
  var tour = new Shepherd.Tour({
    useModalOverlay: true,
    defaultStepOptions: {
      classes: 'bcms-tour-step',
      scrollTo: { behavior: 'smooth', block: 'center' },
      cancelIcon: { enabled: true }
    }
  });
  (config.steps || []).forEach(function (step) {
    if (step.buttons) {
      step = Object.assign({}, step, {
        buttons: step.buttons.map(function (btn) {
          return Object.assign({}, btn, { action: resolveAction(btn.action, tour) });
        })
      });
    }
    tour.addStep(step);
  });
  tour.start();
}
