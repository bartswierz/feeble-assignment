Feeble.io - Assignment - Bartosz Swierzynski

## Table of Contents

1. [Overview](#overview)
2. [Installation Instructions](#installation-instructions)
3. [Tech Stack](#tech-stack)
4. [Assumptions](#assumptions)
5. [If I Had More Time](#if-i-had-more-time)

## Overview

Coding Challenge - For convenience, I have deployed the project on Netlify(https://feeble-bartswierz.netlify.app/). 
I have also added installation instructions below to be able to run the application locally.

## Installation Instructions
**To run the application locally, follow the steps below(commands added for additional help - ensure you are inside the Root Directory for the given commands after cloning the repo):**

1. Clone the repository into the folder locally by using git clone:
   
   ```bash
   git clone https://github.com/bartswierz/feeble-assignment.git
   ```
2. Navigate into the directory:
   
   ```bash
   cd feeble-assignment
   ```
3. Install the necessary packages inside package.json:
   
   ```bash
   npm install
   ```
4. Start the app:
   
   ```bash
   npm run dev
   ```
   
You're all set!

## Tech Stack
1. React
2. Tailwind CSS
3. TypeScript

## Assumptions
- As with any Figma design, it is always beneficial to directly speak with the UI/UX lead to decrease any assumptions that may send us in the wrong direction or deliver an unintended design. In my previous role, I would jump on a quick call with our UI/UX lead with any assumptions I had written down after carefully looking over the feature I was to work on. As this wasn't an option, we did have assumptions regarding the specific pathing of the diagonal birds, the timing of the clouds and birds. We did the best we could by playing the figma design in the presentation and used an estimate of about 30% to the bottom and top of the screens for the diagonal birds and using the top and left positioning in pixels within the figma design for the desktop layout and then just allowing the two SVG images to shrink as we had went down to a smaller phone. Personally, I would prefer to have separate images at each major breakpoint to give the UI a great look on each device but there was only so much time that could be alotted to this assignment.
- Other sections were related to the timing of the navigation menu button on hover and certain spacings for the smaller screensizes. We made the design decision of shrinking certain gaps of the hero, Call to action buttons(turned into a column for mobile devices) and scroll/cloud section to not overlap upon the buttons.
- Content regarding the navigation menu links, to be on the safe side, I installed the react router package and created a utility function for a clean url for each link but this was unnecessary so I changed each link to redirect back to the home page for the demo purposes.
- I added a cursor pointer for each button and link even though the figma design didn't show this. As this is common practice, I assumed this was expected and had quickly implemented using Tailwind(cursor-pointer utility class).
- I did wonder about the cloud section regarding the overall design on a desktop as the color of the background was lighter than the clouds it did make the clouds stick out a bit when zoomed out. I was thinking of changing the outer sections of the screen past the 1920px design to match the color of the cloud to make the design cleaner however I didn't want to spend the limited time I had to complete this on that if it took away time from ensuring the other sections were pixel perfect to the final figma design.

## Implementations
- For this assignment, I kept it to a minimal when it came to not adding too many packages and keeping a simple file structure to not overengineer the application adding unnecessary complexity. Before writing any code I looked over the Figma file and quickly split up the sections of the design into components that gave me a good idea of how to tackle this assignment. I also checked the design presentation to see what other small pieces such as the animations to ensure I spent my limited available time on the correct approach and decrease the amount of assumptions. I used a top-down approach with building the navigation menu, followed by the hero section, the call-to-action buttons, the scroll indicator, and finally the cloud and birds UI. When building layouts for the first time, I like to first get it to work first before start to refactor as the logic or the approach may require a different direction. This made it simple to then refactor our file structure to the certain sections of the UI. I will include an image of this for your convenience. The following sections had their own folder, Hero, Motion, Navigation, UI, and Utility folder. Within these folders, I used a component folder for the components I had refactored as the building blocks for that certain section of the design. This made it easy to keep track of where each react component was used. As this assignment was smaller, it didn't require a complex file structure but using this approach, if we had added more pages, it would be easy to scale. Overall I really enjoyed doing this assignment and wish I could spend more time fine tuning certain parts as I always want to deliver the best I can.
   - <img width="361" height="926" alt="image" src="https://github.com/user-attachments/assets/1319c5e3-a22a-4aac-b642-44fc21b75217" />
- Overall the assignment itself was simple, it definitely did require attention to detail as piece could have been easily overlooked such as the subtle shadow for the navigation menu, and the first message of the hero section, to the background color, and 
- For the animations, I realized that the group of birds(except for 2 static birds & the 2 birds moving diagonally across the screen) all moved up together vertically at the same speed. Along with looking at where the bird positions was on the figma file regarding the top and left position in pixels. This made it easy to solve and this approach was the same for the clouds. The bird transition required a bit of tinkering with the timing to ensure they moved into view and in place around the same time the clouds finished their transition.
- For the responsiveness, I added breakpoints for 300-1280px+ screens(300-768, 768, 1024, 1280+). Unfortunately I can only put in so many hours for this but there are definitely sections I could further iterate on to ensure its the best looking it can be such as iterating more on the clouds and bird positions by adding separate images for each breakpoint, this would make a cleaner design. The text sizes were also updated at certain breakpoints to make it easier to read and fit better when scaling down to a small phone screen of around 300-500px. The text sizes can be further fine tuned.
- For the diagonal birds, I wasn't able to download the bird image so I used a similar bird from the figma file and flipped the svg image to imitate that same motion.

## If I Had More Time
- I always strive to do the best work I can do and I enjoy taking figma designs and bringing it to life with code however with the limited time I had, I believe I could do better with cleaning up certain sections to ensure its the best design on all screen sizes. But for the main intended screen of a desktop, I believe my design does match the figma design well.
- Spend more time refactoring certain sections and creating a cleaner design system to be more reusable and less redunant on certain sections(i.e. instead of manually writing a color code from Figma, it would make more sense to create it in a css variable before building out the UI. This way, a design system is in place at the beginning which makes it easier to continue working on a project as it scales overtime. Another section I would update too would be further optimizing some of the react components such as the navigation links for desktop and mobile.
- As there was no real logic needed to be collected from the user, it didn't make sense to create tests, but if there was, I would have definitely used Vitest and made a few for the buttons and forms(if they were in the design) to ensure the data is being collected and stored correctly. I do believe its important to have tests inplace, with at least a few unit tests, and preferrably an end-to-end test as the app grows larger. It is great to have a safety net in place as you try to quickly iterate and add new features to an app, it is very easy to overlook a small logical change that could break a different section of the app, having this in place gives you quick feedback to allow you to continue moving forward.
- Adding a placeholder page for each of the links and updating the netlify to handle these correctly on a refresh.
- Testing these layouts on my phone more closely and laptop. I mainly used the Google DevTools playing around with various devices and the responsive option.
