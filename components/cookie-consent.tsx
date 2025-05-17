"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { X } from "lucide-react"
import Link from "next/link"

type CookieConsent = {
  necessary: boolean
  preferences: boolean
  analytics: boolean
  marketing: boolean
  accepted: boolean
}

const defaultConsent: CookieConsent = {
  necessary: true, // Always required
  preferences: false,
  analytics: false,
  marketing: false,
  accepted: false,
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<CookieConsent>(defaultConsent)
  const [isOpen, setIsOpen] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    // Check if consent has been given before
    const storedConsent = localStorage.getItem("cookieConsent")

    if (storedConsent) {
      setConsent(JSON.parse(storedConsent))
      setIsOpen(false)
    } else {
      // Show the banner if no consent has been given
      setIsOpen(true)
    }
  }, [])

  const handleAcceptAll = () => {
    const newConsent = {
      necessary: true,
      preferences: true,
      analytics: true,
      marketing: true,
      accepted: true,
    }
    setConsent(newConsent)
    localStorage.setItem("cookieConsent", JSON.stringify(newConsent))
    setIsOpen(false)
  }

  const handleRejectAll = () => {
    const newConsent = {
      necessary: true, // Necessary cookies are always accepted
      preferences: false,
      analytics: false,
      marketing: false,
      accepted: true,
    }
    setConsent(newConsent)
    localStorage.setItem("cookieConsent", JSON.stringify(newConsent))
    setIsOpen(false)
  }

  const handleSavePreferences = () => {
    const newConsent = {
      ...consent,
      accepted: true,
    }
    setConsent(newConsent)
    localStorage.setItem("cookieConsent", JSON.stringify(newConsent))
    setIsOpen(false)
  }

  const handleToggle = (type: keyof Omit<CookieConsent, "accepted">) => {
    if (type === "necessary") return // Cannot toggle necessary cookies

    setConsent((prev) => ({
      ...prev,
      [type]: !prev[type],
    }))
  }

  const handleManageConsent = () => {
    setIsOpen(true)
    setShowDetails(true)
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button variant="outline" size="sm" onClick={handleManageConsent} className="bg-white shadow-md">
          Manage Cookies
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold">Cookie Preferences</h2>
          {consent.accepted && (
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        <Tabs defaultValue={showDetails ? "customize" : "overview"} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="customize">Customize</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="p-6">
            <p className="mb-4">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our
              traffic. By clicking "Accept All", you consent to our use of cookies.
            </p>
            <p className="mb-6">
              You can read more about how we use cookies in our{" "}
              <Link href="/privacy-policy" className="text-rose-600 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <Button variant="outline" onClick={handleRejectAll}>
                Reject All
              </Button>
              <Button variant="outline" onClick={() => setShowDetails(true)}>
                Customize
              </Button>
              <Button className="bg-rose-600 hover:bg-rose-700" onClick={handleAcceptAll}>
                Accept All
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="customize" className="p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Strictly Necessary Cookies</h3>
                  <p className="text-sm text-gray-500">
                    These cookies are essential for the website to function properly.
                  </p>
                </div>
                <Switch id="necessary" checked={consent.necessary} disabled={true} />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Preference Cookies</h3>
                  <p className="text-sm text-gray-500">These cookies remember your preferences and settings.</p>
                </div>
                <Switch
                  id="preferences"
                  checked={consent.preferences}
                  onCheckedChange={() => handleToggle("preferences")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Analytics Cookies</h3>
                  <p className="text-sm text-gray-500">
                    These cookies collect information about how you use our website.
                  </p>
                </div>
                <Switch id="analytics" checked={consent.analytics} onCheckedChange={() => handleToggle("analytics")} />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Marketing Cookies</h3>
                  <p className="text-sm text-gray-500">
                    These cookies are used to track visitors across websites to display relevant advertisements.
                  </p>
                </div>
                <Switch id="marketing" checked={consent.marketing} onCheckedChange={() => handleToggle("marketing")} />
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-end">
              <Button variant="outline" onClick={handleRejectAll}>
                Reject All
              </Button>
              <Button className="bg-rose-600 hover:bg-rose-700" onClick={handleSavePreferences}>
                Save Preferences
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
