let messages = [];

let id = 0;

module.exports = {
    create: (req, res) => {
        newMessage = {
            id: id,
            text: req.body.text,
            time: req.body.time
        }

        messages.push(newMessage);
        id++;
        res.status(200).send(messages);
    },

    read: (req, res) => {
        res.status(200).send(messages);
    },

    update: (req,res) => {
        let index = messages.findIndex(element => element.id === +req.params.id);
        messages[index] = {
            id: messages[index].id,
            text: req.body.text || messages[index].text,
            time: messages[index].time
        }
        res.status(200).send(messages);
    },
    
      delete: (req, res) => {
        let index = messages.findIndex(element => element.id === +req.params.id);
        messages.splice(index, 1);
        res.status(200).send(messages);
    }

}