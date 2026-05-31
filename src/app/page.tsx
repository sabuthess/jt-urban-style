// import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Header />

			<main className='flex   items-center h-[80vh]'>
				<div className='flex flex-col w-[60%] mx-auto justify-center items-center  p-2  text-center'>
					<div className=' flex justify-center items-cente mx-auto mb-6 '>
						<h1 className='text-8xl font-semibold  '>
							Start shopping online with
							<mark className='bg-none relative text-inherit inline-block bg-inherit px-2  '>
								<span className='relative z-10 font-bold'>HanzD</span>
								<span className='bg-red-400 h-2 w-full -bottom-1 left-8 inline-block absolute z-0 text-red-400  transition-custom py-3'></span>
							</mark>
						</h1>
					</div>
					<div className='flex-col w-[80%]'>
						<div className='text-center leading-6'>
							<p>
								Discover the convenience of shopping from home with HanzD.
								Find a wide variety of high-quality products at competitive
								prices and enjoy exceptional customer service.
							</p>
						</div>
					</div>
					<div className=' flex gap-5 p-3 items-center'>
						<div className=''>
							<a
								href='https://github.com/dilanespinoza/sabu-plaza'
								target='_blank'>
								Repositorie
							</a>
							<hr className='border-black' />
						</div>
						<Link href='/products'>
							<button className='bg-neutral-800 p-3 text-white'>
								Go to store
							</button>
						</Link>
					</div>
				</div>
			</main>
		</>
	);
}