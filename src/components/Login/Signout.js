
const history = useHistory
function Signout() {
    localStorage.clear()
    history.push('./pages/Home')
}


export default Signout