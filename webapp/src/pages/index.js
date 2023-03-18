import React, { useState, useEffect } from 'react';

import styles from '@/styles/Home.module.css'

import PageContainer from '@/layout/PageContainer/PageContainer';
import Article from '@/components/HomePage/Article/Article';

export default function Home() {

	const [articles, setArticles] = useState([
		{
			title: '7 Wonderful Places to Visit in the Dark Web',
		},
		{
			title: '3 tips for optimising your Unity games',
		},
		{
			title: 'Goodbye LinkedIn. A new era of hiring startups has arrived.',
		},
		{
			title: 'Jetbrains Fleet vs VsCode (Will Fleet kill VsCode?). Jetbrains Fleet vs VsCode (Will Fleet kill VsCode?). Jetbrains Fleet vs VsCode (Will Fleet kill VsCode?)',
		},
		{
			title: '3 tips for optimising your Unity games',
		},
		{
			title: '3 tips for optimising your Unity games',
		},
		{
			title: '3 tips for optimising your Unity games',
		},
		{
			title: '3 tips for optimising your Unity games',
		},
		{
			title: '3 tips for optimising your Unity games',
		},
		
	]);
	const [visibleArticles, setVisibleArticles] = useState([]);

	useEffect(() => {

	}, []);

	return (
		<PageContainer>
			<div className={styles.center}>
				<div className={styles.articles}>
					{
						articles.map(article => {
							const {title, blocks} = article;
							return (
								<Article 
									title={title}
									subtitle={"Make it work, make it good, make it fast… make it faster? — This past decade, the video game industry has offered us amazing examples of how creative minds can push the boundary and bypass limitations"}/>
							)
						})
					}
				</div>
				<div className={styles.sidebar}>
					<span>This is the sidebar</span>
				</div>
			</div>
		</PageContainer>
	)
}