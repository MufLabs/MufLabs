import { ChatController } from "./controllers/ChatController";
export function registerRoutes(app) {
    const controller = new ChatController();
    app.post("/api/v1/chat", controller.chat);
}
//# sourceMappingURL=routes.js.map