let projects_path = '/projects.json';

export async function getProducts() {
    try {
        const res = await fetch(projects_path);
        if(!res.ok)
            throw new Error('http error' + res.status)

        const data = res.json()
        return data
    }catch(error){
        console.log(error)
    }
}