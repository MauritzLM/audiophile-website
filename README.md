# Frontend Mentor - Audiophile e-commerce website solution

This is a solution to the [Audiophile e-commerce website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add/Remove products from the cart
- Edit product quantities in the cart
- Fill in all fields in the checkout
- Receive form validations if fields are missed or incorrect during checkout
- See correct checkout totals depending on the products in the cart
  - Shipping always adds $50 to the order
  - VAT is calculated as 20% of the product total, excluding shipping
- See an order confirmation modal after checking out with an order summary
- **Bonus**: Keep track of what's in the cart, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [typescript](https://www.typescriptlang.org/)
- [SASS](https://sass-lang.com/)
- [vite](https://vitejs.dev/)

### What I learned

- The project was much larger than I realized. I had to spend more time on planning components and state, and it was my first time using typescript so I had to learn about types and using them in react. It took me longer than usual to get started, but later on I could see why using types are important as a project gets larger.

- I also used this project as an opportunity to learn more about testing in react. I got more comfortable with testing user actions, but I still struggle with testing fetch functions and database functions. 

- Figuring out the cart state was difficult. Keeping track of items and updating the cart correctly together with the functionality of the number inputs to add or remove items was a fun challenge.  

### Continued development

I want to improve at writing tests for my components and pages, so I can be more sure about my code. I always want to keep getting better at writing practical clean code.
I also want to continue learning typescript.

### Useful resources

- [Video on dynamic image imports](https://www.youtube.com/watch?v=7EFZIe_Cpv8) - Before I realized I can put my images in a /public folder for vite, I looked into ways to import images and found this video helpful.

- If hosting on vercel and you get an error when you refresh the page you can try this method. Create a vercel.json file and paste this code in there:
  ```json
  { "rewrites": [{ "source": "/(.*)", "destination": "/" }] }
  ```
### Things I added

- I used express with typescript and a postgres database for the backend hosted on [railway](railway.app)
- category property to other products array and featured product property to product object in the database / data file.
- cart notification (when there an item(s) in the cart)

## Author

- Frontend Mentor - [@MauritzLM](https://www.frontendmentor.io/profile/MauritzLM)