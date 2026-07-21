import { ConversationService } from "../services/ConversationService";
export class ChatController {
    service = new ConversationService();
    chat = async (req, res) => {
        const result = await this.service.execute(req.body.prompt);
        res.json(result);
    };
}
//# sourceMappingURL=ChatController.js.map