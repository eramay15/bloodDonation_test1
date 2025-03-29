"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BlogPage() {
  const [posts, setPosts] = useState(null); // Fix: Initialize as null to prevent hydration issues

  useEffect(() => {
    // Simulating API fetch for blog posts
    setTimeout(() => { // Simulating a fetch delay
      setPosts([
        {
          id: 1,
          title: "The Importance of Blood Donation",
          description: "Discover why donating blood can save lives and how you can help.",
          image: "/images/blood-donation.jpg",
          published: true,
        },
        {
          id: 2,
          title: "How to Prepare for Blood Donation",
          description: "A step-by-step guide to ensure a smooth donation experience.",
          image: "/images/prepare-donation.jpg",
          published: true,
        },
        {
          id: 3,
          title: "Who Can Donate Blood?", 
          description: "Learn about eligibility criteria for blood donation.",
          image: "/images/eligibility.jpg",
          published: true,
        },
      ]);
    }, 500); // Simulated API delay
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gray-100 min-h-screen py-10 px-6"
    >
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-center text-red-600">
        Latest Blog Posts
      </h1>
      <p className="text-center text-gray-700 mt-2">
        Stay informed about blood donation and its impact on lives.
      </p>

      {/* Blog Cards */}
      {posts ? (
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col h-full" // Added flex and height
            >
              <Image
                src={post.image}
                alt={post.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-gray-900">{post.title}</h2>
                <p className="text-gray-700 mt-2 flex-grow">{post.description}</p> 
                {/* flex-grow ensures button stays at bottom */}
                <div className="mt-auto"> 
                  <button
                    className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                    onClick={() => alert("Navigating to full blog post")}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">Loading posts...</p>
      )}
    </motion.div>
  );
}
