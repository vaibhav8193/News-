import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div>

                <div className="card">
                    <div>
                        <span className="badge rounded-pill bg-danger" style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            position: 'absolute',
                            right: '0'
                        }}>

                            {source}
                        </span>
                    </div>
                    <img src={imageUrl ? imageUrl : "https://images.firstpost.com/wp-content/uploads/2021/08/screencapture-pbs-twimg-media-E-Cf8xtXoAMAxLq-2021-08-31-14_55_09-1.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">

                        <h5 className="card-title" >{title}...</h5>
                        <p className="card-text">{description}....</p>
                        <p className="card-text"><small className="text-muted">By{!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="nonreferal" href={newsUrl} className="btn btn-sm btn-dark" target="_blank">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
