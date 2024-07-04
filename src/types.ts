// item/product type
export interface item {
    id: number,
    slug: string,
    name: string,
    image: {
        mobile: string,
        tablet: string,
        desktop: string
    },
    category: string,
    categoryimage: {
        mobile: string,
        tablet: string,
        desktop: string
    },
    new: boolean,
    price: number,
    description: string,
    features: string,
    includes: {
        quantity: number,
        item: string
    }[],
    gallery: {
        first: {
            mobile: string,
            tablet: string,
            desktop: string
        },
        second: {
            mobile: string,
            tablet: string,
            desktop: string
        },
        third: {
            mobile: string,
            tablet: string,
            desktop: string
        }
    },
    others: {
        slug: string,
        name: string,
        category: string,
        image: {
            mobile: string,
            tablet: string,
            desktop: string
        }
    }[],
    featured: boolean
}

// fetched items types
export interface fetchedItems {
    [key: string]: item[],
}

// errors
export interface error {
    type: string,
    value: string,
    msg: string,
    path: string,
    location: string
}

export interface formObj {
    [key: string]: string,
}