"use client";

import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import EventIcon from "@mui/icons-material/Event";
import { FaDiscord } from "react-icons/fa";
import { toast } from "sonner";

interface ConnectDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function ConnectDrawer({ open, onClose }: ConnectDrawerProps) {
  const [activeTab, setActiveTab] = useState<"quick" | "form">("quick");

  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: "95%", sm: "90%" },
          maxWidth: "710px",
          margin: "0 auto",
          borderTopLeftRadius: { xs: "12px", sm: "16px" },
          borderTopRightRadius: { xs: "12px", sm: "16px" },
          height: "auto",
          maxHeight: { xs: "85vh", sm: "80vh", md: "70vh" },
          backgroundColor: "#0a0a0a",
          color: "white",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        },
      }}
    >
      <Box sx={{ overflow: "auto", flexGrow: 1, p: { xs: 3, sm: 4, md: 6 } }}>
        {/* Social Icons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: { xs: 2, sm: 3, md: 4 }, mb: { xs: 2, sm: 3, md: 4 } }}>
          <a
            href="https://github.com/Atulkumarjha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon sx={{ color: "white", fontSize: { xs: 20, sm: 22, md: 25 } }} />
          </a>
          <a
            href="https://www.linkedin.com/in/atul-kumar-jha-09535b233/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon sx={{ color: "white", fontSize: { xs: 20, sm: 22, md: 25 } }} />
          </a>
          <a
            href="https://x.com/atul_kumar_jha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon sx={{ color: "white", fontSize: { xs: 20, sm: 22, md: 25 } }} />
          </a>
          <a
            href="https://discord.com/users/1067672509677322282"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord style={{ fontSize: 25 }} />
          </a>
        </Box>

        {/* Tabs with sliding background */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            gap: { xs: 1, sm: 2 },
            mb: { xs: 2, sm: 3 },
            backgroundColor: "#1c1d1c",
            borderRadius: "8px",
            p: { xs: 0.5, sm: 1 },
          }}
        >
          {/* Sliding background */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: activeTab === "quick" ? 0 : "50%", // move slider
              width: "50%", // full width of one tab
              height: "100%",
              backgroundColor: "#333",
              borderRadius: "8px",
              transition: "all 0.3s ease",
              zIndex: 0,
            }}
          />

          <Button
            onClick={() => setActiveTab("quick")}
            sx={{
              color: "white",
              zIndex: 1,
              flex: 1, // makes it take full tab width
              textTransform: "none",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              py: { xs: 0.5, sm: 1 },
            }}
          >
            Quick Connect
          </Button>

          <Button
            onClick={() => setActiveTab("form")}
            sx={{
              color: "white",
              zIndex: 1,
              flex: 1,
              textTransform: "none",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              py: { xs: 0.5, sm: 1 },
            }}
          >
            Fill a Form
          </Button>
        </Box>

        {/* Content Area */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            flexWrap: "wrap", // allows responsiveness
          }}
        >
          {activeTab === "quick" ? (
            <>
              {/* Email Button */}
              <Button
                href="mailto:jhaak301@gmail.com"
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: { xs: 0.5, sm: 1 },
                  p: { xs: 1.5, sm: 2, md: 3 },
                  backgroundColor: "#1a1a1a",
                  borderRadius: 2,
                  border: "1px solid #333",
                  color: "white",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#2a2a2a" },
                  minWidth: { xs: "130px", sm: "auto" },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <EmailIcon sx={{ color: "#00aaff", fontSize: { xs: 18, sm: 20, md: 24 } }} />
                  <h3 className="font-semibold text-xs sm:text-sm md:text-base">Email</h3>
                </Box>
                <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm">jhaak301@gmail.com</p>
                <p className="text-gray-500 text-[9px] sm:text-xs md:text-sm hidden sm:block">
                  Send me an email directly
                </p>
              </Button>

              {/* Book a Call Button */}
              <Button
                href="/contact"
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: { xs: 0.5, sm: 1 },
                  p: { xs: 1.5, sm: 2, md: 3 },
                  backgroundColor: "#1a1a1a",
                  borderRadius: 2,
                  border: "1px solid #333",
                  color: "white",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#2a2a2a" },
                  minWidth: { xs: "130px", sm: "auto" },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <EventIcon sx={{ color: "#ff6f61", fontSize: { xs: 18, sm: 20, md: 24 } }} />
                  <h3 className="font-semibold text-xs sm:text-sm md:text-base">Book a Call</h3>
                </Box>
                <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm">Schedule a discovery session</p>
                <p className="text-gray-500 text-[9px] sm:text-xs md:text-sm hidden sm:block">
                  Opens the detailed contact page to pick a time
                </p>
              </Button>

              {/* Status Bar */}
              <Box
                sx={{
                  mt: { xs: 1.5, sm: 2 },
                  p: { xs: 1.5, sm: 2 },
                  backgroundColor: "#0f0f0f",
                  borderRadius: 1,
                  textAlign: "center",
                  color: "#00ff00",
                  fontWeight: "bold",
                  width: "100%", // spans full row
                  fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
                }}
              >
                Currently available for new opportunities
              </Box>
            </>
          ) : (
            <Box sx={{ width: "100%" }}>
              <h3 className="text-sm sm:text-base font-medium mb-2 sm:mb-3">Send me a message</h3>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const data = {
                    name: (form.elements.namedItem('name') as HTMLInputElement).value,
                    email: (form.elements.namedItem('email') as HTMLInputElement).value,
                    message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
                  };

                  try {
                    const response = await fetch("/api/sendEmail", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(data),
                    });
                    
                    const result = await response.json();
                    
                    if (response.ok) {
                      toast.success("Message sent successfully!", {
                        description: "I'll get back to you as soon as possible.",
                      });
                      form.reset();
                    } else {
                      // Log the actual error for debugging
                      console.error("API Error:", result);
                      toast.error("Failed to send message", {
                        description: result.error || "Please try again or contact me directly.",
                      });
                    }
                  } catch (err) {
                    console.error("Error sending message:", err);
                    toast.error("Failed to send message", {
                      description: "Please check your connection and try again.",
                    });
                  }
                }}
              >
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: { xs: 1, sm: 1.5 } }}
                >
                  {/* Name + Email side by side */}
                  <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      className="flex-1 px-2 py-1.5 text-xs sm:text-sm rounded bg-[#1a1a1a] text-white border border-gray-700 focus:border-blue-500 outline-none"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="flex-1 px-2 py-1.5 text-xs sm:text-sm rounded bg-[#1a1a1a] text-white border border-gray-700 focus:border-blue-500 outline-none"
                    />
                  </div>

                  {/* Message box */}
                  <textarea
                    name="message"
                    placeholder="Message..."
                    required
                    maxLength={1000}
                    rows={3}
                    className="px-2 py-1.5 text-xs sm:text-sm rounded bg-[#1a1a1a] text-white border border-gray-700 focus:border-blue-500 outline-none resize-none"
                  />

                  {/* Send button */}
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 transition-colors py-1.5 sm:py-2 rounded text-xs sm:text-sm text-white font-medium"
                  >
                    Send
                  </button>
                </Box>
              </form>
            </Box>
          )}
        </Box>
      </Box>
    </Drawer>
  );
}
