import React, { useState, useEffect } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';

import styles from '@/styles/Home.module.css'

import PageContainer from '@/layout/PageContainer/PageContainer';
import Article from '@/components/HomePage/Article/Article';

export default function Home() {

	const [articles, setArticles] = useState([]);
	const [visibleArticles, setVisibleArticles] = useState([]);

	useEffect(() => {
		axios.get(`http://localhost:5000/article`)
			.then(({data}) => {
				setArticles(data);
			})
			.catch(err => console.log(err));
	}, []);

	const htmlToText = str => {
		return str.replace(/<\/?[^>]+(>|$)/g, " ");
	}

	return (
		<PageContainer>
			<div className={styles.center}>
				<div className={styles.articles}>
					{
						articles.map((article, i) => {
							const {title, text, imgBase64, authorTag, articleTag} = article;
							return (
								<Article 
									key={i.toString()}
									title={title}
									subtitle={htmlToText(text)}
									// subtitle='hello world'
									imgBase64={imgBase64}
									authorTag={authorTag}
									articleTag={articleTag}/>
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