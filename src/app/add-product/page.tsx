import FormSubmitButton from "@/components/FormSubmitButton";
import prisma from "@/lib/db/prisma";
import { redirect } from "next/navigation";


export const metadata = {
    title: "Add Product - Flowmazon"
}

async function addProduct(formData: FormData){
    "use server";
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const imageUrl = formData.get("description")?.toString();
    const price = Number(formData.get("price") || 0);

    if (!imageUrl ||!name || !description || !price){
        throw Error("Missing required fields");
    }

    await prisma.product.create({
        data:{name, description, imageUrl, price},
    });

    redirect("/");
}

export default function AddProductPage(){
    return (
        <div>
            <h1 className="text-lg mb-3 fond-bold">Add Product</h1>
            <form action={addProduct}>
                <input 
                required
                name="name"
                placeholder="Name"
                className="mb-3 w-full input input-bordered"
                />

                <textarea
                required
                name="description"
                placeholder="Description"
                className="textarea-bordered textarea mb-3 w-full"
                />

                <input 
                required
                name="imageUrl"
                placeholder="Image URL"
                type="url"
                className="mb-3 w-full input input-bordered"
                />

                <input  
                required
                name="price"
                placeholder="Price"
                type="number"
                className="mb-3 w-full input input-bordered"
                />

                <FormSubmitButton
                className="btn-block" 
                >
                ADD PRODUCT
                </FormSubmitButton>
            </form>
        </div>
    );
}

/*
"use client";

export default function ErrorPage(){
    return <div>Something went wrong, please refresh the page</div>
}

*/