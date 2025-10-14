"use client"

import { motion } from "framer-motion"
import { } from "lucide-react"
import { useState } from "react"
import profile from "../../public/assets/atulkumarjha.jpg"
import Image from "next/image"

interface ConnectionAvatar {
  id: string
  src: string
  alt: string
  size: "sm" | "md" | "lg"
  position: {
    top: string
    left: string
  }
}

const connections: ConnectionAvatar[] = [
  {
    id: "1",
    src: "https://randomuser.me/api/portraits/men/32.jpg",
    alt: "Connection",
    size: "sm",
    position: { top: "55%", left: "28%" },
  },
  {
    id: "2",
    src: "https://randomuser.me/api/portraits/men/7.jpg",
    alt: "Connection",
    size: "lg",
    position: { top: "53%", left: "63%" },
  },
  {
    id: "3",
    src: "https://randomuser.me/api/portraits/women/24.jpg",
    alt: "Connection",
    size: "md",
    position: { top: "4%", left: "32%" },
  },
  {
    id: "4",
    src: "https://randomuser.me/api/portraits/women/35.jpg",
    alt: "Connection",
    size: "sm",
    position: { top: "8%", left: "78%" },
  },
  {
    id: "5",
    src: "https://randomuser.me/api/portraits/women/45.jpg",
    alt: "Connection",
    size: "sm",
    position: { top: "7%", left: "11%" },
  },
]

const sizeClasses = {
  sm: "w-10 h-10",
  md: "w-14 h-14",
  lg: "w-16 h-16",
}

export function CollaborationCard() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
  className="group relative flex size-full flex-col justify-between overflow-hidden rounded-xl bg-zinc-950 border border-zinc-800/50 shadow-2xl min-h-[180px] sm:min-h-[200px] md:min-h-[220px]"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="size-full">
        <div className="absolute flex h-full w-full flex-col">
          <div className="relative h-full [mask-image:linear-gradient(to_right,transparent,black_40%,black_60%,transparent)]">
            <svg
              className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[350px] sm:max-w-[500px] md:max-w-[704px] h-auto [mask-image:linear-gradient(to_right,transparent,black_20%,black_90%,transparent)]"
              viewBox="0 0 637 250"
              preserveAspectRatio="xMidYMid meet"
            >
              <g clipPath="url(#clip0_170_308)">
                <g filter="url(#filter0_i_170_308)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M-24.5145 175.237C5.95935 205.744 55.3673 205.744 85.8412 175.237C116.315 144.731 116.315 95.2694 85.8412 64.7626C55.3673 34.2558 5.95935 34.2558 -24.5145 64.7626L-79.6924 120L-24.5145 175.237ZM-30.1683 59.1027L-85.3462 114.34L-91 120L-85.3462 125.66L-30.1683 180.897C3.42807 214.53 57.8986 214.53 91.495 180.897C102.486 169.894 109.882 156.654 113.681 142.641C117.481 156.654 124.876 169.894 135.868 180.897C169.464 214.53 223.935 214.53 257.531 180.897L312.709 125.66L318.363 120L312.709 114.34L257.531 59.1027C223.935 25.47 169.464 25.47 135.868 59.1027C124.876 70.106 117.481 83.3459 113.681 97.359C109.882 83.3459 102.486 70.106 91.495 59.1027C57.8986 25.47 3.42807 25.47 -30.1683 59.1027ZM251.877 175.237C221.403 205.744 171.995 205.744 141.522 175.237C111.048 144.731 111.048 95.2694 141.522 64.7626C171.995 34.2558 221.403 34.2558 251.877 64.7626L307.055 120L251.877 175.237ZM385.118 175.237C415.592 205.744 465 205.744 495.474 175.237C525.948 144.731 525.948 95.2694 495.474 64.7626C465 34.2558 415.592 34.2558 385.118 64.7626L329.94 120L385.118 175.237ZM379.464 59.1027L324.287 114.34L318.633 120L324.287 125.66L379.464 180.897C413.061 214.53 467.531 214.53 501.128 180.897C511.657 170.356 518.887 157.762 522.816 144.403C526.746 157.762 533.975 170.356 544.505 180.897C578.101 214.53 632.572 214.53 666.168 180.897L721.346 125.66L727 120L721.346 114.34L666.168 59.1027C632.572 25.47 578.101 25.47 544.505 59.1027C533.975 69.6438 526.746 82.2376 522.816 95.5975C518.887 82.2376 511.657 69.6438 501.128 59.1027C467.531 25.47 413.061 25.47 379.464 59.1027ZM550.159 175.237C580.633 205.744 630.041 205.744 660.514 175.237L715.692 120L660.514 64.7626C630.041 34.2558 580.633 34.2558 550.159 64.7626C519.685 95.2694 519.685 144.731 550.159 175.237Z"
                    fill="#2A2A2A"
                    fillOpacity="0.3"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_i_170_308"
                  x="-91"
                  y="33.8782"
                  width="818"
                  height="173.744"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="0.75" />
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.647059 0 0 0 0 0.682353 0 0 0 0 0.721569 0 0 0 0.32 0"
                  />
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_170_308" />
                </filter>
                <clipPath id="clip0_170_308">
                  <rect width="704" height="250" fill="white" transform="translate(-34)" />
                </clipPath>
              </defs>
            </svg>

            <motion.span
              className="absolute top-2 sm:top-2.5 left-1/2 -translate-x-1/2"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="relative mt-4 sm:mt-5 md:mt-6">
                <svg className="mx-auto w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[130px] md:h-[130px]" viewBox="0 0 148 148" fill="none">
                  <g filter="url(#filter0_i_0_1)">
                    <rect x="16" y="16" width="116" height="116" rx="58" fill="#2A2A2A" />
                    <motion.rect
                      className="stroke-[#494949] transition-colors delay-200 duration-500"
                      x="16.75"
                      y="16.75"
                      width="114.5"
                      height="114.5"
                      rx="57.25"
                      stroke="#494949"
                      strokeWidth="1.5"
                      whileHover={{ stroke: "#6366f1" }}
                      transition={{ duration: 0.3 }}
                    />
                  </g>
                  <defs>
                    <filter id="filter0_i_0_1">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    </filter>
                  </defs>
                </svg>
                <Image
                  className="absolute top-1/2 left-1/2 h-[68px] w-[68px] sm:h-[82px] sm:w-[82px] md:h-[88px] md:w-[88px] -translate-x-1/2 -translate-y-1/2 transform rounded-full object-cover"
                  src={profile}
                  alt="Profile picture"
                />
              </div>
            </motion.span>

            <span className="block">
              {connections.map((connection, index) => (
                <motion.div
                  key={connection.id}
                  className={`absolute ${sizeClasses[connection.size]} p-0.5 sm:p-1 z-10`}
                  style={{
                    top: connection.position.top,
                    left: connection.position.left,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
                  transition={{
                    delay: isHovered ? index * 0.1 : 0,
                    duration: 0.4,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div
                    className={`rounded-full border border-white/5 bg-[#2A2A2A] ${sizeClasses[connection.size]} p-0.5 sm:p-1`}
                  >
                    <img
                      className="rounded-full w-full h-full object-cover"
                      src={connection.src || "/placeholder.svg"}
                      alt={connection.alt}
                    />
                  </div>
                </motion.div>
              ))}
            </span>

            <span className="lg:hidden">
              <motion.div
                className="rounded-full border border-white/5 bg-[#2A2A2A] w-7 h-7 sm:w-8 sm:h-8 p-1 absolute top-3 sm:top-4 left-2 sm:left-3"
                animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  className="rounded-full w-full h-full object-cover"
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Connection"
                />
              </motion.div>
              <motion.div
                className="rounded-full border border-white/5 bg-[#2A2A2A] w-6 h-6 sm:w-7 sm:h-7 p-1 absolute bottom-16 sm:bottom-18 left-12 sm:left-14"
                animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <img
                  className="rounded-full w-full h-full object-cover"
                  src="https://randomuser.me/api/portraits/men/7.jpg"
                  alt="Connection"
                />
              </motion.div>
              <motion.div
                className="rounded-full border border-white/5 bg-[#2A2A2A] w-10 h-10 sm:w-11 sm:h-11 p-1 absolute top-2 sm:top-3 right-10 sm:right-12"
                animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <img
                  className="rounded-full w-full h-full object-cover"
                  src="https://randomuser.me/api/portraits/women/24.jpg"
                  alt="Connection"
                />
              </motion.div>
              <motion.div
                className="rounded-full border border-white/5 bg-[#2A2A2A] w-8 h-8 sm:w-9 sm:h-9 p-1 absolute right-2 sm:right-3 bottom-14 sm:bottom-16"
                animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <img
                  className="rounded-full w-full h-full object-cover"
                  src="https://randomuser.me/api/portraits/women/35.jpg"
                  alt="Connection"
                />
              </motion.div>
            </span>
          </div>
        </div>
      </div>

      <motion.div
        className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] dark:group-hover:bg-neutral-800/10"
        initial={false}
      />
    </motion.div>
  )
}
