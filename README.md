# TripTrace - Your Personal Travel Companion 🌍✈️

TripTrace is a modern web application that helps you plan, track, and visualize your travels. Create detailed trip itineraries, mark locations on interactive maps, and watch your global footprint grow with a beautiful 3D globe visualization.

## Features 🌟

- **Interactive Trip Planning**
  - Create detailed trip itineraries with dates and descriptions
  - Upload trip images
  - Add and manage multiple locations per trip
  - Drag-and-drop reordering of trip locations

- **Map Integration 🗺️**
  - Interactive Google Maps integration
  - Visual representation of trip locations
  - Automatic geocoding of addresses

- **3D Globe Visualization 🌐**
  - Beautiful 3D globe showing all your visited locations
  - Track countries visited
  - Real-time rotation and interaction
  - Country statistics and summaries

- **User Management 👤**
  - GitHub authentication
  - Secure user sessions
  - Personal trip dashboard

## Tech Stack 💻

- **Frontend**
  - [Next.js 15](https://nextjs.org/) 
  - [React 19](https://react.dev/)
  - [TailwindCSS](https://tailwindcss.com/) for styling
  - [Radix UI](https://www.radix-ui.com/) for UI components
  - [react-globe.gl](https://github.com/vasturiano/react-globe.gl) for 3D globe visualization
  - [@react-google-maps/api](https://github.com/JustFly1984/react-google-maps-api) for Google Maps integration

- **Backend**
  - [NextAuth.js](https://next-auth.js.org/) for authentication
  - [Prisma](https://www.prisma.io/) as the ORM
  - [PostgreSQL](https://www.postgresql.org/) (via Neon) for database
  - [UploadThing](https://uploadthing.com/) for image uploads

- **Development**
  - TypeScript for type safety
  - ESLint for code quality
  - Tailwind PostCSS for styling

## Getting Started 🚀

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd travel-planner
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables in `.env`:
   ```
   DATABASE_URL="your-postgresql-url"
   GITHUB_ID="your-github-oauth-id"
   GITHUB_SECRET="your-github-oauth-secret"
   GOOGLE_MAPS_API_KEY="your-google-maps-api-key"
   UPLOADTHING_SECRET="your-uploadthing-secret"
   UPLOADTHING_APP_ID="your-uploadthing-app-id"
   ```

4. Run Prisma migrations:
   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables 🔑

Required environment variables:

- `DATABASE_URL`: PostgreSQL connection string
- `GITHUB_ID`: GitHub OAuth application ID
- `GITHUB_SECRET`: GitHub OAuth application secret
- `GOOGLE_MAPS_API_KEY`: Google Maps API key
- `UPLOADTHING_SECRET`: UploadThing secret key
- `UPLOADTHING_APP_ID`: UploadThing application ID

## Database Schema 🗄️

The application uses Prisma with PostgreSQL and includes the following main models:

- User (authentication and user data)
- Trip (trip details and metadata)
- Location (coordinates and details for trip locations)
- Account/Session (authentication-related models)

## Features in Detail 📝

### Trip Management
- Create new trips with titles, descriptions, and date ranges
- Upload trip images
- View trips in a dashboard layout
- Sort trips by date
- View detailed trip information

### Location Management
- Add locations to trips with address search
- Automatic geocoding of addresses to coordinates
- Drag-and-drop reordering of locations
- View locations on an interactive map

### Globe Visualization
- Interactive 3D globe showing all visited locations
- Automatic country detection from coordinates
- Country visit tracking and statistics
- Smooth animations and interactions






