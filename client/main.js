const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const addFortuneBtn = document.getElementById("newFortune")
const deleteFortuneBtn = document.getElementById("deleteFortune")
const editFortuneBtn = document.getElementById("editFortune")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
            console.log('getCompliment HIT')
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortunes/")
        .then(res => {
            const data = res.data;
            alert(data);
            console.log('getFortune HIT')
    });
};

const addNewFortune = () => {
    axios.post('http://localhost:4000/api/fortunes/', addText)
    .then(res => {
        const data = res.data
        alert(data)
    console.log('addNewFortune HIT')
    })
}
   


const deleteFortune = () => {
    axios.delete('http://localhost:4000/api/fortunes/index')
    .then(res => {
        const data = res.data
        alert(data),
    console.log('deleteNewFortune HIT')
    })
    };

const editFortune = () => {
    axios.put('http://localhost:4000/api/fortunes/index')
    .then(res => {
        const data = res.data
        alert(data),
    console.log('editFortune HIT')
    })
    };
    



fortuneBtn.addEventListener('click', getFortune)
complimentBtn.addEventListener('click', getCompliment)
addFortuneBtn.addEventListener('click', addNewFortune)
deleteFortuneBtn.addEventListener('click', deleteFortune)
editFortuneBtn.addEventListener('click', editFortune)