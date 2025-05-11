# Responsive Age Calculator

This project is a responsive age calculator built with HTML and CSS by Ismail Ibrahim Mensah. It allows users to input their birthdate and calculates their age in years, months, and days. The design is fully responsive, ensuring a consistent and user-friendly experience across various devices, from small phones to large desktops.

## Features

*   **Responsive Design:** Utilizes `rem` units and `clamp()` functions for fluid scaling across different screen sizes.
*   **Clean and Modern UI:**  A visually appealing and intuitive user interface.
*   **Age Calculation:** Accurately calculates age in years, months, and days.
*   **Share Buttons:** Includes share buttons for Facebook and Twitter.
*   **Print Functionality:**  A print button to easily print the results.
*   **Language Selector:**  A language selector for future localization support.
*   **Dark Mode Support:**  Automatically adapts to the user's preferred color scheme (light or dark mode).

## Technologies Used

*   **HTML:**  For structuring the content and layout of the calculator.
*   **CSS:**  For styling and creating the responsive design.
    *   `rem` units: For scalable font sizes, padding, and margins.
    *   `clamp()` function: For fluidly responsive values.
    *   Media queries: For adapting the layout to different screen sizes.
*   **Font Awesome (or similar):** For icons (optional, but recommended for share buttons and print functionality).

## Installation

To use this age calculator, simply download or clone the repository and open the `index.html` file in your web browser.  No server-side setup is required.

## Usage

1.  Open the `index.html` file in your web browser.
2.  Select the day, month, and year of your birthdate using the dropdown menus.
3.  Click the "Calculate Age" button.
4.  The calculated age in years, months, and days will be displayed below the input fields.
5.  Use the share buttons to share the results on Facebook or Twitter.
6.  Click the "Print Result" button to print the results.

## Responsive Design Details

The responsive design is achieved through the following techniques:

*   **`rem` Units:** All font sizes, padding, margins, and other size-related properties are defined using `rem` units. This allows the entire design to scale proportionally based on the root font size.
*   **`clamp()` Function:** The `clamp()` function is used to create fluidly responsive values. For example:

    ```css
    padding: clamp(1rem, 5vw, 2rem);
    ```

    This means the padding will be at least `1rem`, at most `2rem`, and will scale linearly with the viewport width (`5vw`) in between.
*   **Media Queries:** Media queries are used to adjust the layout and styling for different screen sizes. The breakpoints are defined using `rem` units to maintain consistency with the overall design.

## Dark Mode Support

The calculator automatically adapts to the user's preferred color scheme (light or dark mode) using the `@media (prefers-color-scheme: dark)` media query.  Specific styles are defined within this media query to ensure that the calculator looks good in both light and dark modes.

## Customization

You can easily customize the appearance of the age calculator by modifying the CSS file.  The following variables are defined in the `:root` selector and can be changed to adjust the color scheme:

*   `--primary`: The primary color.
*   `--primary-light`: A lighter shade of the primary color.
*   `--secondary`: The secondary color.
*   `--accent`: The accent color.
*   `--text-dark`: The color of dark text.
*   `--text-light`: The color of light text.
*   `--bg-light`: The color of light backgrounds.
*   `--bg-dark`: The color of dark backgrounds.
*   `--white`: The color of white elements.
*   `--shadow`: The box-shadow value.
*   `--transition`: The transition property for animations.

You can also customize the font family, spacing, and other design elements by modifying the CSS rules.

## Important Notes

Some of the features and design elements may not work correctly on older browsers or devices.  Please ensure that you are using a modern browser (e.g., Chrome, Firefox, Safari) and that your device supports the latest web standards. 

Some styles were auto completed by auto code generator, so please check the code and make sure it is correct.
You might see comments on all ai corrected code.

Note this calculator is a work in progress.  Please let me know if you find any bugs or have any suggestions for improvements. All initial code was written by me, and I am still learning and improving my skills. The work flow was polished by ChatGPT.

## Future Enhancements

*   **Localization:** Add support for multiple languages.
*   **More Share Options:** Include share buttons for other social media platforms.
*   **Input Validation:** Implement more robust input validation to prevent errors.
*   **Accessibility Improvements:** Further improve accessibility for users with disabilities.
*   **JavaScript Functionality:** Add JavaScript for more dynamic features (e.g., real-time age updates).

## Contributing

Contributions are welcome! If you find a bug or have a suggestion for a new feature, please open an issue or submit a pull request.

## License

This project is licensed under the CodeAlpha Internship.