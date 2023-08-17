import Layout from '../components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import profileImage from '../../public/images/profile/developer-pic-1.png';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/icons';
import HireMe from '@/components/HireMe';
import TempAlert from '@/components/TempAlert';

export default function Home() {
	return (
		<>
			<Head>
				<title>Suyash Mishra</title>
				<meta name='description' content='Suyash Mishra Portfolio' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<TempAlert />
			<main className='flex items-center text-dark w-full min-h-screen'>
				<Layout className='pt-0'>
					<div className='flex items-center justify-between w-full'>
						<div className='w-1/2'>
							<Image src={profileImage} className='w-full h-auto' />
						</div>
						<div className='w-1/2 flex flex-col items-center self-center'>
							<AnimatedText
								className='!text-6xl !text-left'
								text='Transforming Ideas into Innovative Web Applications'
							/>
							<p className='my-4 text-lg font-medium'>
								As an adept full-stack coder, I commit to transforming concepts
								into inventive web apps. Delve into my recent works and posts,
								spotlighting my proficiency in React.js and web crafting.
							</p>
							<div className='flex items-center self-start mt-2'>
								<Link
									href='/cv.pdf'
									className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark'
									download={true}
								>
									Resume
									<LinkArrow className={'w-6 ml-1'} />
								</Link>
								<Link
									href='mailto:contact@suyashmishra.com'
									target={'_blank'}
									className='ml-4 flex items-center bg-light text-dark p-2.5 px-6 rounded-lg text-lg font-semibold border-2 border-solid border-transparent hover:border-dark underline'
								>
									Contact Me
								</Link>
							</div>
						</div>
					</div>
				</Layout>
				<HireMe />
				<div className='absolute right-8 bottom-8 inline-block w-24'>
					<Image
						src={lightBulb}
						alt='Suyash Mishra'
						className='w-full  h-auto'
					/>
				</div>
			</main>
		</>
	);
}
