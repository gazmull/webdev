$(() => {
  $('.collapse')
    .on('show.bs.collapse', () => $('.collapse[class*=\'show\']').collapse('hide'))
    .on('shown.bs.collapse', ({ currentTarget: $this }) => {
      const currentPage = $(`.collapse[class*=\'show\'] .display-2`).text();
      document.title = currentPage;
      $(`.nav-link:contains('${currentPage}'):first`).addClass('active');
    })
    .on('hide.bs.collapse', () => $(`.nav-link[class*='active']`).removeClass('active'));

  const target = $('#pop-target');
  const pop = $('#pop');

  target.hover(
    () => {
      pop.show();
      new Popper(target, pop, { placement: 'right' });
    },
    () => pop.hide()
  );

  $('a.list-inline').hover(
    ({ currentTarget: $this }) => $('#thumbnail').css('background-image', `url('${$($this).attr('href')}')`),
    () => $('#thumbnail').css('background-image', '')
  );
}).on('keyup', e => {
  const code = e.keyCode || e.which || e.charCode;
  const toggle = id => {
    const el = $(`.collapse[id=${id}]`);

    if (el.hasClass('show'))
      return el.collapse('hide');

    el.collapse('show');
  };

  return toggle(`hb${code}`);
});
