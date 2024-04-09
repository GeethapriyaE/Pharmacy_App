
export const filters =[
    {
        id: "Discount",
        name: "Discount Range",
        options: [
            
            {value : "10%",label: "10% And Above"},
            {value : "25%",label: "20% And Above"},
            {value : "50%",label: "50% And Above"},
            {value : "75%",label: "75% And Above"},
            {value : "80%",label: "80% And Above"},
        ],
    },
    
];

export const singleFilter=[
    {
        id: "price",
        name: "price",
        options: [
            {value: "99-199", label: "₹99 To ₹199"},
            {value: "499-999", label: "₹499 To ₹999"},
            {value: "999-1499", label: "₹999 To ₹1499"},
            {value: "1499-1999", label: "₹1499 To ₹1999"},
            {value: "1999-2499", label: "₹1999 To ₹2499"},

        ]
    },
    {
        id:"stock",
        name: "Availability",
        options:[
            { value: "In_stock", label:"In stock"},
            { value: "Out of Stock", label:"Out of Stock"},
        ],
    },
]
export const sortOptions=[
    { name: "Price: Low to High", query:"price_low",current: false},
    { name: "Price: High to Low", query:"price_high",current:false},
];