import { http, HttpResponse } from "msw"


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