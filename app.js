const Menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
]


let buttons = document.getElementsByClassName('btn-container')[0].children

for (let index = 0; index < buttons.length; index++) {
  let button = buttons[index];
  button.addEventListener("click", filterChanged);
  
}

function filterChanged() {
  let filterName = this.getAttribute('data-id')
  updateScreen(filterName)
}

function updateScreen(filterName){
  const menuBody = document.getElementsByClassName('section-center')[0]
  menuBody.innerHTML = '';
  
  let menuItems;

  if (filterName !== 'All'){
    menuItems = Menu.filter(item => item.category == filterName)
  }
  else{
    menuItems = Menu
  }
    
  
  menuItems.forEach(item => {
    
    menuBody.appendChild(createMenuItem(
      item.title, 
      item.price, 
      item.desc, 
      item.img))
  })

}

function createMenuItem(itemName,itemPrice,itemText,imgSrc){
  const item = document.createElement("div");
  item.className = 'menu-items col-lg-6 col-sm-12'

  const img = document.createElement('img')
  img.className = 'photo'
  img.src = imgSrc

  const info = document.createElement('div')
  info.className = 'menu-info'

  const title = document.createElement('div')
  title.className = 'menu-title'

  const name = document.createElement('h4')
  name.innerHTML = itemName

  const price = document.createElement('h4')
  price.innerHTML = itemPrice

  const text = document.createElement('div')
  text.className = 'menu-text'
  text.innerHTML = itemText

  title.appendChild(name)
  title.appendChild(price)

  info.appendChild(title)
  info.appendChild(text)

  item.appendChild(img)
  item.appendChild(info)

  return item;


}


updateScreen('All')
