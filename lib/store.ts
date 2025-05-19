import { create } from "zustand"
import { persist } from "zustand/middleware"

// Define types for our business listings
type BusinessListing = {
  id: string
  title: string
  industry: string
  location: string
  price: number
  revenue: number
  profit: number
  description: string
  featured: boolean
  createdAt: Date
  status: "draft" | "pending" | "published" | "rejected"
  userId: string
}

// Define types for our user favorites
type Favorite = {
  userId: string
  listingId: string
  createdAt: Date
}

// Define types for our messages
type Message = {
  id: string
  senderId: string
  receiverId: string
  listingId: string
  content: string
  read: boolean
  createdAt: Date
}

// Define the store state
type StoreState = {
  // Business listings
  listings: BusinessListing[]
  addListing: (listing: Omit<BusinessListing, "id" | "createdAt">) => void
  updateListing: (id: string, listing: Partial<BusinessListing>) => void
  deleteListing: (id: string) => void
  getListingsByUser: (userId: string) => BusinessListing[]
  getListingsByStatus: (status: BusinessListing["status"]) => BusinessListing[]

  // Favorites
  favorites: Favorite[]
  addFavorite: (userId: string, listingId: string) => void
  removeFavorite: (userId: string, listingId: string) => void
  getFavoritesByUser: (userId: string) => string[]

  // Messages
  messages: Message[]
  sendMessage: (senderId: string, receiverId: string, listingId: string, content: string) => void
  markMessageAsRead: (id: string) => void
  getMessagesByUser: (userId: string) => Message[]
  getUnreadMessageCount: (userId: string) => number
}

// Create the store
export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      // Business listings
      listings: [],
      addListing: (listing) =>
        set((state) => ({
          listings: [
            ...state.listings,
            {
              ...listing,
              id: Math.random().toString(36).substring(2, 9),
              createdAt: new Date(),
            },
          ],
        })),
      updateListing: (id, updatedListing) =>
        set((state) => ({
          listings: state.listings.map((listing) => (listing.id === id ? { ...listing, ...updatedListing } : listing)),
        })),
      deleteListing: (id) =>
        set((state) => ({
          listings: state.listings.filter((listing) => listing.id !== id),
        })),
      getListingsByUser: (userId) => {
        return get().listings.filter((listing) => listing.userId === userId)
      },
      getListingsByStatus: (status) => {
        return get().listings.filter((listing) => listing.status === status)
      },

      // Favorites
      favorites: [],
      addFavorite: (userId, listingId) =>
        set((state) => ({
          favorites: [
            ...state.favorites,
            {
              userId,
              listingId,
              createdAt: new Date(),
            },
          ],
        })),
      removeFavorite: (userId, listingId) =>
        set((state) => ({
          favorites: state.favorites.filter(
            (favorite) => !(favorite.userId === userId && favorite.listingId === listingId),
          ),
        })),
      getFavoritesByUser: (userId) => {
        return get()
          .favorites.filter((favorite) => favorite.userId === userId)
          .map((favorite) => favorite.listingId)
      },

      // Messages
      messages: [],
      sendMessage: (senderId, receiverId, listingId, content) =>
        set((state) => ({
          messages: [
            ...state.messages,
            {
              id: Math.random().toString(36).substring(2, 9),
              senderId,
              receiverId,
              listingId,
              content,
              read: false,
              createdAt: new Date(),
            },
          ],
        })),
      markMessageAsRead: (id) =>
        set((state) => ({
          messages: state.messages.map((message) => (message.id === id ? { ...message, read: true } : message)),
        })),
      getMessagesByUser: (userId) => {
        return get().messages.filter((message) => message.senderId === userId || message.receiverId === userId)
      },
      getUnreadMessageCount: (userId) => {
        return get().messages.filter((message) => message.receiverId === userId && !message.read).length
      },
    }),
    {
      name: "business-exchange-storage",
    },
  ),
)
