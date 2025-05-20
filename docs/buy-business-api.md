# Buy Business Page – API & Component Documentation

This document outlines the API endpoints and React component structure for the Buy Business page.  
It is based on the implementation in `/app/buy-businesss/page.tsx`.

---

## 🗂️ Page Structure

- **Hero Section:** Title and description (localized).
- **Main Content:**
  - **FiltersSidebar** (desktop)
  - **MobileFilters** (mobile)
  - **ListingsTabs** (main listings)
  - **FeaturedListings** (highlighted listings)

---

## 🧩 Components & Props

### FiltersSidebar

| Prop           | Type         | Description                        |
|----------------|--------------|------------------------------------|
| priceRange     | [number,number] | Selected price range             |
| setPriceRange  | function     | Setter for price range             |
| revenueRange   | [number,number] | Selected revenue range           |
| setRevenueRange| function     | Setter for revenue range           |
| activeFilters  | string[]     | List of active filter keys         |
| toggleFilter   | function     | Toggle a filter on/off             |
| industries     | string[]     | List of available industries       |
| clearFilters   | function     | Clear all filters                  |
| locations      | string[]     | List of available locations        |

---

### MobileFilters

| Prop           | Type         | Description                        |
|----------------|--------------|------------------------------------|
| priceRange     | [number,number] | Selected price range             |
| setPriceRange  | function     | Setter for price range             |
| revenueRange   | [number,number] | Selected revenue range           |
| setRevenueRange| function     | Setter for revenue range           |
| activeFilters  | string[]     | List of active filter keys         |
| toggleFilter   | function     | Toggle a filter on/off             |
| clearFilters   | function     | Clear all filters                  |

---

### ListingsTabs

- Displays main business listings, likely with tabs for sorting or categories.

---

### FeaturedListings

- Displays a set of highlighted/featured business listings.

---

## 🌐 API Endpoints

### 1. Listings

#### `GET /listings`
Get a paginated list of business listings, with optional filters.

**Query Parameters:**
- `priceMin`, `priceMax`
- `revenueMin`, `revenueMax`
- `industries[]`
- `locations[]`
- `search`
- `page`, `limit`

**Response:**
```json
{
  "data": [
    {
      "id": "string",
      "title": "string",
      "description": "string",
      "price": 100000,
      "revenue": 50000,
      "industry": "string",
      "location": "string"
    }
  ],
  "total": 100,
  "page": 1,
  "limit": 20
}
```

---

#### `GET /listings/featured`
Get featured business listings.

**Response:**
```json
{
  "data": [
    {
      "id": "string",
      "title": "string",
      "description": "string",
      "price": 100000,
      "revenue": 50000,
      "industry": "string",
      "location": "string"
    }
  ]
}
```

---

#### `GET /listings/:id`
Get details for a single business listing.

**Response:**
```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "price": 100000,
  "revenue": 50000,
  "industry": "string",
  "location": "string"
}
```

---

### 2. Filters & Metadata

#### `GET /industries`
Get all available industries for filtering.

**Response:**
```json
{
  "data": ["Tech", "Retail", "Healthcare", ...]
}
```

---

#### `GET /locations`
Get all available locations for filtering.

**Response:**
```json
{
  "data": ["New York", "California", ...]
}
```

---

### 3. (Optional) User Filters

#### `POST /user/filters`
Save a user's filter preferences.

**Body:**
```json
{
  "filters": {
    "priceRange": [0, 100000],
    "revenueRange": [0, 50000],
    "industries": ["Tech"],
    "locations": ["New York"]
  }
}
```

#### `GET /user/filters`
Get a user's saved filter preferences.

**Response:**
```json
{
  "filters": {
    "priceRange": [0, 100000],
    "revenueRange": [0, 50000],
    "industries": ["Tech"],
    "locations": ["New York"]
  }
}
```

---

### 4. (Optional) Analytics

#### `POST /analytics/listing-view`
Track when a listing is viewed.

**Body:**
```json
{
  "listingId": "string"
}
```

---

## 📝 Notes

- All endpoints should support localization where applicable.
- FiltersSidebar and MobileFilters require dynamic data from `/industries` and `/locations`.
- ListingsTabs and FeaturedListings consume data from `/listings` and `/listings/featured`.

---

**This file documents both the frontend structure and the backend API for the Buy Business page.**