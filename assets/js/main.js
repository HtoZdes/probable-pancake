(function () {
  // мобильное меню
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // фильтр объектов
  var chips = document.querySelectorAll('.chip[data-filter]');
  var rows = document.querySelectorAll('.prow[data-tags]');
  var counter = document.getElementById('count');
  if (chips.length && rows.length) {
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var f = chip.getAttribute('data-filter');
        chips.forEach(function (c) { c.setAttribute('aria-pressed', c === chip ? 'true' : 'false'); });
        var shown = 0;
        rows.forEach(function (r) {
          var ok = f === 'all' || r.getAttribute('data-tags').split(' ').indexOf(f) !== -1;
          r.hidden = !ok;
          if (ok) shown++;
        });
        if (counter) counter.textContent = shown;
      });
    });
  }
})();
