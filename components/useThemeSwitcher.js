import React, { useState, useEffect } from "react";
//we are using media strategy , class strategy is easy one 
const useThemeSwitcher = () => {
  const preferDarkQuery = "( prefer-theme-scheme:'dark')";
  // The prefers-color-scheme CSS media feature is used to detect if a user
  // has requested light or dark color themes. A user indicates their preference
  // through an operating system setting (e.g. light or dark mode) or a user agent setting.
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");
    //we are getting user preference theme which he has set in browser
    const handleChange = () => {
      if (userPref) {
        let check = userPref === "dark" ? "dark" : " light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        let check = mediaQuery.matches ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };
    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
    if (mode === "light") {
        window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode,setMode];
};

export default useThemeSwitcher;


// 1. When a user first opens the website:
//    - If the `userPref` (user preference) is not available (which means the user has not set a 
//     theme preference previously), the code executes the `else` part.
//    - In the `else` part, the code checks the `mediaQuery` to determine if the user's operating 
//    system or user agent prefers a dark theme.
//    - Based on the result of the `mediaQuery` check, the code sets the `mode` state to "dark" 
//    or "light" using the `setMode` function.
//    - It also adds the corresponding CSS class (`"dark"` or `"light"`) to the 
//    `document.documentElement` element to apply the appropriate theme styling.

// 2. If the user changes the theme and revisits the site:
//    - In this case, the `userPref` will be available, indicating that the user has set a theme preference.
//    - When the code runs, it enters the `if (userPref)` part.
//    - The code checks the value of `userPref` to determine if the preference is "dark".
//    - If the preference is "dark", the code sets the `mode` state to "dark" and applies the 
//    `"dark"` CSS class to the `document.documentElement` element.
//    - If the preference is not "dark" (indicating a light theme preference), the code sets 
//    the `mode` state to "light" and removes the `"dark"` CSS class from the `document.documentElement` element.

// So, in summary, the code first checks if the user has previously set a theme preference and 
// applies it accordingly. If the user has not set a preference, it checks the operating system 
// or user agent's preference using the `mediaQuery` and applies the corresponding theme.


//notice when I reload this the first it will load the
// light theme and then it will uh changes change this theme to the dark 
// based on the local storage value so why this happens now this is an effect
// called flash of unstyled content FOUC which is an instance where uh webpage 
// appears uh briefly for a few seconds with the browser's default settings and then when
// when it checks check the all the conditions such as local storage then it will change 
// the theme back to the user preferred state , to avoid this we have some thing in docs