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
          maxWidth: "910px",
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
      <Box sx={{ overflowY: "auto", flexGrow: 1, p: 3 }}>
        {/* Social Icons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 4, mb: 2 }}>
      {/* Scrollable content */}
      <Box sx={{ overflowY: "auto", flexGrow: 1, p: 3 }}>
        {/* Social Icons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 4,
            marginBottom: 2,
          }}
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <GitHubIcon sx={{ color: "white", fontSize: 36 }} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon sx={{ color: "white", fontSize: 36 }} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <TwitterIcon sx={{ color: "white", fontSize: 36 }} />
          </a>
        </Box>

        {/* Drawer Header */}
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold">Connect with me 🤝</h2>
          <p className="mt-2 text-gray-400">
            Choose a method to connect quickly or fill out a form.
          </p>
        </div>

        {/* Tabs */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 3 }}>
          <Button
            variant={activeTab === "quick" ? "contained" : "outlined"}
            onClick={() => setActiveTab("quick")}
            sx={{
              backgroundColor: activeTab === "quick" ? "#333" : "transparent",
              color: "white",
              transition: "all 0.3s ease",
            }}
          >
            Quick Connect
          </Button>
          <Button
            variant={activeTab === "form" ? "contained" : "outlined"}
            onClick={() => setActiveTab("form")}
            sx={{
              backgroundColor: activeTab === "form" ? "#333" : "transparent",
              color: "white",
              transition: "all 0.3s ease",
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
            flexWrap: "wrap",
            flexDirection: "row", // <-- horizontal layout
            gap: 2,
            flexWrap: "wrap", // allows responsiveness
          }}
        >
          {activeTab === "quick" ? (
            <>
              {/* Email Button */}
              <Button
                href="mailto:hello@aayushbharti.in"
                sx={{
                  flex: 1,
                  flex: 1, // take equal width
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
                <p className="text-gray-400">hello@aayushbharti.in</p>
                <p className="text-gray-500 text-sm">Send me an email directly</p>
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
                <p className="text-gray-500 text-sm">Book a call on my calendar</p>
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
                  width: "100%",
                  width: "100%", // spans full row
                }}
              >
                Currently available for new opportunities
              </Box>
            </>
          ) : (
            <Box sx={{ width: "100%" }}>
              <h3 className="text-lg font-semibold mb-2">Send me a message</h3>
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

                    // Clear all fields after submission
                    form.reset();
                  } catch (err) {
                    console.error("Error sending message:", err);
                  }
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="p-2 rounded bg-[#1a1a1a] text-white border border-gray-700"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    required
                    className="p-2 rounded bg-[#1a1a1a] text-white border border-gray-700"
                  />
                  <textarea
                    name="message"
                    placeholder="What would you like to discuss?"
                    required
                    maxLength={1000}
                    rows={5}
                    className="p-2 rounded bg-[#1a1a1a] text-white border border-gray-700 resize-none"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 transition-colors p-3 rounded text-white font-semibold flex items-center justify-center gap-2"
                  >
                    <span>Send message</span>
                  </button>
                </Box>
              </form>
              <h3 className="text-lg font-semibold">Fill a Form Content</h3>
              <p className="mt-2 text-gray-400">
                This is the fill a form section. You can place an input form here for users to submit their info.
              </p>
            </Box>
          )}
        </Box>
      </Box>
    </Drawer>
  );
}
