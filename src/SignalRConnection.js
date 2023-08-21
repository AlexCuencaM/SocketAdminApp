import * as signalR from "@microsoft/signalr";
const URL = "http://localhost:5160/Chat";
class Connector{
    constructor() {
        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(URL)
            .withAutomaticReconnect()
            .build();
        this.connection.start().catch(err => document.write(err));
        this.events = (onMessageReceived) => {
            this.connection.on("GetChat", (message) => {
                onMessageReceived(message);
            });
        };
    }
    getChat = (messages) => {
        this.connection.send("GetChat", messages).then(_ => console.log("Sent :D"))
    }
    static getInstance() {
        if (!Connector.instance)
            Connector.instance = new Connector();
        return Connector.instance;
    }

}
export default Connector.getInstance;