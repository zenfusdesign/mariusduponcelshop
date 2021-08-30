let stage = 'dev';
const host = stage === 'dev' ? 'http://localhost:5000' : 'https://roger-roger-b38ef.ondigitalocean.app';

const localStorageSession = localStorage.getItem('sessionId');

if(!localStorageSession) {
    window.location.replace(host);
}

console.log(localStorageSession);

async function getSession() {
    const response = await axios.get(`${host}/checkout/session/${localStorageSession}`);

    console.log(response);

    if(response.data.success) {
        console.log("Clearing local Storage");
        localStorage.clear();
        document.querySelector('.datacount').textContent = "0";
        document.querySelector('.datacount1').textContent = "0";
    } else {
        window.location.replace(host);
    }
}

getSession()