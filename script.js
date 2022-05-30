const chats = new Vue ({
    el : "#boolzapp",
    data : {
        activeChat : 0,
        contacts : [
            {
                name : "Nelly Furtado",
                avatar : "img/index.png",
                visible : true,
                messages : [
                    {
                        time : "15:30",
                        message : "Nellyyy",
                        status : "sent"
                    },
                    {
                        time : "15:30",
                        message : "Che fai?",
                        status : "sent"
                    },
                    {
                        time : "15:31",
                        message : "Faccio una partita a lol, tu?",
                        status : "received"
                    },
                    {
                        time : "15:33",
                        message : "L'esercizio :(",
                        status : "sent"
                    }
                ] 
            },
            {
                name : "Vasetto di Miele",
                avatar : "img/index.png",
                visible : true,
                messages : [
                    {
                        time : "15:30",
                        message : "Babyy",
                        status : "received"
                    },
                    {
                        time : "15:30",
                        message : "Vieni in ds?",
                        status : "received"
                    },
                    {
                        time : "15:30",
                        message : "Okii",
                        status : "sent"
                    },
                ] 
            },
            {
                name : "Stefano",
                avatar : "img/index.png",
                visible : true,
                messages : [
                    {
                        time : "15:30",
                        message : "Yooooo",
                        status : "sent"
                    },
                    {
                        time : "15:30",
                        message : "Come va?",
                        status : "sent"
                    },
                    {
                        time : "15:30",
                        message : "Oii tutto bene tu?",
                        status : "received"
                    },
                    {
                        time : "15:30",
                        message : "Tutto bene!",
                        status : "sent"
                    }
                ] 
            },
            {
                name : "Stefano",
                avatar : "img/index.png",
                visible : true,
                messages : [
                    {
                        time : "15:30",
                        message : "Yooooo",
                        status : "sent"
                    },
                    {
                        time : "15:30",
                        message : "Come va?",
                        status : "sent"
                    },
                    {
                        time : "15:30",
                        message : "Oii tutto bene tu?",
                        status : "received"
                    },
                    {
                        time : "15:30",
                        message : "Tutto bene!",
                        status : "sent"
                    }
                ] 
            },
            {
                name : "Stefano",
                avatar : "img/index.png",
                visible : true,
                messages : [
                    {
                        time : "15:30",
                        message : "Yooooo",
                        status : "sent"
                    },
                    {
                        time : "15:30",
                        message : "Come va?",
                        status : "sent"
                    },
                    {
                        time : "15:30",
                        message : "Oii tutto bene tu?",
                        status : "received"
                    },
                    {
                        time : "15:30",
                        message : "Tutto bene!",
                        status : "sent"
                    }
                ] 
            },
            {
                name : "Stefano",
                avatar : "img/index.png",
                visible : true,
                messages : [
                    {
                        time : "15:30",
                        message : "Yooooo",
                        status : "sent"
                    },
                    {
                        time : "15:30",
                        message : "Come va?",
                        status : "sent"
                    },
                    {
                        time : "15:30",
                        message : "Oii tutto bene tu?",
                        status : "received"
                    },
                    {
                        time : "15:30",
                        message : "Tutto bene!",
                        status : "sent"
                    }
                ] 
            }
        ]
    },

    methods : {
        changeChat(activeChat) {
            this.activeChat = activeChat;
        }
    }
});

// console.log(contacts[0].messages.message);