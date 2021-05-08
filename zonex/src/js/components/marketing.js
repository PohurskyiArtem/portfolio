import vars from "../_vars";

if (vars.$marketing) {
  let counter = 0;
  let delay = 25000;

  const data = [
    {
      title: 'Faux shearling double-breasted coat',
      where: 'London, Great Britain',
      img: 'img/product-image.jpg'
    },
    {
      title: 'Blue jeans with patches',
      where: 'Rome, Italy',
      img: 'img/product-image2.jpg'
    },
    {
      title: 'Warm lined sweater',
      where: 'Odessa, Ukraine',
      img: 'img/product-image3.jpg'
    }
  ];

  const closeMarketing = () => {
    vars.$marketing.classList.remove('marketing--visible');
  }

  const changeMarketingData = () => {
    closeMarketing();

    setTimeout(() => {
      vars.$marketing.classList.add('marketing--visible');
    }, delay - 20000)

    vars.$marketing.querySelector('.marketing__title').textContent = data[counter].title;
    vars.$marketing.querySelector('.marketing__when-from').innerHTML = '15 minutes ago </br>' + data[counter].where;
    vars.$marketing.querySelector('.marketing__image img').setAttribute("src", data[counter].img);

    counter++;
    if(counter === data.length) {
      counter = 0;
    }
  }
  changeMarketingData();

  setInterval(changeMarketingData, delay);

  vars.$marketing.addEventListener('click', e => {
    if(e.target.classList.contains('marketing__close')) {
      closeMarketing();
    }
  })
}




