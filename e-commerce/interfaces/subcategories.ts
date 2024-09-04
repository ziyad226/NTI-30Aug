import { Document } from 'mongodb';
import { Categories } from './categories';

export interface subcategories extends Document {
    name: string
    image: string
    category: Categories
}