# Nova Travel

**Nova Travel** is a user-friendly online travel and tourism management website that is very helpful in finding your dream spot to visit.

**Visit the live site:** [Nova Travel](https://nova-tourism.web.app/).

[Server side repository](https://github.com/HunterMahmud/nova-tourism-server)

**My Category:** Southeast Asia

**Website Features and Characteristics**

1. **Navbar:**

   - Contains website name and routes to various sections.
   - Conditional display of login, register, logout, and profile picture based on user logged in or not.
   - Conditional display of "My List" and "Add Tourist Spot" based on user login status.

2. **Login Page:**

   - Email and password-based login with Firebase authentication.
   - Options for login with Google and GitHub.

3. **Register Page:**

   - Registration form with email, name, photoURL, and password fields.
   - Password validation with RegEx for complexity.
   - Checking min 6 length of character at least one uppercase and lowercase character.

4. **Home Page:**

   - Includes navbar, slider, tourist spots section, countries section, travel spot gallery, and What people says.

5. **Add Tourist Spot Page:**

   - Private route accessible after login.
   - Form for adding tourist spots with various details.
   - Redirects to login page if accessed without authentication.

6. **All Tourist Spot Page:**

   - Displays tourist spots added by users in card format.
   - Dropdown menu for sorting based on average cost.
   - Private route accessible after login.

7. **View Details Page:**

   - Private/protected route displaying details of a tourist spot.

8. **My List Page:**

   - Private/protected route displaying user-added spots in a tabular format.
   - Options for spot deletion and update.
   - Delete button show a confirmation message after delete.

9. **Update Page:**

   - Private route Form for updating tourist spot details.

10. **Footer and Navbar:**

    - Persistent across all pages except 404 page.

11. **404 Not Found Page:**

    - Added for handling invalid routes.

12. **Loading and Spinner:**

    - Implemented to indicate loading state.

13. **Countries Section:**

    - Displays information about 6 countries in card format.
    - Clicking on a country card shows tourist spots of that specific country.

14. **Dark and Light Theme:**

    - Toggle button for light and dark mode for user preference.

15. **Dynamic Title and Scroll Restoration:**
    - Enhancements for better user experience.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Install Node.js (version 14 or higher) from [nodejs.org](https://nodejs.org/).
- **npm**: Node.js package manager (npm) should be installed along with Node.js.
- **Git**: Install Git from [git-scm.com](https://git-scm.com/).

## Installation

Follow these steps to get your development environment set up:

1. **Clone the repository**:

   ```sh
   git clone https://github.com/HunterMahmud/nova-tourism-client.git
   cd nova-tourism-client
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env.local` file in the root of the project and add the necessary environment variables. For example:

   ```env.local
   VITE_APIKEY = your_api_key
   VITE_AUTHDOMAIN = your_auth_domain
   VITE_PROJECTID = your_project_id
   VITE_STORAGEBUCKET = your_storage_bucket
   VITE_MESSAGINGSENDERID = your_messaging_sender_id
   VITE_APPID = your_app_id
   VITE_API_BASE_URL = your_api_base_url
   ```


Replace the placeholders with your actual Firebase configuration values.

## Usage

### Development Server

To start the development server, run:

```sh
npm run dev
````

This will start the Vite development server and you can view the application in your browser at `http://localhost:5173`.

### Build

To create a production build, run:

```sh
npm run build
```

This will bundle the application for production.

### Preview

To preview the production build locally, run:

```sh
npm run preview
```

### Lint

To lint the codebase, run:

```sh
npm run lint
```

## Author

- Hasan Al Mahmud

<!-- **NPM Packages Used in the Project:**

- **1. aos:** Animates elements or components.
- **2. axios:** Manages HTTP requests (GET, POST, PATCH) and responses.
- **3. dotenv:** Hides configuration secrets.
- **4. firebase:** Handles authentication.
- **5. react-helmet-async:** Dynamically sets page titles.
- **6. react-hook-form:** Manages forms efficiently.
- **7. react-icons:** Displays React icons.
- **8. react-leaflet:** Integrates maps.
- **9. react-simple-typewriter:** Creates typewriter effects for text.
- **10. react-toastify:** Shows toast notifications for success or failure messages.
- **11. react-tooltip:** Displays tooltips.
- **12. sweetalert2:** Presents alerts.
- **13. swiper:** Implements image sliders. -->

