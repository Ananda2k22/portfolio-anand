import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import path from "path";
import fs from "fs";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const parsed = insertContactMessageSchema.safeParse(req.body);
      
      if (!parsed.success) {
        return res.status(400).json({ 
          error: "Invalid request", 
          details: parsed.error.errors 
        });
      }

      const message = await storage.createContactMessage(parsed.data);
      
      return res.status(201).json({ 
        success: true, 
        message: "Message sent successfully",
        id: message.id 
      });
    } catch (error) {
      console.error("Error creating contact message:", error);
      return res.status(500).json({ error: "Failed to send message" });
    }
  });

  app.get("/api/resume", async (req, res) => {
    try {
      const resumePath = path.join(process.cwd(), "attached_assets", "Ananda_M._1765125270223.docx");
      
      if (fs.existsSync(resumePath)) {
        res.setHeader("Content-Disposition", "attachment; filename=Modem_Ananda_Resume.docx");
        res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
        return res.sendFile(resumePath);
      } else {
        return res.status(404).json({ error: "Resume not found" });
      }
    } catch (error) {
      console.error("Error serving resume:", error);
      return res.status(500).json({ error: "Failed to download resume" });
    }
  });

  return httpServer;
}
