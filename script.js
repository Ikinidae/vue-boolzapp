const chats = new Vue ({
    el : "#boolzapp",
    data : {
        activeChat : 0,
        contacts : [
            {
                name : "Nelly Furtado",
                avatar : "img/Nelly.png",
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
                avatar : "img/Vasetto_di_miele.png",
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
                name : "Isabella",
                avatar : "img/Isabella.jpg",
                visible : true,
                messages : [
                    {
                        time : "15:30",
                        message : "Isinooo",
                        status : "sent"
                    },
                    {
                        time : "15:30",
                        message : "Com'è andato l'esame?",
                        status : "sent"
                    },
                    {
                        time : "15:30",
                        message : "Non mi voglio ancora sbilanciare",
                        status : "received"
                    },
                    {
                        time : "15:30",
                        message : "Ci sta ahahahha",
                        status : "sent"
                    }
                ] 
            },
            {
                name : "Chiara",
                avatar : "img/Chiara.png",
                visible : true,
                messages : [
                    {
                        time : "15:30",
                        message : "Oiii stase partitina a lol?",
                        status : "received"
                    },
                    {
                        time : "15:30",
                        message : "Avogliaa",
                        status : "sent"
                    },
                    {
                        time : "15:30",
                        message : "Come procede in uni?",
                        status : "sent"
                    },
                    {
                        time : "15:30",
                        message : "Ora stiamo testando una dobermann!",
                        status : "received"
                    },
                    {
                        time : "15:30",
                        message : "È stracarinaaa",
                        status : "received"
                    }
                ] 
            },
            {
                name : "Mamma",
                avatar : "img/index.png",
                visible : true,
                messages : [
                    {
                        time : "15:30",
                        message : "Ika metti l'acqua per la pasta",
                        status : "received"
                    },
                    {
                        time : "15:30",
                        message : "Sto partendo ora dal negozio",
                        status : "received"
                    },
                    {
                        time : "15:30",
                        message : "Vabbb",
                        status : "sent"
                    }                
                ] 
            },
            {
                name : "Thomas",
                avatar : "img/Thomas.png",
                visible : true,
                messages : [
                    {
                        time : "15:30",
                        message : "Giovedì sera ci sei per una partita a tennis?",
                        status : "sent"
                    },
                    {
                        time : "15:30",
                        message : "Si certo, per che ora?",
                        status : "received"
                    },
                    {
                        time : "15:30",
                        message : "8.30?",
                        status : "sent"
                    },
                    {
                        time : "15:30",
                        message : "Apposto!",
                        status : "received"
                    }
                ] 
            }
        ],
        newMessage : "",
        search : "",
    },

    methods : {
        changeChat(activeChat) {
            this.activeChat = activeChat;
        },

        addMessage() {
            const mex = {
                time : "15:30",
                message : this.newMessage,
                status : "sent"
            };
            this.contacts[this.activeChat].messages.push(mex);
            this.newMessage = "";

            setTimeout(() => {
                const answer = {
                    time : "15:30",
                    message : "ok",
                    status : "received"
                };
                this.contacts[this.activeChat].messages.push(answer);

            }, 1000);
        }
    },
    computed : {
        filteredContacts: function(){
            return this.contacts.filter((item) => {
                return item.name.match(this.search);
            })
        }
    }
});