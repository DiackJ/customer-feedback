import {z} from 'zod';

const reviewSchema = z.object({
    name: z.string(), 
    vendor: z.string(),
    product: z.string(),
    rating: z.number().min(1).max(5),
    review: z.string().maxLength(250),
    createdAt: z.date().default(new Date())
});

module.exports = reviewSchema; 