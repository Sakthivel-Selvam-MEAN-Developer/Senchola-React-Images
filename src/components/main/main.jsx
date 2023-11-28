import { useEffect, useState } from "react"


const Main = () => {
    const [images, setImages] = useState([])
    const API_URL = 'https://jsonplaceholder.typicode.com/photos?_limit=12'

    useEffect(() => {
        const data = async () => {
            const response = await fetch(API_URL)
            if (!response.ok) throw Error('Error : Data not fetched')
            const result = await response.json()
            setImages(result)
            console.log(images)
        }
        data()
    }, [])


    return (
        <div className="main bg-secondary d-flex flex-wrap justify-content-center pt-3 pb-5">
            {images.length ? (images.map((img) => (
                <div className="body col-3 m-2" key={img.id}>
                    <img src={img.url} alt={img.url} className="w-100"/>
                </div>
            ))
            ) : (
                <p className="text-center">Loading...</p>
            )}
        </div>
    )
}

export { Main }