# Nova Travel


**Nova Travel** is a user-friendly online travel and tourism management website that is very helpful in finding your dream spot to visit.

**Visit the live site:** [Nova Travel](https://nova-tourism.web.app/).

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


