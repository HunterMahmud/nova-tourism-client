# Nova Travel


**Nova Travel** is a user-friendly online travel and tourism management website that is very helpful in finding your dream spot to visit.

**Visit the live site:** [Nova Travel](https://nova-tourism.web.app/).

**My Category:** Southeast Asia


**Website Features and Characteristics**

1. **Navbar:**
   - Contains website name and routes to various sections.
   - Conditional display of login, register, logout, and profile pic based on user authentication.
   - Conditional display of "My List" and "Add Tourist Spot" based on user login status.

   - **Sub-features:**
     - Login and Register functionality with Firebase authentication system.
     - Login with Google and GitHub options.

2. **Login Page:**
   - Email and password-based login with Firebase authentication.
   - Options for login with Google and GitHub.

3. **Register Page:**
   - Registration form with email, name, photoURL, and password fields.
   - Password validation with regex for complexity.

4. **Home Page:**
   - Includes navbar, slider, tourist spots section, countries section, travel spot gallery, and testimonials.
   - Footer present.

5. **Add Tourist Spot Page:**
   - Private route accessible after login.
   - Form for adding tourist spots with various details.
   - Redirects to login page if accessed without authentication.

6. **All Tourist Spot Page:**
   - Displays tourist spots added by users in card format.
   - Dropdown menu for sorting based on average cost.
   - Private route.

7. **View Details Page:**
   - Private/protected route displaying details of a tourist spot.

8. **My List Page:**
   - Private/protected route displaying user-added spots in a tabular format.
   - Options for spot deletion and update.

9. **Update Page:**
   - Form for updating tourist spot details.
   - Private route.

10. **Footer and Navbar:**
    - Persistent across all pages except 404 page.

11. **404 Not Found Page:**
    - Added for handling invalid routes.

12. **Loading and Spinner:**
    - Implemented to indicate loading state.

13. **Countries Section:**
    - Displays information about 6 countries in card format.
    - Clicking on a country card shows tourist spots of that country.

14. **Dark and Light Theme:**
    - Toggle button for user preference.

15. **Dynamic Title and Scroll Restoration:**
    - Enhancements for better user experience.


**NPM Packages Used in the Project:**

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
- **13. swiper:** Implements image sliders.


