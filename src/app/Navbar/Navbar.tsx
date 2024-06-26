import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png"
import { redirect } from "next/navigation";
import { getCart } from "@/lib/db/cart";
import ShoppingCartButton from "./ShoppingCartButton";

async function searchProducts(formData: FormData) {
    "use server";
    const searchQuery = formData.get("searchQuery")?.toString();

    if (searchQuery) {
        redirect("/search?query=" + searchQuery);
    }
}

export default async function Navbar() {
    const cart = await getCart();
    return (
        <div className="bg-base-100">
            <div className="navbar max-w-7xl m-auto flex-col sm:flex-row gap-2">
                <div className="flex-1">
                    <Link href="/" className="btn btn-ghost text-xl normal-case">
                        <Image src={logo} height={40} width={40} alt="Flowmazon logo"></Image>
                        Flowmazon
                    </Link>
                </div>
                <div className="flex-none gap-2">
                    <form action={searchProducts}>  {/**One can question: Why didn't we put the url directly in the action instead of using server action? Because this will reload the page which is bad user experience, instead we use server actions for better user experience*/}
                        <div className="form-control">
                            <input name="searchQuery" placeholder="search" className="input input-bordered w-full min-w-[100px]">

                            </input>
                        </div>
                    </form>
                    <ShoppingCartButton cart={cart}></ShoppingCartButton>
                </div>
            </div>
        </div>
    )
}