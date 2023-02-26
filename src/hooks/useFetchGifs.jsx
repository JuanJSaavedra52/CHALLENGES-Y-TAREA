import { useEffect, useState} from "react"
import { GetGifs } from "../components/GetGifs"

export const useFetchGifs = (category) => {
    const[images, setImages] = useState([]);

    const getImages = async() => {
        const images = await GetGifs(category)
        setImages(images);
    }

    useEffect(() => {
        getImages();
    }, [])

    return {
        images: images,
        isoading: false
    }
}