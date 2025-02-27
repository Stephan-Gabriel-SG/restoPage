import appetizer from './images/appetizer.jpg'
import dish from './images/dish.jpg'
import koba from './images/koba.jpeg'
import beverages from './images/beverages.jpg'
const menuPage = ()=>{
    const content = document.getElementById('content')
    const titleLabel = document.createElement('h1')
    const menuWelcome = document.createElement("p")
    const menuImage = document.createElement('img')
    const homesItems = document.createElement('div')
    const objContent = [
        {
            subtitle:'Starters',
            img:appetizer,
            content:'Begin your journey with our selection of appetizers, each designed to tantalize your taste buds and set the stage for an extraordinary meal.'
        },
        {
            subtitle:'Main Courses',
            img:dish,
            content:"Dive into our main courses, where tradition meets innovation. From hearty stews to delicate flavors, every bite is a celebration of Antsirabe's rich culinary heritage."
        },
        {
            subtitle:'Desserts',
            img:koba,
            content:"End your meal on a sweet note with our delectable desserts. Indulge in local favorites and discover new, delightful treats that will leave you craving more."
        },
        {
            subtitle:"Beverages",
            img:beverages,
            content:"Complement your meal with our range of beverages. From refreshing local drinks to classic favorites, we have something to satisfy every palate."
        }

    ]

    menuImage.setAttribute('class','menu-image')
    homesItems.setAttribute('class', 'contentItems')
    titleLabel.innerText="Our Menu"
    menuWelcome.innerText="Welcome to our menu, a curated collection of Antsirabe's finest culinary delights. Each dish is crafted with passion and care, ensuring an unforgettable dining experience. Explore the rich flavors and traditions that define our cuisine."
    
    objContent.forEach(obj=>{
        const subtitle = document.createElement('span')
        const img = document.createElement('img')
        const contentText = document.createElement('p')
        subtitle.setAttribute('class','subtitle')
        img.setAttribute('class', 'plateImg')
        contentText.setAttribute('class', 'paragraph')
        subtitle.innerText=obj.subtitle
        img.src=obj.img
        contentText.innerHTML=obj.content
        homesItems.append(
            subtitle,
            img,
            contentText
        )
    })

    content.append(
        titleLabel,
        menuWelcome,
        homesItems
    )
}

export default menuPage