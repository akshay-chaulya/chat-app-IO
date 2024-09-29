export default function getDate(providedDate: string) {
    const date = new Date(providedDate);
    // console.log(date > new Date())

    return date.toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit" })
}