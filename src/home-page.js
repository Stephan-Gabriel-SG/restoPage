import localDishes from './home.png'
const homePage = ()=>{
    const content = document.getElementById('content')
    const titleLabel = document.createElement('h1')
    const homeImage = document.createElement('img')
    const homesItems = document.createElement('div')
    const objContent = [
        {
            subtitle:'Discover the unique flavors of Antsirabe, the culinary gem of Madagascar',
            content:'Embark on a gastronomic journey where each dish tells a story rich in traditions and authentic flavors. Whether you are a local or a curious visitor, let yourself be captivated by the delights our beautiful city has to offer.'
        },
        {
            subtitle:'Our Specialty',
            content:'At <strong>Antsirabe Gourmet</strong>, we are passionate about showcasing our culinary heritage. Each dish we offer is prepared with care and love, using the finest local ingredients. Come and discover why Antsirabe is a sought-after culinary destination and let your taste buds travel!'
        },
        {
            subtitle:'Why Choose Antsirabe Gourmet?',
            content:"At <strong>Antsirabe Gourmet</strong>, we are committed to providing you with an unforgettable dining experience. Our dedication to quality, tradition, and innovation ensures that every visit is a memorable one. Whether you're here to explore our rich culinary heritage or simply enjoy a delicious meal, we've got something special for you."
        }

    ]

    homeImage.setAttribute('class','home-image')
    homesItems.setAttribute('class', 'homesItems')
    titleLabel.innerText="Welcome to Antsirabe Gourmet!"
    homeImage.src=localDishes
    
    objContent.forEach(obj=>{
        const subtitle = document.createElement('span')
        const contentText = document.createElement('p')
        subtitle.setAttribute('class','subtitle')
        contentText.setAttribute('class', 'paragraph')
        subtitle.innerText=obj.subtitle
        contentText.innerHTML=obj.content
        homesItems.append(
            subtitle,
            contentText
        )
    })

    content.append(
        titleLabel,
        homeImage,
        homesItems
    )
}

export default homePage