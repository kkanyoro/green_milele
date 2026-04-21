# Green Milele Website

The official website for **Green Milele**, a youth-led environmental initiative dedicated to protecting the planet through community action, education, and sustainable initiatives.

This project is built with a modern, highly optimized tech stack featuring an iOS-inspired glassmorphism design system, full mobile responsiveness, and an embedded content management system (CMS) for easy updates.

## Features

- **Modern UI/UX:** iOS-style glassmorphism design using Tailwind CSS v4.
- **Dark Mode Support:** Seamless Light, Dark, and System theme toggling without FOUC (Flash of Unstyled Content).
- **Dynamic CMS:** Embedded Sanity Studio for directors to easily manage events and gallery photos without touching code.
- **Masonry Photo Gallery:** Pinterest-style image grid for optimized viewing of mixed-aspect-ratio photos.
- **Serverless Contact Form:** Secure messaging powered by Web3Forms.
- **Versatile Donation Component:** Centralized modal ready for M-Changa, M-Pesa STK, and direct bank transfers.

## Tech Stack

- **Framework:** [Next.js 14+ (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Content Management:** [Sanity.io](https://www.sanity.io/)
- **Form Handling:** [Web3Forms](https://web3forms.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (`Fi` and `Si` sets)
- **Deployment:** [Vercel](https://vercel.com/)

## Content Management (Sanity Studio)

This project features an embedded Sanity Studio directly within the Next.js application.

- **Access the Studio:** Navigate to `http://localhost:3000/studio` (or `https://greenmilele.vercel/studio` in production).

- **Log in:** Use an authorized Google or GitHub account.

- **Manage content:**
    - **Events:** Add upcoming or past events. These automatically populate the `/events` page.
    - **Gallery Images:** Upload photos from events. These automatically populate the masonry grid on the `/events` page.

- **Note:** Ensure all required fields are filled out before attempting to hit "Publish". The publish button is located at the bottom right of the editing pane.

## Folder Structure

```text
green-milele/
├── app/
│   ├── about/             # About Us & Team page
│   ├── events/            # Dynamic Events & Masonry Gallery
│   ├── join/              # Contact form & community links
│   ├── studio/            # Embedded Sanity CMS admin portal
│   ├── globals.css        # Tailwind v4 configuration & theme variables
│   ├── layout.tsx         # Global layout (Navbar, Footer, ThemeProvider)
│   └── page.tsx           # Landing/Home Page
├── components/
│   ├── ui/                # Reusable micro-components (Button)
│   ├── Navbar.tsx         # Global Navigation & Mobile Menu
│   ├── Footer.tsx         # Global Footer
│   ├── DonateButton.tsx   # Donation modal logic
│   ├── ContactForm.tsx    # Web3Forms client component
│   └── ThemeToggle.tsx    # Dark/Light mode switcher
├── lib/
│   └── sanity.client.ts   # Sanity fetch logic and image builder
├── public/                # Static assets (Logos, placeholders)
└── sanity/                # Sanity configuration & schemas
    ├── schemaTypes/
    │   ├── event.ts       # Event data structure
    │   └── galleryImage.ts # Gallery photo data structure
```

## Deployment

This project is optimized for deployment on Vercel.

1. Import the GitHub repository into your Vercel dashboard.
2. Add the environment variables from your `.env.local` file into the Vercel Environment Variables settings.
3. Click **Deploy**.

Next.js strict image security requires the `cdn.sanity.io` domain to be whitelisted in `next.config.ts`. This is already configured in the repository.

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check the issues page.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

Empowering the community for a Greener Tomorrow.