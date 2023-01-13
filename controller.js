const fortunes = ["A dubious friend may be an enemy in camouflage.", "A faithful friend is a strong defense.", "A friend is a present you give yourself.", "A gambler not only will lose what he has, but also will lose what he doesn’t have.", "A good friendship is often more important than a passionate romance.", "A new outlook brightens your image and brings new friends.", "A person of words and not deeds is like a garden full of weeds."];



module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
    
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
    
        res.status(200).send(randomFortune);
    },

    addFortune: (req, res) => {
        const { addText } = req.body;
        fortunes.push(addText)
        res.status(200).send(`Fortunes: ` + fortunes)
    },

    deleteFortune: (req, res) => {
        const { value } = req.value;
        fortunes.splice(value, 1)
        res.status(200).send(fortunes)
    },

    editFortune: (req, res) => {
        const { value, text } = req.value;
        fortunes.splice(value, 1, text)
        res.status(200).send(fortunes)
    }
            }
        
        
    

    
