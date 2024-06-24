import { http, HttpResponse } from "msw"
import { test_item, test_item_2 } from "./mocks";


// form submission with error response
export const formHandlers = [
    http.post("http://localhost:3000/payment/submit", async () => {
        return HttpResponse.json({
            errors: [
                { type: "field", value: "", message: "please enter your name", path: "name", location: "body" },
                { type: "field", value: "", message: "wrong format", path: "email", location: "body" }
            ]
        }
        );
    })
];

// respond with category item
export const categoryHandlers = [
    http.get("http://localhost:3000/category/*", async () => {
        return HttpResponse.json(test_item_2);
    })
];

// respond with product
export const productHandlers = [
    http.get("http://localhost:3000/product/*", async () => {
        return HttpResponse.json(test_item);
    })
];

export const featuredHandlers = [
    http.get("http://locahost:3000/featured", async () => {
        return HttpResponse.json([test_item, test_item_2]);
    })
];