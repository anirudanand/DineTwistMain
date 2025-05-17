"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-pink-600 text-2xl font-bold">ψ9</span>
            <span className="text-2xl font-bold">DineTwist</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Features</Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900 text-sm font-medium">How It Works</Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Testimonials</Link>
            <Link href="#for-restaurants" className="text-gray-600 hover:text-gray-900 text-sm font-medium">For Restaurants</Link>
            <Link href="#faq" className="text-gray-600 hover:text-gray-900 text-sm font-medium">FAQ</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-pink-600 hover:bg-pink-700 text-white">Sign Up</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-24 px-6 pb-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6 text-gray-900">
              Surprise Social Dining for Couples
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              DineTwist connects couples for exciting dining experiences at surprise restaurants. 
              Discover new places, meet interesting people, and enjoy memorable evenings together.
            </p>
            <div className="flex gap-4 mb-12">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white shadow-lg shadow-pink-200">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-gray-200 hover:bg-gray-50">
                How It Works
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-2">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <Avatar key={i} className="border-2 border-white w-8 h-8">
                    <AvatarFallback className="bg-pink-100 text-pink-600 text-xs">
                      U{i}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <p className="text-gray-600 text-sm">
                <span className="font-semibold">500+</span> couples already enjoying DineTwist
              </p>
            </div>
          </div>
          <div className="relative">
            {/* Notification Card */}
            <div className="absolute top-4 right-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3 z-10">
              <div className="bg-pink-50 rounded-full p-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-pink-600">
                  <path d="M12 4v16m8-8H4" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">New connections</h3>
                <p className="text-sm text-gray-500">Meet 2 new couples</p>
              </div>
            </div>
            {/* Main Image */}
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl shadow-2xl shadow-gray-200/50 overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="DineTwist Experience"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>

      {/* How It Works Section */}
      <section className="py-24 bg-white" id="how-it-works">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How DineTwist Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A simple process designed to create exciting dining experiences and new connections.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <span className="absolute -top-8 left-0 text-6xl font-bold text-pink-600 opacity-20">01</span>
              <h3 className="text-xl font-bold mb-3">Create Your Profile</h3>
              <p className="text-gray-600">
                Sign up as a couple and tell us about your dining preferences, dietary restrictions, and interests.
              </p>
            </div>
            {/* Add more steps here */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-pink-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for a New Dining Adventure?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join DineTwist today and transform your dining experiences. Meet new couples, discover great restaurants, and create lasting memories.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="outline" className="bg-white text-pink-600 hover:bg-gray-50 border-none">
              Download the App
            </Button>
            <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white border-none">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
