export default function BackEndUrl(url) {
    const Produccion = false

    if (Produccion) {
        return `https://sisabackend.herokuapp.com/${url}`
    } else {
        return `http://192.168.0.14:3000/${url}`
    }
}