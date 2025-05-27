import './style.css'
import { getProducts } from './getProducts'

async function loadProjects(){
    const products = await getProducts()
    const list_container = document.querySelector('.projects_list')
    const preview_image = document.querySelector('.preview-image')
    const description = document.querySelector(".description")
    const tech_stack = document.querySelector(".tech_stack")
    const live_link = document.querySelector(".live-link")
    const code_link = document.querySelector(".code-link")
    const project_vid = document.querySelector("#project-video")

    products.forEach((element, index) => {
        const li = document.createElement('li')
        li.innerHTML = `
            <span class="sr-no">${index + 1}</spam>
            <spam class="project-name">${element.name}</span>
            <div class="image_con">
                <img src="${element.image}" alt="Project image" class="hidden-image">
            </div>
        `

        li.addEventListener('click', () => {
            description.textContent = element.description
            tech_stack.textContent = element.tech
            live_link.href = element.live
            code_link.href = element.code
            project_vid.src = element.video
            project_vid.parentElement.load()
            console.log(project_vid)

            // styling
            list_container.querySelectorAll('li').forEach(item => {
                item.classList.remove("highlighted")
            })

            li.classList.add("highlighted")
        })
        list_container.appendChild(li)
    });

    if(products.length > 0)
        list_container.querySelector('li').click()
}

loadProjects()