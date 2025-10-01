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
          width: "90%",
          maxWidth: "710px",
          margin: "0 auto",
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
          height: "38vh",
          backgroundColor: "#0a0a0a",
          color: "white",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        },
      }}
    >
      <Box sx={{ overflowY: "auto", flexGrow: 1, p: 6 }}>
        {/* Social Icons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 4, mb: 4 }}>
          <a
            href="https://github.com/Atulkumarjha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon sx={{ color: "white", fontSize: 25 }} />
          </a>
          <a
            href="https://www.linkedin.com/in/atul-kumar-jha-09535b233/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon sx={{ color: "white", fontSize: 25 }} />
          </a>
          <a
            href="https://x.com/atul_kumar_jha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon sx={{ color: "white", fontSize: 25 }} />
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
            gap: 2,
            mb: 3,
            backgroundColor: "#1c1d1c",
            borderRadius: "8px",
            p: 1,
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
            flexWrap: "wrap",
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
                  gap: 1,
                  p: 3,
                  backgroundColor: "#1a1a1a",
                  borderRadius: 2,
                  border: "1px solid #333",
                  color: "white",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#2a2a2a" },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <EmailIcon sx={{ color: "#00aaff" }} />
                  <h3 className="font-semibold">Email</h3>
                </Box>
                <p className="text-gray-400">jhaak301@gmail.com</p>
                <p className="text-gray-500 text-sm">
                  Send me an email directly
                </p>
              </Button>

              {/* Book a Call Button */}
              <Button
                href="/"
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 1,
                  p: 3,
                  backgroundColor: "#1a1a1a",
                  borderRadius: 2,
                  border: "1px solid #333",
                  color: "white",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#2a2a2a" },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <EventIcon sx={{ color: "#ff6f61" }} />
                  <h3 className="font-semibold">Book a Call</h3>
                </Box>
                <p className="text-gray-400">Schedule a time slot</p>
                <p className="text-gray-500 text-sm">
                  Book a call on my calendar
                </p>
              </Button>

              {/* Status Bar */}
              <Box
                sx={{
                  mt: 2,
                  p: 2,
                  backgroundColor: "#0f0f0f",
                  borderRadius: 1,
                  textAlign: "center",
                  color: "#00ff00",
                  fontWeight: "bold",
                  width: "100%", // spans full row
                  width: "100%",
                }}
              >
                Currently available for new opportunities
              </Box>
            </>
          ) : (
            <Box sx={{ width: "100%" }}>
              <h3 className="text-base font-medium mb-3">Send me a message</h3>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.target as any;
                  const data = {
                    name: form.name.value,
                    email: form.email.value,
                    message: form.message.value,
                  };

                  try {
                    await fetch("/api/sendEmail", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(data),
                    });
                    form.reset();
                  } catch (err) {
                    console.error("Error sending message:", err);
                  }
                }}
              >
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
                >
                  {/* Name + Email side by side */}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      className="flex-1 px-2 py-1.5 text-sm rounded bg-[#1a1a1a] text-white border border-gray-700 focus:border-blue-500 outline-none"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="flex-1 px-2 py-1.5 text-sm rounded bg-[#1a1a1a] text-white border border-gray-700 focus:border-blue-500 outline-none"
                    />
                  </div>

                  {/* Message box */}
                  <textarea
                    name="message"
                    placeholder="Message..."
                    required
                    maxLength={1000}
                    rows={3}
                    className="px-2 py-1.5 text-sm rounded bg-[#1a1a1a] text-white border border-gray-700 focus:border-blue-500 outline-none resize-none"
                  />

                  {/* Send button */}
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 transition-colors py-2 rounded text-sm text-white font-medium"
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
