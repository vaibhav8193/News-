import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    articles = []
    constructor(props) {
        super(props)
        console.log("this is a constructor which we will use here")
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0,

        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - News Monkey`
    }
    async update() {
        this.props.setProgress(2);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=70a5a2c435764c5fb55d8754bbd1cd86&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        
        let parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({
            articles: parsedData.articles, 
            totalResults: parsedData.totalResults,
           loading: false
        })
        this.props.setProgress(100);
    }
    async componentDidMount() {
        //let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=70a5a2c435764c5fb55d8754bbd1cd86&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        //  this.setState({ loading: true })
        //  let data = await fetch(url);
        //  let parsedData = await data.json();
        //  console.log(parsedData);
        //  this.setState({
        //     articles: parsedData.articles, totalResults: parsedData.totalResults,
        //      loading: false
        //  })
        this.update();
    }
    
    handleNextButton = async () => {
        //  console.log("next page")
        //if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {


        //  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=70a5a2c435764c5fb55d8754bbd1cd86&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })
        //let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({ articles: parsedData.articles })

        // this.setState({
        //   page: this.state.page + 1,
        //  articles: parsedData.articles,
        // loading: false
        // })
        //  }
        this.setState({ page: this.state.page + 1 })
        this.update();

    }
    handlePreviousButton = async () => {
        //console.log("previous page")
        //let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=70a5a2c435764c5fb55d8754bbd1cd86&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        //this.setState({ loading: true })
        //let data = await fetch(url);
        //let parsedData = await data.json();
        //console.log(parsedData);
        //this.setState({ articles: parsedData.articles })
        //this.setState({
        //  page: this.state.page - 1,
        // articles: parsedData.articles,
        // loading: false
        //})
        this.setState({ page: this.state.page - 1 })
        this.update()
    }
    fetchMoreData = async () => {
        this.setState({page: this.state.page + 1})
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=70a5a2c435764c5fb55d8754bbd1cd86&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles), 
            totalResults: parsedData.totalResults,
           
        })
    }
    render() {
        return (
            <>
                <h1 className="text-center " style={{ margin: '40px 0px', color: 'red', fontFamily: 'fantasy', marginTop: '90px'}} > Top {this.capitalizeFirstLetter(this.props.category)} HeadLines !</h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength = {this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                >
                <div className="container my-3">
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.id}>
                                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}


                    </div>
                    </div>
                </InfiniteScroll>
               
            </>
        )
    }
}

export default News
