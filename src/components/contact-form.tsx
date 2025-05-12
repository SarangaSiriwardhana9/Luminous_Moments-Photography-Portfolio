"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Clock } from "lucide-react"
import { cn } from "@/lib/utils"

export function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [eventType, setEventType] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Thank you for your message! We'll be in touch soon.")
      setName("")
      setEmail("")
      setPhone("")
      setMessage("")
      setEventType("")
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium leading-none">Your Name</label>
          <Input
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium leading-none">Email Address</label>
          <Input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium leading-none">Phone Number</label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+94 71 234 5678"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="event-type" className="text-sm font-medium leading-none">Event Type</label>
          <select 
            id="event-type"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            value={eventType} 
            onChange={(e) => setEventType(e.target.value)}
          >
            <option value="">Select event type</option>
            <option value="wedding">Wedding</option>
            <option value="engagement">Engagement</option>
            <option value="portrait">Portrait Session</option>
            <option value="cultural">Cultural Event</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="date" className="text-sm font-medium leading-none">Event Date</label>
          <Input
            id="date"
            name="date"
            type="date"
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="time" className="text-sm font-medium leading-none">Preferred Time</label>
          <Input
            id="time"
            name="time"
            type="time"
            className="w-full"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium leading-none">Your Message</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
          placeholder="Tell us about your event and photography needs..."
          className="flex min-h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          required
        />
      </div>
      <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
} 