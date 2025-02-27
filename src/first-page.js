import localDishes from './home.png'
const firstPage = ()=>{
    const content = document.getElementById('content')
    const titleLabel = document.createElement('h1')
    const subTitleLabel = document.createElement('h3')
    const paragraph = document.createElement('p')
    const myRestaurantImage = document.createElement('img')

    titleLabel.innerText="Welcome to Antsirabe's local Food"
    myRestaurantImage.src=localDishes
    subTitleLabel.innerText="You can try it !"
    paragraph.innerText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati ipsa eaque provident perferendis ullam quidem, maiores, voluptate maxime cum debitis sapiente, culpa fugiat est excepturi ab laborum ducimus possimus voluptatem."

    content.append(
        titleLabel,
        myRestaurantImage,
        subTitleLabel,
        paragraph
    )
}

export default firstPage