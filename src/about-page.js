
const aboutPage = ()=>{
    const content = document.getElementById('content')
    const titleLabel = document.createElement('h1')
    const aboutIntro = document.createElement('p')
    const contentItems = document.createElement('div')
    const objContent = [
        {
            subtitle:'Our Story',
            content:"Founded by a team of food enthusiasts with deep roots in Antsirabe, we set out on a journey to showcase the incredible diversity and richness of our local cuisine. From humble beginnings, our dream has grown into a thriving hub for food lovers who want to explore the authentic tastes of Madagascar."
        },
        {
            subtitle:'Our Mission',
            content:"At Antsirabe Gourmet, we believe that food is more than just nourishment – it's an experience, a way to connect with culture, and a celebration of community. We are dedicated to preserving and promoting the culinary heritage of Antsirabe, while also embracing innovation and creativity in our dishes."
        },
        {
            subtitle:'',
            content:"Thank you for joining us on this culinary adventure. We invite you to explore our menu, savor the flavors, and become a part of the Antsirabe Gourmet family."
        }

    ]

    aboutIntro.setAttribute('class', 'aboutIntro')
    contentItems.setAttribute('class', 'contentItems')
    titleLabel.innerText="About Us"
    aboutIntro.innerText="Welcome to Antsirabe Gourmet, where culinary passion meets the rich traditions of Madagascar. Our mission is to celebrate and share the unique flavors of Antsirabe with the world, bringing people together through unforgettable dining experiences."
    objContent.forEach(obj=>{
        const subtitle = document.createElement('span')
        const contentText = document.createElement('p')
        subtitle.setAttribute('class','subtitle')
        contentText.setAttribute('class', 'paragraph')
        subtitle.innerText=obj.subtitle
        contentText.innerHTML=obj.content
        contentItems.append(
            subtitle,
            contentText
        )
    })

    content.append(
        titleLabel,
        aboutIntro,
        contentItems
    )
}

export default aboutPage