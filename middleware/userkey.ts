export default function ({ data, redirect }) {
    let userkey = localStorage.getItem("userKey");



    if (!userkey) {
        return redirect('/login')
    }
    // else {
    //     return redirect('/main')
    // }
}