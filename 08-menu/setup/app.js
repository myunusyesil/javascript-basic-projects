/* 
  Bu zor bir projeydi. map ve reduce method'larını kullandık.
  Ayrıca dinamik olarak html içeriğini değiştirdik.

  Dokümanda menu içeriğini gösterdikten sonra, kategori buttonlarını 
  eklemek gerekiyor.
  Her işlemden sonra adım adım console.log koyarak 
  yapılan değişiklikleri valide etmek faydalı oldu.
*/

// data array
const menu = [{
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak",
    category: "steak",
    price: 36.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const section = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');

// doküman yüklenmesini dinliyoruz
addEventListener('DOMContentLoaded', function () {
  // show items, menu item'larını dinamik olarak listelemek için fonksiyon yazdık.
  // map methoduna array gönderdik.
  
  showMenuItems(menu);

  // gösterilen elemanların dinamik olarak kategori buttonlarını gösteriyoruz
  showFilterButtons();

  /* 
  filter items
  filterbtn'larını seçtik ve bir array'e atadık, daha sonra foreach ile hepsini döndük ve 
  gönderdiğimiz paremetre ile eventlistener'a soktuk sonra ilgili elamanın dataset'ini bulduk
  bu dataset category değişkenine atadık ve 
  menu array'ini filter methoduna soktuk callback func parametre göndererek daha önce kategorisini
  bulduğumuz tıklanan eleman ile menudeki kategorilerin aynı olup olmadığına baktık. 
  aynı olanları menuCategory array'ine döndürdük kaydettik.
  */

  const filterBtns = document.querySelectorAll('.filter-btn');
  // console.log(filterBtns);
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      let category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });

    /*
        Tıkladığımız button 'all' ise bütün menu array'indeki elemanları gösterdik
        eğer başka bir category tıklandı ise sadece ilgili menuCategory'sinde bulunan verileri gösterdik.
    */

      // console.log(menuCategory);
      if (category =="all") {
        showMenuItems(menu);
      }
      else {
        showMenuItems(menuCategory);
      }
    })
  });
});

/*  bir array'i map ederek değiştirdik ve içine istediğimiz değişkenleri koyduk.
    map fonksiyonu bütün array'i dönüyor ve istediğimiz değişiklikleri geri döndürüyor.
    yukarıda bu fonksiyonu çağırıyoruz.
*/
function showMenuItems(menuItems) {
  let showMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
      <img src=${item.img} class="photo" alt=${item.title}>
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price">$${item.price}</h4>
        </header>
        <p class="item-text">
        ${item.desc}
        </p>
      </div>
    </article>`
  });

  // döndürdüğümüz değeri string ifadeye çevirdik. 
  // array elemanları arasında virgül olmaması için çift tırnak kullandık
  showMenu = showMenu.join("");
  // console.log(showMenuItems);
  // seçtiğimiz değişkennin sectio (html elemanının içine) map fonksiyonundan döndürdüğümüz string değeri bastık.)
  section.innerHTML = showMenu;
}

function showFilterButtons() {
  const categories = menu.reduce( function (values, items){
    if (!values.includes(items.category)) {
      values.push(items.category);
    }
    return values;
  }, ["all"]);
  // console.log(categories);

  let showCategories = categories.map(function (category) {
    return ` <button class="filter-btn" type="button" data-id=${category}>${category}</button>`
  });
  showCategories = showCategories.join("");
  container.innerHTML = showCategories;

  // console.log(showCategories);
}