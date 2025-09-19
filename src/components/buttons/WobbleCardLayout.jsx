"use client";

import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import LiveImage from "../../assets/images/live.webp";
import Bell from "../icons/Bell";
import Video from "../icons/Video";
import Radio from "../icons/Radio";

export function WobbleCardLayout() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-gray-800/30 border border-gray-100/20 min-h-[500px] lg:min-h-[300px]"
                className=""
            >
                <div className="max-w-xs">
                    <span className="p-4 -mt-6 mb-2 inline-flex items-center justify-center bg-white/10 rounded-4xl">
                        <Radio />
                    </span>
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Live broadcast
                    </h2>
                    <p className="mt-4 text-left text-base/6 text-neutral-200">
                        Real-time distribution of audio and visual content to a dispersed audience simultaneously, using various mediums such as television, radio, or the Internet
                    </p>
                </div>
                <img
                    src={LiveImage}
                    width={500}
                    height={500}
                    alt="Live broadcast image"
                    className="absolute -right-4 lg:-right-[10%] -bottom-10 object-contain rounded-2xl -z-10 opacity-80"
                />
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                <span className="p-4 -mt-6 mb-2 inline-flex items-center justify-center bg-white/10 rounded-4xl">
                    <Bell />
                </span>

                <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Daily Event Reminders
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                    Notifications set to alert individuals about scheduled events on a specific day
                </p>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gray-800/30 border border-gray-100/20 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                <div className="max-w-lg">
                    <span className="p-4 -mt-6 mb-2 inline-flex items-center justify-center bg-white/10 rounded-4xl">
                        <Video />
                    </span>
                    <h2 className="max-w-sm text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Hightlights
                    </h2>
                    <p className="mt-4 text-left text-base/6 text-neutral-200">
                        Stay updated with the most important moments and key updates from every match. Our platform delivers curated highlights, ensuring you never miss the action, top plays, or game-changing events, all in one convenient place.
                    </p>
                </div>
                <img
                    src={LiveImage}
                    width={500}
                    height={500}
                    alt="Highlight light image"
                    className="absolute -right-4 lg:-right-[10%] -bottom-10 object-contain rounded-2xl -z-10 opacity-80"
                />
            </WobbleCard>
        </div>
    );
}
