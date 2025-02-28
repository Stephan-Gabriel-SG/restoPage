import appetizer from './images/appetizer.jpg'
import dish from './images/dish.jpg'
import koba from './images/koba.jpeg'
import beverages from './images/beverages.jpg'
const menuPage = ()=>{
    const content = document.getElementById('content')
    const titleLabel = document.createElement('h1')
    const menuWelcome = document.createElement("p")
    const menuImage = document.createElement('img')
    const contentItems = document.createElement('div')
    const startersList = [
        "<strong>Vary Amin'anana</strong>",
        "<strong>Sambos</strong>",
        "<strong>Ravitoto Balls</strong>",
        "<strong>Lasary Voatabia</strong>",
        "<strong>Mofo Akondro</strong>",
        "<strong>Akara</strong>" 
    ];
    
    const mainCoursesList = [
        "<strong>Ravitoto</strong>",
        "<strong>Romazava</strong>",
        "<strong>Akoho sy Voanio</strong>",
        "<strong>Varanga</strong>",
        "<strong>Hen'omby Ritra</strong>",
        "<strong>Tilapia à la Madagascar</strong>" 
    ];
    
    const dessertsList = [
        "<strong>Koba</strong>",
        "<strong>Mofo Gasy</strong>", 
        "<strong>Bonbon Coco</strong>" ,
        "<strong>Ranonapango</strong>" ,
        "<strong>Achard Banane</strong>" ,
        "<strong>Compote de Papaye</strong>"
    ];
    
    const beveragesList = [
        "<strong>Ranon'ampango</strong>",
        "<strong>Betsabetsa</strong>",
        "<strong>Litchel</strong>",
        "<strong>Ranovola</strong>",
        "<strong>Ginger Beer</strong>",
        "<strong>Tamarind Juice</strong>"
    ];
    
    const objContent = [
        {
            subtitle:'Starters',
            img:appetizer,
            dishList:startersList,
            content:'Begin your journey with our selection of appetizers, each designed to tantalize your taste buds and set the stage for an extraordinary meal.'
    
        },
        {
            subtitle:'Main Courses',
            img:dish,
            dishList:mainCoursesList,
            content:"Dive into our main courses, where tradition meets innovation. From hearty stews to delicate flavors, every bite is a celebration of Antsirabe's rich culinary heritage."
        },
        {
            subtitle:'Desserts',
            img:koba,
            dishList:dessertsList,
            content:"End your meal on a sweet note with our delectable desserts. Indulge in local favorites and discover new, delightful treats that will leave you craving more."
        },
        {
            subtitle:"Beverages",
            img:beverages,
            dishList:beveragesList,
            content:"Complement your meal with our range of beverages. From refreshing local drinks to classic favorites, we have something to satisfy every palate."
        }

    ]

    menuImage.setAttribute('class','menu-image')
    menuWelcome.setAttribute('class', 'menuWelcome')
    contentItems.setAttribute('class', 'contentItems menu')
    titleLabel.innerText="Our Menu"
    menuWelcome.innerText="Welcome to our menu, a curated collection of Antsirabe's finest culinary delights. Each dish is crafted with passion and care, ensuring an unforgettable dining experience. Explore the rich flavors and traditions that define our cuisine."
    
    objContent.forEach(obj=>{
        const subtitle = document.createElement('span')
        const card = document.createElement('div')
        const cardImg = document.createElement('img')
        const cardTextContainer = document.createElement('div')
        const cardTextDescription = document.createElement('p')
        const cardTextListDishes = document.createElement('div')
        subtitle.setAttribute('class','subtitle')
        card.setAttribute('class','card')
        cardImg.setAttribute('class', 'plateImg')
        cardTextContainer.setAttribute('class','cardTextContainer')
        cardTextDescription.setAttribute('class','paragraph')
        cardTextListDishes.setAttribute('class','dishesContainer')
        subtitle.innerText=obj.subtitle
        cardImg.src=obj.img
        cardTextDescription.innerHTML=obj.content
        cardTextListDishes.innerHTML=obj.dishList.join('')
        cardTextContainer.append(cardTextDescription,cardTextListDishes)
        card.append(cardImg,cardTextContainer)
        contentItems.append(
            subtitle,
            card
        )
    })

    content.append(
        titleLabel,
        menuWelcome,
        contentItems
    )
}

export default menuPage