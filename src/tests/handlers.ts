import { http, HttpResponse } from "msw"
import { test_item } from "./mocks";


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

export const categoryHandlers = [
    http.get("http://localhost:3000/category/speakers", async () => {
        return HttpResponse.json({
            // respond with category items
        });
    })
];

export const productHandlers = [
    http.get("http://localhost:3000/product/ZX7%20Speaker", async () => {
        return HttpResponse.json(test_item);
    })
];