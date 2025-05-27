import './style.css'
import { getProducts } from './getProducts'

async function loadProjects() {
    const products = await getProducts()
    const list_container = document.querySelector('.projects_list')
    const preview_image = document.querySelector('.preview-image')
    const description = document.querySelector(".description")
    const tech_stack = document.querySelector(".tech_stack")
    const live_link = document.querySelector(".live-link")
    const code_link = document.querySelector(".code-link")
    const project_video_src = document.querySelector("#project-video-src")
    const project_video_el = document.querySelector('.project-video-el')
    const project_video_con = document.querySelector('.project-video-con')

    const handleVideoLoad = () => {
        project_video_con.classList.remove('loading')
    }

    products.forEach((element, index) => {
        const li = document.createElement('li')
        li.innerHTML = `
            <span class="sr-no">${index + 1}</span>
            <span class="project-name">${element.name}</span>
            <div class="image_con">
                <img src="${element.image}" alt="Project image" class="hidden-image">
            </div>
        `

        li.addEventListener('click', () => {
            description.textContent = element.description
            tech_stack.textContent = element.tech
            live_link.href = element.live
            code_link.href = element.code
            project_video_src.src = element.video

            project_video_el.removeEventListener('loadeddata', handleVideoLoad)
            project_video_el.removeEventListener('error', handleVideoLoad)

            project_video_con.classList.add('loading')

            project_video_el.addEventListener('loadeddata', handleVideoLoad, { once: true })
            project_video_el.addEventListener('error', handleVideoLoad, { once: true }) // Still remove shimmer if fails

            // #### For testing animation ####
            // setTimeout(() => {
            //     project_vid_src.src = element.video
            //     project_vid_src.parentElement.load()
            // }, 3000)

            project_video_el.load()

            list_container.querySelectorAll('li').forEach(item => {
                item.classList.remove("highlighted")
            })

            li.classList.add("highlighted")
        })
        list_container.appendChild(li)
    });

    if (products.length > 0)
        list_container.querySelector('li').click()
}

loadProjects()