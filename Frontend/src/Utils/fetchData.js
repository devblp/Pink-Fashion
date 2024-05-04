const fetchData = async(url,option={})=>{
    try {
        const res=await fetch(import.meta.env.VITE_BASE_API+url,option)
        const data=await res.json()
        return data
    } catch (error) {
        alert(error)
    }
}
export default fetchData